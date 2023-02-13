import express from "express";
import { APP_PORT } from "./config.js";
import { getHistoryBalance, getTransactions } from "./utils.js";

const app = express();

app.get('/timebalance', (req, res) => {
  getHistoryBalance(req.query.time, res)
  console.log('Got a GET request for timebalance')
});

app.get('/tansactions', (req, res) =>{
  getTransactions(req.query.address, req.query.endBlock, res)
  console.log('Got a GET request for transactions')
});

app.use('/', express.static('public'));

app.listen(APP_PORT, () => {
  console.log(`Listening at http://localhost:${APP_PORT}`)
});