import { ChainId } from '@injectivelabs/ts-types'
import { ChainGrpcBankApi } from '@injectivelabs/sdk-ts';
import { TokenType } from '@injectivelabs/token-metadata';
import { Network, getNetworkEndpoints } from '@injectivelabs/networks';
import { TokenService, UiBankTransformer } from '@injectivelabs/sdk-ui-ts';
import fs from 'fs/promises';
import existingAssets from './assets.json' assert { type: 'json' };

const ENDPOINTS = getNetworkEndpoints(Network.Mainnet)

const bankApi = new ChainGrpcBankApi(ENDPOINTS.grpc);
const tokenService = new TokenService({
  chainId: ChainId.Mainnet,
  network: Network.Mainnet,
  endpoints: ENDPOINTS
});

async function writeToFile(data, fileName = './automated-assets.json') {
  await fs.writeFile(fileName, JSON.stringify(data, null, 2));
}

async function fetchSupplyTokenMeta() {
  const { supply } = await bankApi.fetchTotalSupply({ limit: 400 });
  const { bankSupply, ibcBankSupply } = UiBankTransformer.supplyToUiSupply(supply);

  return tokenService.toCoinsWithToken([...bankSupply, ...ibcBankSupply]);
}

function mapType(tokenType) {
  const typeMap = {
    [TokenType.Ibc]: 'ibc',
    [TokenType.Erc20]: 'bridge',
  };

  return typeMap[tokenType] || 'native';
}

function getTokenMetaByTokenType(tokenType, token) {
  switch (tokenType) {
    case TokenType.Ibc:
      return {
        enable: true,
        channel: token.ibc.channelId,
        port: "transfer",

      }
    case TokenType.Erc20:
      return {
        contract: token.erc20.address
      }
    default:
      return {}
  }
}

function getTokenFromManuallyAddedAssets(token) {
  return existingAssets.find((asset) => {
    if (asset.denom.toLowerCase() !== token.denom.toLowerCase()) {
      return
    }

    /**
      * We check if asset has origin_chain to check whether it is a manually added or automatically added asset, since we can't get origin_chain for automatically added assets
    **/
    return asset.origin_chain
  })
}

function convertTokens(tokens) {
  return tokens.map(token => {
    const tokenInManuallyAddedAssets = getTokenFromManuallyAddedAssets(token)

    if (tokenInManuallyAddedAssets) {
      return tokenInManuallyAddedAssets
    }

    const baseValues = {
      denom: token.denom,
      type: mapType(token.tokenType),
      origin_denom: token.tokenType === TokenType.Ibc ? token.ibc.baseDenom : token.symbol.toLowerCase(),
      symbol: token.symbol,
      decimals: token.decimals,
      coinGeckoId: token.coinGeckoId,
    }

    const valuesByTokenType = getTokenMetaByTokenType(token.tokenType, token)

    return {
      ...baseValues,
      ...valuesByTokenType
    }
  })
}

(async () => {
  try {
    const bankTokens = await fetchSupplyTokenMeta();
    await writeToFile(convertTokens(bankTokens));
  } catch (error) {
    console.error(`Error: ${error}`);
  }
})();
