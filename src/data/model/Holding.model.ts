import { HOLDING_TYPE } from "../constants";

class Holding {
    _id: string;
    name: string;
    listedAt: string;
    lastPrice: number;
    holdingType: HOLDING_TYPE;
    isDeleted: boolean;
    lastUpdatedAt: Date;
    createdAt: Date;
  
    constructor(
      _id: string,
      name: string,
      listedAt: string,
      lastPrice: number,
      holdingType: HOLDING_TYPE,
      isDeleted: boolean,
      lastUpdatedAt: Date,
      createdAt: Date
    ) {
      this._id = _id;
      this.name = name;
      this.listedAt = listedAt;
      this.lastPrice = lastPrice;
      this.holdingType = holdingType;
      this.isDeleted = isDeleted;
      this.lastUpdatedAt = lastUpdatedAt;
      this.createdAt = createdAt;
    }
  }
  
  export { Holding };