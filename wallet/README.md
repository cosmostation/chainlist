
## Ecosystem list

### Productions using with
- [Extension Wallet](https://bit.ly/3VhVJIF)
- [Android Wallet](https://bit.ly/2BWex9D)
- [iOS Wallet](https://apple.co/2IAM3Xm)

### How to add dApp
1. Fork this repo to your own github account

2. Clone fork and create new branch

3. Add new dApp image file to wallet/resource directory in cosmostation/chainlist

4. Add new dApp to wallet/eco_list.json in the following format:
    - `id` (number)
      - unique identifier
    - `name` (string)
      - dApp name
    - `description` (string) 
      - dApp description
    - `thumbnail` (string)
      - the dApp image URL you added earlier to the resource folder
        - ex. `https://raw.githubusercontent.com/cosmostation/chainlist/master/wallet/resource/new_dApp.png`
    - `link` (string)
      - dApp link url
    - `chains` (string array)
      - list of chains supported by the dApp
    - `socials` (object)
      - social media URLs related to the dApp
      - If none, just use `{}`
    - `type` (string)
      - dApp type
        - ex. DEX, DeFi, Bridge ...

    <details>
     <summary><h2 style='display: inline; font-size: 16px'>example</h2></summary>

      ```
        [
            {
                "id": 1,
                "name": "Eigenlayer",
                "description": "EigenLayer lets Ethereum users restake assets to support other protocols and earn extra rewards.",
                "thumbnail" : "https://raw.githubusercontent.com/cosmostation/chainlist/master/wallet/resource/eigenlayer.png",
                "link": "https://app.eigenlayer.xyz",
                "chains": [
                    "ethereum"
                ],
                "socials": {
                    "github": "https://github.com/eigenfoundation",
                    "telegram": "https://t.me/EigenLayerOfficial",
                    "twitter": "https://x.com/eigenlayer",
                    "discord": "https://discord.com/invite/eigenlayer"
                },
                "type": "Liquid staking"
            },
            {
                "id": 18,
                "name": "Cacao Swap",
                "description": "Cacao Swap is a supercharged user interface for cross-chain swaps, synthetics and yield opportunities. Powered by Thorchain, Maya Protocol and ChainFlip, it offers a user-first experience for all interactions.",
                "thumbnail" : "https://raw.githubusercontent.com/cosmostation/chainlist/master/wallet/resource/cacao.png",
                "link": "https://cacaoswap.app/",
                "chains": [
                    "ethereum",
                    "avalanche"
                ],
                "socials": {},
                "type": "DEX"
            }
        ] 
      ```

    </details>

</br>

5. Commit and push to your fork

6. From your repository, make pull request (PR)

