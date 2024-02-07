import { users } from "../data/data";
import { Portfolio } from "../data/model/Portfolio.model";
import { User } from "../data/model/User.model";
import { UserService } from "./User.service";


export class PortfolioService {

    userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async getPortfoliosByUserId(userId: string): Promise<Portfolio[]> {
        const user: User = await this.userService.getUserByUserId(userId);

        if (!user) {
            throw new Error('User not found');
        } else if (!user.portfolios) {
            throw new Error('Portfolio not found');
        }

        return user.portfolios;
    }

    async getPortfolioByUserIdAndPortfolioId(userId: string, portfolioId: string): Promise<Portfolio> {
        const user: User = await this.userService.getUserByUserId(userId);

        if (!user) {
            throw new Error('User not found');
        } if (!user.portfolios) {
            throw new Error('Portfolios not found');
        }

        const portfolio: Portfolio | undefined = users.find(
            (u: User) => u._id === userId
        )?.portfolios.find(
            (p: Portfolio) => p._id = portfolioId
        );

        if (!portfolio) {
            throw new Error()
        }

        return portfolio;
    }
}

