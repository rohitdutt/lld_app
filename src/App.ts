import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { TransactionController } from './controller/Transaction.controller';

const app: Application = express();
const PORT: any = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

const transactionController: TransactionController = new TransactionController();

app.post('/getTransactionsByUserId', async (req: Request, res: Response) => {
    await transactionController.getTransactionsByUserId(req, res);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});