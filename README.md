## Low Level Design ##

![FinancialPortfolioTracker](https://github.com/rohitdutt/lld_app/assets/36808301/54baf078-58d7-4387-9f5f-c33f58adb039)

- This is database design, Some Models are there in code but not in the db structure as they are not required to be stored in db.
- External platform IDs are currently stored 1 per user and can be adjusted according to requirements like how and how many external platforms we are going to add.
- For fetching updated investment value, It depends on how frequently we want data. Let's say if we want data only every day we can write a **cron job** that will execute at a certain time in a day and if we want real-time data we can use **polling** for the same.
- In the case of Analytics we can create another service that will generate certain reports and analytics frequently(maybe once a day) for user.


----

## DSA Question ##


```
class Solution {
public:
    int maxProfit(int k, vector<int>& prices) {
        int n = prices.size();
        int profit[k + 1][n + 1];
        for (int i = 0; i <= k; i++) {
            profit[i][0] = 0;
        }
        for (int i = 0; i <= n; i++) {
            profit[0][i] = 0;
        }
        for (int i = 1; i <= k; i++) {
            for (int j = 1; j < n; j++) {
                int currMax = INT_MIN;
                for (int day = 0; day < j; day++) {
                    currMax = max(currMax, prices[j] - prices[day] + profit[i - 1][day]);
                }
                profit[i][j] = max(profit[i][j - 1], currMax);
            }
        }
        return profit[k][n - 1];
    }
};

