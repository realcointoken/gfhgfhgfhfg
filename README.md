# Purse Token
1. npm install
2. npm start

Project is using BSC Mainnet and can be viewed here: https://pursetoken.com

This project consists of LP Restaking Farm and Purse Staking, details on Purse Staking can be found on the PurseStaking Repository

## LP Restaking Farm
Users can get [PURSE-BUSD](https://pancakeswap.finance/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C) LP token from PancakeSwap and the PURSE-BUSD LP token can be deposited to LP Restaking Farm to earn PURSE.

Whenever users deposit or withdraw LP token, or harvest Purse Reward, the Accumulated Purse Per Share and Last Reward Block will be updated, and the Purse Reward will be minted. 

- Purse Reward = (Current Block - Last Reward Block) x Purse Per Block x Bonus Multiplier
- Accumulated Purse Per Share += Purse Reward x 1e12 / LP Supply
- Last Reward Block = Current Block

- If Total Minted Token + Purse Reward >= Max Token To Be Minted, (Max Token To Be Minted - Total Minted Token) will be minted to the LP Restaking Farm contract. Else, the Purse Reward amount will be minted to the LP Restaking Farm contract.

If user's LP Token Balance > 0, the updated Accumulated Purse Per Share will be used to calculate his pending Purse Reward. The pending Purse Reward will then be transferred to him if there is any.

- Pending Reward = User’s LP Token x Accumulated Purse Per Share / 1e12 - User’s Reward Debt

The user's LP token and Reward Debt will also be updated for subsequent pending Purse Reward calculation.
- User's LP Token += Deposit Amount (Deposit) or User's LP Token -= Withdraw Amount (Withdraw)
- User's Reward Debt = User's LP Token x Accumulated Purse Per Share / 1e12
