import { HOLDING_TYPE, TRANSACTION_TYPE } from "./constants";
import { User } from "./model/User.model";

export const users: User[] = [
    {
        _id: "613dbff88b643c15a025ba5a",
        userName: "john_doe",
        password: "password123",
        externalId: "123456789",
        portfolios: [
            {
                _id: 'portfolio1_id',
                name: 'Portfolio 1',
                transactions: [
                   
                ],
                isDeleted: false,
                lastUpdatedAt: new Date("2023-11-13T08:30:00Z"),
                createdAt: new Date("2023-11-13T08:30:00Z")
            }
        ],
        isDeleted: false,
        lastUpdatedAt: new Date("2023-11-13T08:30:00Z"),
        createdAt: new Date("2021-09-13T12:45:00Z")
    },
    {
        _id: "613dbff88b643c15a025ba5b",
        userName: "jane_smith",
        password: "securepass",
        externalId: "987654321",
        portfolios: [
            {
                _id: 'portfolio2_id',
                name: 'Portfolio 2',
                transactions: [
                   
                ],
                isDeleted: false,
                lastUpdatedAt: new Date("2023-11-14T11:20:00Z"),
                createdAt: new Date("2023-11-14T11:20:00Z")
            }
        ],
        isDeleted: false,
        lastUpdatedAt: new Date("2023-11-14T11:20:00Z"),
        createdAt: new Date("2022-04-25T15:10:00Z")
    },
    {
        _id: "613dbff88b643c15a025ba5c",
        userName: "user123",
        password: "test123",
        externalId: "567890123",
        portfolios: [
            {
                _id: 'portfolio3_id',
                name: 'Portfolio 3',
                transactions: [
            
                ],
                isDeleted: false,
                lastUpdatedAt: new Date("2023-11-15T14:05:00Z"),
                createdAt: new Date("2023-11-15T14:05:00Z")
            }
        ],
        isDeleted: false,
        lastUpdatedAt: new Date("2023-11-15T14:05:00Z"),
        createdAt: new Date("2023-02-18T09:55:00Z")
    }
]
