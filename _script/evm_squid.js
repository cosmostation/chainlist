import { readFileSync, writeFileSync, rmSync } from 'fs';

const nativeCoinContractAddress = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

async function main() {
    try {
        const chain = process.argv[2];
        const squidChainId = process.argv[3];

        if(!chain || !squidChainId) {
            throw new Error("Missing chain or squidChainId");
        }

        const fileName = `./chain/${chain}/erc20_2.json`;
        const currentAssets = JSON.parse(readFileSync(fileName, 'utf-8'));

        const url = `https://api.squidrouter.com/v1/tokens?chainId=${squidChainId}`;

        const response = await fetch(url);
        const jsonResponse = await response.json();

        const squidAssets = jsonResponse.tokens;

        const currentAssetContractAddresses = currentAssets.map((asset) => {
            return asset.contract.toLowerCase();
        });

        const assetsToAdd = squidAssets.filter((asset) => {
            return !currentAssetContractAddresses.includes(asset.address.toLowerCase()) && asset.address.toLowerCase() !== nativeCoinContractAddress.toLowerCase();
        }).map((asset) => ({
            type: 'erc20',
            contract: asset.address,
            name: asset.name,
            symbol: asset.symbol,
            description: '',
            decimals: asset.decimals,
            image: asset?.logoURI,
            coinGeckoId: asset?.coingeckoId,
        }))

        const mergedAssets = [...currentAssets, ...assetsToAdd];

        writeFileSync(fileName, JSON.stringify(mergedAssets, null, 4));

        console.log('Assets added successfully');
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}

main();