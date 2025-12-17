# Add Gonka Chain Support

## Summary
This PR adds support for the Gonka blockchain network to the Cosmostation chainlist, enabling wallet integration and chain information display for Gonka mainnet.

## Chain Information
- **Chain Name**: Gonka
- **Chain ID**: `gonka-mainnet`
- **Network Type**: Mainnet
- **Chain Type**: Cosmos SDK
- **Bech32 Prefix**: `gonka` (account), `gonkavaloper` (validator)
- **Native Token**: GNK (denom: `ngonka`, decimals: 9)
- **Genesis Time**: 2025-08-22T08:42:00.713839000Z

## Files Added

### Configuration Files
- `chain/gonka/assets_2.json` - Native coin asset information
- `chain/gonka/param_2.json` - Chain parameters and endpoints configuration

### Assets
- `chain/gonka/asset/gonka.png` - Native token logo (257x256 PNG)
- `chain/gonka/resource/gonka.png` - Chain logo (257x256 PNG)

## Key Features

### Wallet Support
- ✅ Mobile wallet support enabled
- ✅ Extension wallet support enabled
- ✅ CW20 token support enabled
- ⚠️ Mintscan support disabled (not available)

### Endpoints
- **gRPC Endpoints**: 4 providers (6block x2, PS on Nebius x2)
- **LCD/REST Endpoints**: 4 providers (6block x2, PS on Nebius x2)

### Fee Configuration
- Fee model: Fixed fee (no fee market)
- Base fee: 0
- Rate: 0.0ngonka
- Gas simulation: Enabled (multiplier: 1.8)

### Account Configuration
- HD Path: `m/44'/1200'/0'/0/X`
- Pubkey Style: secp256k1
- Pubkey Type: `/cosmos.crypto.secp256k1.PubKey`

## Asset Details
- **Type**: Native
- **Symbol**: GNK
- **Name**: Gonka
- **Decimals**: 9
- **Color**: #242424
- **Description**: Coins for the Gonka network.

## Explorer
- **Name**: ping.pub
- **Base URL**: https://gonka04.6block.com:8443/dashboard
- **Account**: https://gonka04.6block.com:8443/dashboard/gonka/account/${address}
- **Transaction**: https://gonka04.6block.com:8443/dashboard/gonka/txs/${hash}

## Links
- **Website**: https://gonka.ai/
- **Documentation**: https://gonka.ai/whitepaper.pdf
- **GitHub**: https://github.com/gonka-ai/gonka
- **Blog**: https://what-is-gonka.hashnode.dev/
- **Twitter**: https://x.com/gonka_ai

## Description
Gonka is a decentralized AI infrastructure designed to optimize computational power for AI model training and inference, offering an alternative to monopolistic, high-cost, centralized cloud providers.

## Compliance
✅ All required fields from README.md are implemented
✅ JSON files validated and properly formatted
✅ Images are PNG format as required
✅ Directory structure follows repository conventions
✅ Endpoints configured with multiple providers
✅ Chain is mainnet (not testnet)

## Testing
- [x] JSON syntax validated
- [x] Image files verified (PNG format)
- [x] All required fields present
- [x] URLs follow correct format
- [x] No linting errors

## Related
- Chain Registry: https://github.com/cosmos/chain-registry/tree/master/gonka
- Chain Repository: https://github.com/gonka-ai/gonka

