import moment from "moment";
import {getAddressBalance, getAddressTransactions, getBalance, getBlockNumber, getToken} from "./api.js";

const getHistoryBalance = async (time, res) => {
  let unixTimestamp = moment.utc(time, 'YYYY.MM.DD').unix();
  const blockTime = await getBlockNumber(unixTimestamp);

  //----------------------------------------BLOCKBYTIME
  let blTime = blockTime.result;
  console.log("Block active at given time is " + blTime);

  const tokenTime = await getToken(blTime);
  const balanceTime = await getBalance(blTime);

  return await res.json({ blockTime: blockTime, tokenTime: tokenTime, balanceTime: balanceTime });
}

const getTransactions = async (address, endBlock, res) => {
  const balance = await getAddressBalance(address);
  const transactions = await getAddressTransactions(address, endBlock);

  return await res.json({ balance: balance, transactions: transactions });
}

export {
  getHistoryBalance,
  getTransactions,
}