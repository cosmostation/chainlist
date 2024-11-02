

## Chain Information By Cosmostation

- Migrated from [Token Resource](https://github.com/cosmostation/cosmostation_token_resource)
- [Validator's moniker image](https://github.com/cosmostation/chainlist/tree/main#how-to-add-your-validator-image)
- [Add Asset's Info](https://github.com/cosmostation/chainlist/tree/main#how-to-add-your-token-info)
- [Add Erc20 Info](https://github.com/cosmostation/chainlist/tree/main#how-to-add-your-erc20-token-info)
- [Add Cw20 Info](https://github.com/cosmostation/chainlist/tree/main#how-to-add-your-cw20-token-info)
- [dApp link and description on Mobile Wallet](https://github.com/cosmostation/chainlist/tree/main/dapp)
- [Add gRPC/EVM Endpoint](https://github.com/cosmostation/chainlist/tree/main#how-to-add-endpoint)


## Productions using with

- [Mintscan Explorer](https://mintscan.io)
- [Extension Wallet](https://bit.ly/3VhVJIF)
- [Android Wallet](https://bit.ly/2BWex9D)
- [iOS Wallet](https://apple.co/2IAM3Xm)




## Chain Image Set
<img src="https://raw.githubusercontent.com/cosmostation/chainlist/main/resource/static/guide_chains.png" width="368" height="266"> <img src="https://raw.githubusercontent.com/cosmostation/chainlist/main/resource/static/guide_tokens.png" width="249" height="266">


- Chains and assets image with 3D
- Available in all sizes and formats. 
- [Figma Link](https://www.figma.com/design/MbcSKIWlFb3LelMkkdV8qZ/Brand-Asset?node-id=0-1&t=GAXd4H0Y4AZ7q89P-1)
- [DownLoad](https://www.figma.com/community/file/1410186894545005444/cosmostation-brand-asset)



<details open>
  <summary><h2 style='display: inline; font-size: 24px'>How to add your validator image</h2></summary>

 - Add your image to `${targetchain}/moniker` folder
 - Image with png format and validator address name
 - [Example](https://github.com/cosmostation/chainlist/blob/main/chain/cosmos/moniker/cosmosvaloper1clpqr4nrk4khgkxj78fcwwh6dl3uw4epsluffn.png) will display cosmostation validator moniker logo for cosmos
</details>

---

<details>
  <summary><h2 style='display: inline; font-size: 24px'>How to add your token info</h2></summary>

‼️ Please be noted that tokens of Testnets and unverified networks may not be merged to master.
1. Fork this repo to your own github account
2. Clone fork and create new branch

   ```shell
   git clone git@github.com:YOUR_ACCOUNT/chainlist.git
   cd chainlist
   git branch <branch_name>
   git checkout <branch_name>
   ```

3. Add the info of your token in the chain that your token needs to be displayed
   - Common info to fill
     - `denom`
       - token's denom
     - `type`
       - `staking` refers that the token is the native staking token of a chain.
       - `native` refers that the token is a native token issued on a chain, but not the staking token.
       - `ibc` refers that the token was ibc transferred.
       - `pool` refers that the token represents a pool token.
       - `bridge` refers that the token is a bridge token.
       - `cw20` refers that the token is a cw20 token.
       - `erc20` refers thatthe token is an erc20 token.
     - `origin_chain`
       - The origin chain where this token was issued.
     - `origin_denom`
       - Original denom of the token.
     - `origin_type`
       - Original type of the token. [ staking, native, pool, ibc, bridge, cw20, erc20 ]
     - `symbol`
       - The displayed name of the token in the list.
     - `decimals`
       - Token's decimals.
     - `image` (optional)
       - Image route of the token.
       - Add image in `${targetchain}/asset` folder.
         - Make sure to upload a `png` file.
     - `coinGeckoId`
       - Coin gecko site's API ID <ex) https://www.coingecko.com/en/coins/cosmos-hub -> API ID: cosmos>
       - Empty string if none
   - If the type is staking, provide the info below:
     - `description`
       - A brief summary of the token
- If the type is ibc, provide the info below:
  - `enable` (optional)
    - `true` if ibc transmission is possible
  - `channel` (optional)
  - `port` (optional)
    - Add the token's channel and port
    - `counter_party` (optional)
    - `channel`
      - `port`
        - Add counter party's channel and port
      - `denom`
      - Token's denom before ibc transfer
   - `path` (optional)
    - If the token was transferred via ibc, bridge or other path, provide full details of where it was transferred from.
    - If the type is bridge, provide the info below:
    - `path` (optional)
      - If the token was transferred via ibc, bridge or other path, provide full details of where it was transferred from.
    - `contract` (optional)
      - If the token was transferred via contract, provide the contract address.

---

- Native Token
  `chain/${chain}/assets.json`

  ```json
  // example OSMOSIS
  [
    {
      "denom": "uosmo",
      "type": "staking",
      "origin_chain": "osmosis",
      "origin_denom": "uosmo",
      "origin_type": "staking",
      "symbol": "OSMO",
      "decimals": 6,
      "description": "Osmosis Staking Coin",
      "image": "osmosis/asset/osmo.png",
      "coinGeckoId": "osmosis"
    },
    {
      "denom": "uion",
      "type": "native",
      "origin_chain": "osmosis",
      "origin_denom": "uion",
      "origin_type": "native",
      "symbol": "ION",
      "decimals": 6,
      "description": "Native Coin",
      "image": "osmosis/asset/ion.png",
      "coinGeckoId": "ion"
    },
    // example KUJIRA
    {
      "denom": "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
      "type": "native",
      "origin_chain": "kujira",
      "origin_denom": "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
      "origin_type": "native",
      "symbol": "USK",
      "decimals": 6,
      "description": "USK Stable Asset",
      "image": "kujira/asset/usk.png",
      "coinGeckoId": "usk"
    },
  ]
  ```

- IBC Token

  ```json
  [
    // example COSMOS
    {
      "denom": "ibc/14F9BC3E44B8A9C1BE1FB08980FAB87034C9905EF17CF2F5008FC085218811CC",
      "type": "ibc",
      "origin_chain": "osmosis",
      "origin_denom": "uosmo",
      "origin_type": "staking",
      "symbol": "OSMO",
      "decimals": 6,
      "enable": true,
      "path": "osmosis>cosmos",
      "channel": "channel-141",
      "port": "transfer",
      "counter_party": {
        "channel": "channel-0",
        "port": "transfer",
        "denom": "uosmo"
      },
      "image": "osmosis/asset/osmo.png", // Set image route for base_denom
      "coinGeckoId": "osmosis"
    },
    // example IRIS
    {
      "denom": "ibc/E244B968EE0D1EC047E7516F6ABECE7B68E9FD93B4BD8D08D13642247416BB17",
      "type": "ibc",
      "origin_denom": "weth",
      "origin_type": "erc20",
      "symbol": "WETH",
      "origin_chain": "ethereum",
      "decimals": 18,
      "enable": true,
      "path": "ethereum>gravity-bridge>iris",
      "channel": "channel-29",
      "port": "transfer",
      "counter_party": {
        "channel": "channel-47",
        "port": "transfer",
        "denom": "gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
      },
      "image": "ethereum/asset/weth.png", // Set image route for base_denom
      "coinGeckoId": "weth",
      "contract": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"

    }
  ]
  ```

- Bridge Token

  ```json
  [
    // example GRAVITY-BRIDGE
    {
      "denom": "gravity0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      "type": "bridge",
      "origin_chain": "ethereum",
      "origin_denom": "wbtc",
      "origin_type": "erc20",
      "symbol": "WBTC",
      "decimals": 8,
      "path": "ethereum>gravity-bridge",
      "image": "ethereum/asset/wbtc.png",
      "coinGeckoId": "wrapped-bitcoin",
      "contract": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
    },
    // example IRIS
    {
      "denom": "htltbcbusd",
      "type": "bridge",
      "origin_chain": "bnb-beacon-chain",
      "origin_denom": "busd",
      "origin_type": "bep2",
      "symbol": "BUSD",
      "decimals": 8,
      "path": "bnb-beacon-chain>iris",
      "image": "bnb-beacon-chain/asset/busd.png",
      "coinGeckoId": "binance-usd"
    },
  ]
  ```

- Pool Token

  ```json
  // example COSMOS
  [
    {
      "denom": "poolDFB8434D5A80B4EAFA94B6878BD5B85265AC6C5D37204AB899B1C3C52543DA7E",
      "type": "pool",
      "origin_chain": "cosmos",
      "origin_denom": "poolDFB8434D5A80B4EAFA94B6878BD5B85265AC6C5D37204AB899B1C3C52543DA7E",
      "origin_type": "pool",
      "symbol": "GDEX-1",
      "decimals": 6,
      "description": "pool/1",
      "image": "cosmos/asset/pool.png", // Add pool image in the target chain’s folder
      "coinGeckoId": ""
    },
  ]
  ```

4. Commit and push to your fork

   ```shell
   git add -A
   git commit -m “Add <YOUR TOKEN NAME>”
   git push origin <branch_name>
   ```

5. From your repository, make pull request (PR)
</details>

---

<details>
  <summary><h2 style='display: inline; font-size: 24px'>How to add your CW20 token info</h2></summary>

  [Juno Cw20](https://github.com/cosmostation/chainlist/blob/main/chain/juno/cw20.json) list supporting
  1. Fork this repo to your own github account\
  2. Clone fork and create new branch

   ```shell
   git clone git@github.com:YOUR_ACCOUNT/chainlist.git
   cd chainlist
   git branch <branch_name>
   git checkout <branch_name>
   ```

   3. Add the info of your token in the chain that your token needs to be displayed
   If there is no chain in the list, create a folder for the chain and add info in the folder
   Then add the name of the folder in: supports.json
   Changes will be updated within 24 hours after merged to master
   - `chainId`
     - -1
   - `chainName`
     - Chain with the token
   - `address`
     - Token's contract_address
   - `symbol`
     - Name of token's symbol
   - `description`
     - A brief summary of the token
   - `decimals`
     - Decimal of the token
   - `image`
     - Image route of the token
     - `/${targetChain}/asset` add image in the folder
     - Make sure to upload a `png` file
   - `default`
     - default value is `false`
   - `coinGeckoId`
     - Coin gecko site's API ID <ex) https://www.coingecko.com/en/coins/cosmos-hub -> API ID: cosmos>
     - Empty string if none

---

- Cw20 Token
  `chain/${targetChain}/cw20.json`

  ```json
  // example JUNO
  [
    {
      "chainId": -1,
      "chainName": "juno",
      "address": "juno1pqht3pkhr5fpyre2tw3ltrzc0kvxknnsgt04thym9l7n2rmxgw0sgefues",
      "symbol": "DAO",
      "description": "DAO DAO",
      "decimals": 6,
      "image": "juno/asset/dao.png",
      "default": false,
      "coinGeckoId": ""
    },
    {
      "chainId": -1,
      "chainName": "juno",
      "address": "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
      "symbol": "NETA",
      "description": "NETA",
      "decimals": 6,
      "image": "juno/asset/neta.png",
      "default": true,
      "coinGeckoId": "neta"
    },
  ]
  ```

  4. Commit and push to your fork

  ```shell
    git add -A
    git commit -m “Add <YOUR TOKEN NAME>”
    git push origin <branch_name>
  ```

  5. From your repository, make pull request (PR)
  </details>

---

<details>
  <summary><h2 style='display: inline; font-size: 24px'>How to add your ERC20 token info</h2></summary>

  [Evmos Erc20](https://github.com/cosmostation/chainlist/blob/main/chain/evmos/erc20.json) list supporting

  1. Fork this repo to your own github account
  2. Clone fork and create new branch

   ```shell
   git clone git@github.com:YOUR_ACCOUNT/chainlist.git
   cd chainlist
   git branch <branch_name>
   git checkout <branch_name>
   ```

   3. Add the info of your token in the chain that your token needs to be displayed
   If there is no chain in the list, create a folder for the chain and add info in the folder
   Then add the name of the folder in: supports.json
   Changes will be updated within 24 hours after merged to master
   - `chainId`
     - ChainId of the chain
   - `address`
     - Token's contract_address
   - `chainName`
     - Name of the displayed token
   - `symbol`
     - Name of token's symbol
   - `decimals`
     - Decimal of the token
   - `image`
     - Image route of the token
     - `/${targetChain}/asset` add image in the folder
     - Make sure to upload a `png`file
   - `default`
     - default value is `false`
   - `coinGeckoId` (optional)
     - Coin gecko site's API ID <ex) https://www.coingecko.com/en/coins/cosmos-hub -> API ID: cosmos>
     - Empty string if none

   ---

- ERC20 Token
  `chain/${targetChain}/erc20.json`

  ```json
  // example EVMOS
  [
    {
      "chainId": 9001,
      "chainName": "evmos",
      "address": "0xD4949664cD82660AaE99bEdc034a0deA8A0bd517",
      "symbol": "WEVMOS",
      "description": "Wrapped Evmos",
      "decimals": 18,
      "image": "evmos/asset/wevmos.png",
      "default": true,
      "coinGeckoId": "evmos"
    },
    {
      "chainId": 9001,
      "chainName": "evmos",
      "address": "0xb72A7567847abA28A2819B855D7fE679D4f59846",
      "symbol": "ceUSDT",
      "description": "Tether USD (Celer)",
      "decimals": 6,
      "image": "ethereum/asset/usdt.png",
      "default": false,
      "coinGeckoId": "tether"
    },
  ]
  ```

  4. Commit and push to your fork

   ```shell
   git add -A
   git commit -m “Add <YOUR TOKEN NAME>”
   git push origin <branch_name>
   ```

  5. From your repository, make pull request (PR)
</details>

---

<details>
  <summary><h2 style='display: inline; font-size: 24px'>How to add endpoint</h2></summary>

To add endpoints managed by chainlist,
You must add an endpoint to `https://github.com/cosmostation/chainlist/blob/main/chain/{chain}/param.json`

```
{
   ...,
    "grpc_endpoint" : [
        {
            "provider": "Cosmostation",
            "url": "grpc-humans.cosmostation.io:443"
        },
        {
            "provider": "NodeStake",
            "url": "grpc.humans.nodestake.top:443"
        }
    ],
    "evm_rpc_endpoint" : [
        {
            "provider": "Cosmostation",
            "url": "https://rpc-humans-evm.cosmostation.io"
        },
        {
            "provider": "Posthuman",
            "url": "https://evm.humans.posthuman.digital"
        }
    ],
   ...
}
```

Before requesting addition, please check whether the endpoint is operating properly using the method below.

- Check gRPC Endpoint

```sh
GRPC_URL=<GPRC_ENDPOINT_URL>

#check has grpc endpoints
grpcurl $GRPC_URL list
#check has grpc nodeinfo
grpcurl $GRPC_URL cosmos.base.tendermint.v1beta1.Service.GetNodeInfo
```

- Check EVM Endpoint

```sh
EVM_URL=<EVM_ENDPOINT_URL>

curl --location '$EVM_URL' \
--header 'Content-Type: application/json' \
--data '{
    "jsonrpc": "2.0",
    "method": "eth_getBlockByNumber",
    "params": [
        "latest",
        false
    ],
    "id": 1
}'
```

</details>

---

## Contact and Community
- [Official Website](https://www.cosmostation.io)
- [E-mail](support@cosmostation.io)
- [Telegram - International](https://t.me/cosmostation)
- [Kakao - Korean](https://open.kakao.com/o/g6KKSe5)

## License
Copyright © Cosmostation, Inc. All rights reserved.
Licensed under the [MIT](LICENSE).
