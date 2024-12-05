

## Chain Information By Cosmostation

- Migrated from [Token Resource](https://github.com/cosmostation/cosmostation_token_resource)
- [Validator's moniker image](https://github.com/cosmostation/chainlist/tree/main#how-to-add-your-validator-image)
- [Add Asset's Info](https://github.com/cosmostation/chainlist/tree/main#how-to-add-your-coin-info)
- [Add Cw20 Info](https://github.com/cosmostation/chainlist/tree/main#how-to-add-your-cw20-token-info)
- [Add Erc20 Info](https://github.com/cosmostation/chainlist/tree/main#how-to-add-your-erc20-token-info)
- [dApp link and description on Mobile Wallet](https://github.com/cosmostation/chainlist/tree/main/wallet_mobile/dapp)
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
  <summary><h2 style='display: inline; font-size: 24px'>How to add your coin info</h2></summary>

‼️ Please be noted that coins of Testnets and unverified networks may not be merged to master.
1. Fork this repo to your own github account
2. Clone fork and create new branch

   ```shell
   git clone git@github.com:YOUR_ACCOUNT/chainlist.git
   cd chainlist
   git branch <branch_name>
   git checkout <branch_name>
   ```

3. Add the info of your coin in the chain `assets_2.json` file that your coin needs to be displayed
    >If there is no chain in the list, create a folder for the chain  
    Then add `assets_2.json` file to the folder, add coin info to that file  
    Changes will be updated within 24 hours after merged to master


   - ***Common info to fill***
     - `type`
       - `native` refers that the coin is a native coin issued on a chain.
       - `ibc` refers that the coin was ibc transferred.
       - `bridge` refers that the coin is a bridge coin.
     - `denom`
       - Coin's denom
     - `name`
       - Coin's name
     - `symbol`
       - The displayed name of the coin in the list.
     - `description`
       - A brief summary of the coin
     - `decimals`
       - Coin's decimals.
     - `image` (optional)
       - Image route of the coin.
       - Add image in `${targetchain}/asset` folder.
         - Make sure to upload a `png` file.
     - `color` (optional)
     - `coinGeckoId`
       - Coin gecko site's API ID 
         - ex. https://www.coingecko.com/en/coins/cosmos-hub 
            - API ID: *cosmos*
       - Empty string if none

    - ***If the type is <u>ibc</u>, provide the info below:***
      - `ibc_info`
        - `path`
          - If the coin was transferred via ibc, bridge or other path, provide full details of where it was transferred from.
        - `client`
          - `channel`
          - `port`
            - Add the coin's channel and port
        - `counterparty`
          - `channel`
          - `port`
            - Add counter party's channel and port
          - `chain`
          - `denom`
            - Coin's denom before ibc transfer
     - ***If the type is <u>bridge</u>, provide the info below:***
       - `bridge_info`
         - `path` (optional)
           - If the coin was transferred via ibc, bridge or other path, provide full details of where it was transferred from.
         - `counterparty`
           - `chain`
           - `contract` (optional)
             - If the coin was transferred via contract, provide the contract address.
         - `enable` (optional)
           - `true` if ibc transmission is possible



   ### Coin info json example
   `chain/${chain}/assets_2.json`

    - Native Coin

      ```json
      // example OSMOSIS
      [
        {
            "type": "native",
            "denom": "uosmo",
            "name": "Osmosis",
            "symbol": "OSMO",
            "description": "The native token of Osmosis",
            "decimals": 6,
            "image": "https://raw.githubusercontent.com/cosmostation/chainlist/master/chain/osmosis/asset/osmo.png",
            "color": "#760dbb",
            "coinGeckoId": "osmosis"
        },
        {
            "type": "native",
            "denom": "uion",
            "name": "Ion DAO",
            "symbol": "ION",
            "description": "ION is the second native token of Osmosis.",
            "decimals": 6,
            "image": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg",
            "color": "#4453c7",
            "coinGeckoId": "ion"
        }
      ]
      ```

    - IBC Coin

      ```json
      [
        // example COSMOS
        {
            "type": "ibc",
            "denom": "ibc/14F9BC3E44B8A9C1BE1FB08980FAB87034C9905EF17CF2F5008FC085218811CC",
            "name" : "Osmosis",
            "symbol": "OSMO",
            "description": "Osmosis Staking Coin",
            "decimals": 6,
            "image": "https://raw.githubusercontent.com/cosmostation/chainlist/master/chain/osmosis/asset/osmo.png",
            "coinGeckoId": "osmosis",
            "ibc_info" : {
                "path": "osmosis>cosmos",
                "client" : {
                    "channel": "channel-141",
                    "port": "transfer"
                },
                "counterparty": {
                    "channel": "channel-0",
                    "port": "transfer",
                    "chain": "osmosis",
                    "denom": "uosmo"
                }
            }
        }
        // example IRIS
        {
            "type": "ibc",
            "denom": "ibc/E244B968EE0D1EC047E7516F6ABECE7B68E9FD93B4BD8D08D13642247416BB17",
            "name" : "Wrapped Ethereum (Ethereum to Gravity-Bridge)",
            "symbol": "WETH.grv",
            "description": "Gravity Bridge WETH",
            "decimals": 18,
            "image": "https://raw.githubusercontent.com/cosmostation/chainlist/master/chain/ethereum/asset/weth.png",
            "coinGeckoId": "weth",
            "ibc_info" : {
                "path": "ethereum>gravity-bridge>iris",
                "client" : {
                    "channel": "channel-29",
                    "port": "transfer"
                },
                "counterparty": {
                    "channel": "channel-47",
                    "port": "transfer",
                    "chain": "gravity-bridge",
                    "denom": "gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
                }
            }
        }
      ]
      ```

    - Bridge Coin

      ```json
      [
        // example GRAVITY-BRIDGE
        {
            "type": "bridge",
            "denom": "gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
            "name" : "Wrapped Bitcoin (Ethereum to Gravity-Bridge)",
            "symbol": "WBTC.grv",
            "description": "Gravity Bridge WBTC",
            "decimals": 8,
            "image": "https://raw.githubusercontent.com/cosmostation/chainlist/master/chain/ethereum/asset/wbtc.png",
            "coinGeckoId": "wrapped-bitcoin",
            "color": "#f39444",
            "bridge_info" : {
                "path": "ethereum>gravity-bridge",
                "counterparty": {
                    "chain": "ethereum",
                    "contract": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
                }
            }
        }
        // example IRIS
        {
            "type": "bridge",
            "denom": "htltbcbusd",
            "name" : "BUSD - Deprecated",
            "symbol": "BUSD",
            "description": "BUSD on IRIS - Deprecated",
            "decimals": 8,
            "image": "https://raw.githubusercontent.com/cosmostation/chainlist/master/chain/bnb-beacon-chain/asset/busd.png",
            "coinGeckoId": "binance-usd",
            "bridge_info" : {
                "path": "bnb-beacon-chain>iris",
                "enable": false
            }
        }
      ]
      ```


4. Commit and push to your fork

   ```shell
   git add -A
   git commit -m “Add <YOUR COIN NAME>”
   git push origin <branch_name>
   ```

5. From your repository, make pull request (PR)
</details>

---

<details>
  <summary><h2 style='display: inline; font-size: 24px'>How to add your CW20 token info</h2></summary>

  [Juno Cw20](https://github.com/cosmostation/chainlist/blob/main/chain/juno/cw20_2.json) list supporting
1. Fork this repo to your own github account
2. Clone fork and create new branch

   ```shell
   git clone git@github.com:YOUR_ACCOUNT/chainlist.git
   cd chainlist
   git branch <branch_name>
   git checkout <branch_name>
   ```

3. Add the info of your token in the chain `cw20_2.json` file that your token needs to be displayed  
   >If there is no chain in the list, create a folder for the chain  
   Then add `cw20_2.json` file to the folder, add token info to that file   
   Changes will be updated within 24 hours after merged to master
      - `type`
        - cw20 
      - `contract`
        - Token's contract_address
      - `name`
        - Token's name
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
      - `coinGeckoId`
        - Coin gecko site's API ID 
          - ex. https://www.coingecko.com/en/coins/cosmos-hub
            - API ID: *cosmos*
        - Empty string if none
      - `color` (optional)
      - `wallet_preload` (optional)
        - default value is `false`


   ### Cw20 info json example
   `chain/${targetChain}/cw20_2.json`

     - Cw20 Token

        ```json
        // example JUNO
        [
          {
              "type": "cw20",
              "contract": "juno1pqht3pkhr5fpyre2tw3ltrzc0kvxknnsgt04thym9l7n2rmxgw0sgefues",
              "name" : "DAO",
              "symbol": "DAO",
              "description": "DAO DAO",
              "decimals": 6,
              "image": "https://raw.githubusercontent.com/cosmostation/chainlist/master/chain/juno/asset/dao.png",
              "coinGeckoId": ""
          },
          {
              "type": "cw20",
              "contract": "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
              "name" : "Neta",
              "symbol": "NETA",
              "description": "The native token cw20 for Neta on Juno Chain",
              "decimals": 6,
              "image": "https://raw.githubusercontent.com/cosmostation/chainlist/master/chain/juno/asset/neta.png",
              "coinGeckoId": "neta",
              "color": "#f87b7b",
              "wallet_preload": true
          }
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

  [Evmos Erc20](https://github.com/cosmostation/chainlist/blob/main/chain/evmos/erc20_2.json) list supporting

1. Fork this repo to your own github account
2. Clone fork and create new branch

   ```shell
   git clone git@github.com:YOUR_ACCOUNT/chainlist.git
   cd chainlist
   git branch <branch_name>
   git checkout <branch_name>
   ```

3. Add the info of your token in the chain that your token needs to be displayed  
   >If there is no chain in the list, create a folder for the chain  
   Then add `erc20_2.json` file to the folder, add token info to that file   
   Changes will be updated within 24 hours after merged to master
   - `type`
     - erc20
   - `contract`
     - Token's contract_address
   - `name`
     - Token's name
   - `symbol`
     - Name of token's symbol
   - `description`
     - A brief summary of the token
   - `decimals`
     - Decimal of the token
   - `image`
     - Image route of the token
     - `/${targetChain}/asset` add image in the folder
     - Make sure to upload a `png`file
   - `coinGeckoId` (optional)
     - Coin gecko site's API ID
       - ex. https://www.coingecko.com/en/coins/cosmos-hub
         - API ID: *cosmos*
     - Empty string if none
   - `color` (optional)
   - `wallet_preload` (optional)
     - default value is `false`


   ### Erc20 info json example
   `chain/${targetChain}/erc20_2.json`

    - ERC20 Token

      ```json
      // example EVMOS
      [
        {
            "type": "erc20",
            "contract": "0xD4949664cD82660AaE99bEdc034a0deA8A0bd517",
            "name" : "Wrapped Evmos",
            "symbol": "WEVMOS",
            "description": "",
            "decimals": 18,
            "image": "https://raw.githubusercontent.com/cosmostation/chainlist/master/chain/evmos/asset/wevmos.png",
            "coinGeckoId": "evmos",
            "wallet_preload": true
        },
        {
            "type": "erc20",
            "contract": "0xb72A7567847abA28A2819B855D7fE679D4f59846",
            "name" : "Tether USD (Celer)",
            "symbol": "ceUSDT",
            "description": "",
            "decimals": 6,
            "image": "https://raw.githubusercontent.com/cosmostation/chainlist/master/chain/ethereum/asset/usdt.png",
            "coinGeckoId": "tether"
        }
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
You must add an endpoint to `https://github.com/cosmostation/chainlist/blob/main/chain/{chain}/param_2.json`

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
- [E-mail](mailto:support@cosmostation.io)
- [Telegram - International](https://t.me/cosmostation)
- [Kakao - Korean](https://open.kakao.com/o/g6KKSe5)

## License
Copyright © Cosmostation, Inc. All rights reserved.
Licensed under the [MIT](LICENSE).
