import { users } from '../data/data';
import { Investment } from '../data/model/Investments.model';
import { Portfolio } from '../data/model/Portfolio.model';
import Transaction from '../data/model/Transaction.model';
import { User } from '../data/model/User.model';
import { UserService } from './User.service';

export class TransactionService {
    
    userService: UserService;

    constructor() {
        this.userService = new UserService();
    }
    
    async getUserInvestments(userId: string): Promise<Investment[]> {
        const user: User = await this.userService.getUserByUserId(userId);

        if (!user) {
            throw new Error('User not found');
        }

        const investments: Investment[] = user.portfolios.flatMap((portfolio: Portfolio) =>
            portfolio.transactions.map((transaction: Transaction) => new Investment(
                portfolio._id,
                transaction._id,
                transaction.holding.name,
                transaction.transactionType,
                transaction.transactionPrice,
                transaction.tradeDate,
                transaction.numberOfShares,
                transaction.costPerShare,
            ))
        );

        return investments;
    }

    async addTransactionByUserIdAndPortfolioId(userId: string, portfolioId: string, transactionData: any): Promise<void> {
        const user: User = await this.userService.getUserByUserId(userId);

        if (!user) {
            throw new Error('User not found');
        }

        const portfolio = user.portfolios.find((p) => p._id === portfolioId);

        if (!portfolio) {
            throw new Error('Portfolio not found');
        }

        const newTransaction: Transaction = new Transaction().getNewTransaction(transactionData);

        portfolio.transactions.push(newTransaction);
    }
}

