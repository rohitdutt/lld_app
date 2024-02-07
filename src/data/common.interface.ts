import { TRANSACTION_TYPE } from "./constants";
import { Holding } from "./model/Holding.model";

export interface TransactionData{
    transactionType: TRANSACTION_TYPE,
    holding: Holding,
    transactionPrice: number,
    tradeDate: Date,
    numberOfShares: number,
    costPerShare: number,
}