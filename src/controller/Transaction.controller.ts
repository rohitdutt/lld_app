import { Request, Response } from 'express';
import { TransactionService } from '../service/Transaction.service';

export class TransactionController {

    transactionService: TransactionService;

    constructor() {
        this.transactionService = new TransactionService();
    }

    async getTransactionsByUserId(req: Request, res: Response): Promise<Response> {
        try {
            const userId: string = req.params.userId;
            const transactions = await this.transactionService.getUserInvestments(userId);
            return res.status(200).json({ transactions });
        } catch (error) {
            console.error('Error fetching transactions:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async createTransaction(req: Request, res: Response) {
        try {
            const { userId, portfolioId } = req.params;
            const transactionData = req.body;
            await this.transactionService.addTransactionByUserIdAndPortfolioId(userId, portfolioId, transactionData);
            return res.status(200).json({ message: 'Transaction added successfully' });
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
}
