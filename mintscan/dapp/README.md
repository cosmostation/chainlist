## How to add dApp's Information to Mintscan Explorer.

You can add dApp information in the mintscan/dapp/{chain}/constants.json, and upload image file in mintscan/dapp/{chain}/image/{id}.png to display Mintscan's ecosystem page.

[mandatory]

- id : Please enter a unique name for dapp in kebab-case format.
- name : Please enter a unique name for dapp.
- dappType : Please select one of the following dapp types. (DAO, Defi, Defi&NFT, NFT, Social, Gamble, Others, Dashboard, Data, Defi&Social, Bridge, Vaults, Lending, System, Dex, Liquid Staking)
- description : a description of dapp.
- link : dapp's link
- image (file) : Please upload a 1125x600px png file to the path "mintscan/dapp/{chain}/image/{id}.png". {id} corresponds to the top id, and it is a unique name for the dapp in kebab-case format.

[optional]

- social.webSite : dapp's official website
- social.twitter : dapp's twitter
- social.medium : dapp's medium (blog)
- social.github : dapp's github
- social.docs : dapp's documentation
- comingSoon : Please enter true if it is a dapp that has not yet been released, otherwise enter false. On the screen, the dapp is displayed as coming soon.

```json
// example mintscan/dapp/{chain}/constants.json
[
  {
    "id": "astroport",
    "name": "astroport",
    "dappType": "Dex",
    "description": "Astroport is an AMM(Automated Market Maker)-style decentralized exchange built with CosmWasm smart contracts.",
    "link": "https://neutron.astroport.fi/swap",
    "social": {
      "webSite": "https://astroport.fi/en",
      "twitter": "https://twitter.com/astroport_fi",
      "medium": "https://astroport.medium.com/",
      "github": "https://github.com/astroport-fi/",
      "docs": "https://docs.astroport.fi/"
    },
    "comingSoon": false
  }
]
```
