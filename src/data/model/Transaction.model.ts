import { HOLDING_TYPE, TRANSACTION_TYPE } from "../constants";
import { Holding } from "./Holding.model";
import { TransactionData } from "../common.interface";

class Transaction {
    _id: string;
    transactionType: TRANSACTION_TYPE;
    holding: Holding;
    transactionPrice: number;
    tradeDate: Date;
    numberOfShares: number;
    costPerShare: number;
    isDeleted: boolean;
    lastUpdatedAt: Date;
    createdAt: Date;

    constructor(
        _id: string = '',
        transactionType: TRANSACTION_TYPE = TRANSACTION_TYPE.BUY,
        holding: Holding = {
            _id: "",
            name: "",
            listedAt: "",
            lastPrice: 0,
            holdingType: HOLDING_TYPE.STOCK,
            isDeleted: false,
            lastUpdatedAt: new Date(),
            createdAt: new Date()
        },
        transactionPrice: number = 0,
        tradeDate: Date = new Date(),
        numberOfShares: number = 0,
        costPerShare: number = 0,
        isDeleted: boolean =  false,
        lastUpdatedAt: Date = new Date(),
        createdAt: Date = new Date()
    ) {
        this._id = _id;
        this.transactionType = transactionType;
        this.holding = holding;
        this.transactionPrice = transactionPrice;
        this.tradeDate = tradeDate;
        this.numberOfShares = numberOfShares;
        this.costPerShare = costPerShare;
        this.isDeleted = isDeleted;
        this.lastUpdatedAt = lastUpdatedAt;
        this.createdAt = createdAt;
    }

    getNewTransaction(transactionData: TransactionData): Transaction {
        return new Transaction(
            '',
            transactionData.transactionType,
            transactionData.holding,
            transactionData.transactionPrice,
            transactionData.tradeDate,
            transactionData.numberOfShares,
            transactionData.costPerShare,
            false,
            new Date(),
            new Date()
        );
    }
}

export default Transaction;