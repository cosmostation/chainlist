## Dapp Information By Cosmostation

<details open>
  <summary><h2 style='display: inline; font-size: 24px'>How to add dApp Link for mobile wallet</h2></summary>

  - Add your dApp information with [this](https://github.com/cosmostation/chainlist/blob/main/dapp/dapps.json) file

```json
   {
      "title":"Osmosis",
      "description":"Swap, provide, and earn on the leading decentralized AMM.",
      "logo":"https://raw.githubusercontent.com/cosmostation/chainlist/master/dapp/image/osmosis.png",
      "url":"https://app.osmosis.zone",
      "chain":[
         "osmosis"
      ],
      "category":"Defi",
      "tag":[
         "Dex"
      ]
   }
```

    - `title`
      - dApp's title
    - `description`
      - A brief summary of the dApp
    - `logo`
      - Image route of the dApp
      - Add image in `image` folder
        - Make sure to upload a `png` file
    - `url`
      - dApp link
    - chain
      - The chain you want to showcase your dApp on
    - `tag`
      - dApp tag
    - `category`
      - dApp category
    </details>
