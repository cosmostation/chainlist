## Gas Data for Mintscan Wallet.

#### [optional properties]

- default _(If no specific type of value exists, use the default)_
- send
- ibcSend
- swap
- transfer
- ibcTransfer
- reward
- squidContractSwap

---

#### Default Value

- If the chain does not have a specific type of value or default value, use the values below

```json
{
  "default": "100000",
  "send": "100000",
  "swap": "250000",
  "ibcSend": "150000",
  "transfer": "200000",
  "ibcTransfer": "250000",
  "reward": "300000",
  "squidContractSwap": "350000"
}
```
