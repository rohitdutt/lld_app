import { Portfolio } from "./Portfolio.model";

class User {
    _id: string;
    userName: string;
    password: string;
    externalId: string;
    portfolios: Portfolio[];
    isDeleted: boolean;
    lastUpdatedAt: Date;
    createdAt: Date;
  
    constructor(
      _id: string,
      userName: string,
      password: string,
      externalId: string,
      portfolios: Portfolio[],
      isDeleted: boolean,
      lastUpdatedAt: Date,
      createdAt: Date
    ) {
      this._id = _id;
      this.userName = userName;
      this.password = password;
      this.externalId = externalId;
      this.portfolios = portfolios;
      this.isDeleted = isDeleted;
      this.lastUpdatedAt = lastUpdatedAt;
      this.createdAt = createdAt;
    }
  }
  
  export { User };  