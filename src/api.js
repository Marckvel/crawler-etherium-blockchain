import fetch from "node-fetch";
import { API_KEY } from "./config.js";

const getBlockNumber = async (time) =>
  await fetch(`https://api.etherscan.io/api?module=block&action=getblocknobytime&timestamp=${time}&closest=before&apikey=${API_KEY}`)
    .then(res => res.json())
    .then(json => json);

const getToken = async (block) =>
  await fetch(`https://api.etherscan.io/api?module=stats&action=tokensupplyhistory&contractaddress=contractaddress&blockno=${block}&apikey=${API_KEY}`)
    .then(res => res.json())
    .then(json => json);

const getBalance = async (block) =>
  await fetch(`https://api.etherscan.io/api?module=account&action=balancehistory&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&blockno=${block}&apikey=${API_KEY}`)
    .then(res => res.json())
    .then(json => json);

const getAddressBalance = async (address) =>
  await fetch(`https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${API_KEY}`)
    .then(res => res.json())
    .then(json => json);

const getAddressTransactions = async (address, endBlock) =>
  await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=${endBlock}&page=1&offset=100&sort=asc&apikey=${API_KEY}`)
    .then(res => res.json())
    .then(json => json);

export {
  getBlockNumber,
  getToken,
  getBalance,
  getAddressBalance,
  getAddressTransactions,
}