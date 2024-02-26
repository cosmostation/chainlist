## Gas Data for Mintscan Wallet.

- This gas data is used within Mintscan to infer the gas before simulation and calculate the amount. Gas data does not affect actual gas.

#### [optional properties]

- default _(If no specific type of value exists, use the default)_
- send
- ibcSend
- reward (For claim, claim all, compound)

---

#### Default Value

- If the chain does not have a specific type of value or default value, use the values below

```json
{
  "default": "100000",
  "send": "100000",
  "ibcSend": "150000",
  "reward": "300000"
}
```
