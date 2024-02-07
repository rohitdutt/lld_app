import { TRANSACTION_TYPE } from "../constants";

class Investment {
    portfolioId: string;
    transactionId: string;
    holdingName: string;
    transactionType: TRANSACTION_TYPE;
    transactionPrice: number;
    tradeDate: Date;
    numberOfShares: number;
    costPerShare: number;

    constructor(
        portfolioId: string,
        transactionId: string,
        holdingName: string,
        transactionType: TRANSACTION_TYPE,
        transactionPrice: number,
        tradeDate: Date,
        numberOfShares: number,
        costPerShare: number
    ) {
        this.portfolioId = portfolioId;
        this.transactionId = transactionId;
        this.holdingName = holdingName;
        this.transactionType = transactionType;
        this.transactionPrice = transactionPrice;
        this.tradeDate = tradeDate;
        this.numberOfShares = numberOfShares;
        this.costPerShare = costPerShare;
    }
}

export { Investment };
