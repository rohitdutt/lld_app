import { Timestamp } from "mongodb";
import Transaction from "./Transaction.model";

class Portfolio {
    _id: string;
    name: string;
    transactions: Transaction[];
    isDeleted: boolean;
    lastUpdatedAt: Date;
    createdAt: Date;
  
    constructor(
      _id: string,
      name: string,
      transactions: Transaction[],
      isDeleted: boolean,
      lastUpdatedAt: Date,
      createdAt: Date
    ) {
      this._id = _id;
      this.name = name;
      this.transactions = transactions;
      this.isDeleted = isDeleted;
      this.lastUpdatedAt = lastUpdatedAt;
      this.createdAt = createdAt;
    }
  }
  
  export { Portfolio };