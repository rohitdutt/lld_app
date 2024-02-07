import { users } from "../data/data";
import { User } from "../data/model/User.model";

export class UserService {

    async getUserByUserId(userId: string): Promise<User> {
        const user: User | undefined = users.find((u: User) => u._id === userId);

        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
}