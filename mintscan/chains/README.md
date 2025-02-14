<div align="center">
  <h1> Mintscan </h1>
</div>

‼️ chain-info-social & gas & dapp folder will remove

## 1. How to add your Dapp in Ecosystem

Neutron Ecosystem [Example](https://www.mintscan.io/neutron/ecosystem/)

![banner](https://github.com/cosmostation/chainlist/blob/main/resource/static/ecosystem_demo.png?raw=true)




Please add your service for correct chain folder. When you want create new chain folder please follow [chainlist](https://github.com/cosmostation/chainlist/tree/main/chain) naming


[mandatory]
- name : Service name
- type : Service type
- description : Description of service
- status : Description of service [open, prepare, close]
- thumbnail : To display image. ex) mintscan/{chain}/resource/{thumbnail}.png

[optional]
- links : Your service website
- social.webSite : Official website
- social.twitter : twitter
- social.docs: documentation
- social.medium : medium (blog)
- social.github : github link

Ecosystem
  `mintscan/${chain}/eco_list.json`

  ```json
  // example Neutron
  [
    {
        "name": "Astroport",
        "type": "Dex",
        "description": "Astroport is an AMM(Automated Market Maker)-style decentralized exchange built with CosmWasm smart contracts.",
        "status": "open",
        "thumbnail" : "astroport",
        "link": "https://neutron.astroport.fi/swap",
        "social": {
            "webSite": "https://astroport.fi/en",
            "twitter": "https://twitter.com/astroport_fi",
            "medium": "https://astroport.medium.com/",
            "github": "https://github.com/astroport-fi/",
            "docs": "https://docs.astroport.fi/"
        }
    },
  ]
  ```

‼️ We daily update this information for display [Mintscan](https://www.mintscan.io/)



## 2. How to display popular contract list

Osmosis contract [Example](https://www.mintscan.io/osmosis/wasm/)

![banner](https://github.com/cosmostation/chainlist/blob/main/resource/static/popular_contract_demo.png?raw=true)

[mandatory]
- name : Contract name
- contract_address : Contract address (coswasm or evm style Ok)
- description : Human friendly readable description

[optional]
- link : Promotion link for this contract
- thumbnail : Promotion image. will display well with new UI. ex) mintscan/{chain}/resource/{thumbnail}.png


Ecosystem
  `mintscan/${chain}/major_contract.json`

  ```json
  // example Kava
  [
    {
        "name": "TetherUSDt",
        "contract_address": "0x919C1c267BC06a7039e03fcc2eF738525769109c",
        "description" : "USDT on the Kava Chain issued directly by the Tether Foundation",
        "link" : "",
        "thumbnail": ""
    },
  ]
  ```
