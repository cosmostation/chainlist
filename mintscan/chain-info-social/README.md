## How to add Chain's Information to Mintscan Explorer.

The chain's name, description, and links such as website, docs, and github can be exposed to mintscan by entering the following properties.

[mandatory]

- displayName : Name of Chain
- description : Description of Chain
- links.webSite : Chain's official website

[optional]

- links.docs: Chain's documentation
- links.github : github organization
- links.medium : Chain's medium (blog)
- links.twitter : Chain's X(twitter) link
- links.discord : Chain's discord link
- links.forum.main : Chain's forum link
- links.forum.governance : forum governance link

```json
// example mintscan/chain-info-social/{chain}.json
{
  "displayName": "Cosmos",
  "description": "The Cosmos Hub is an Internet of Blockchains, a network of blockchains able to communicate with each other in a decentralized way.",
  "links": {
    "webSite": "https://cosmos.network",
    "docs": "https://docs.cosmos.network",
    "github": "https://github.com/cosmos",
    "medium": "https://blog.cosmos.network",
    "twitter": "https://twitter.com/cosmos",
    "forum": {
      "main": "https://forum.cosmos.network",
      "governance": "https://forum.cosmos.network/c/hub-proposals"
    }
  }
}
```
