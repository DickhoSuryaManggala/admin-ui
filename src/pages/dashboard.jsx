import React from 'react';
import MainLayout from '../components/Layouts/MainLayout';
import Card from '../components/Elements/Card';
import CardBalance from '../components/Fragments/CardBalance';
import CardGoals from '../components/Fragments/CardGoals';
import CardUpcomingBill from '../components/Fragments/CardUpcomingBill';
import CardRecentTransactions from '../components/Fragments/CardRecentTransactions';
import CardStatistics from '../components/Fragments/CardStatistics';
import CardExpensesBreakdown from '../components/Fragments/CardExpensesBreakdown';
import { transactions, bills, expensesBreakdowns, balances, goals, expensesStatistics, } from '../data';

function DashboardPage() {
    console.log(transactions);

    return (
        <MainLayout>
          <div className="grid sm:grid-cols-12 sm:grid-rows-3 gap-6 h-full">
            <div className="sm:col-span-4">
              <CardBalance data={balances}/>
            </div>

            <div className="sm:col-span-4">
              <CardGoals data={goals}/>
            </div>

            <div className="sm:col-span-4">
              <CardUpcomingBill data={bills} />
            </div>

            <div className="sm:col-span-4 sm:row-span-2">
              <CardRecentTransactions data={transactions} />
            </div>

            <div className="sm:col-span-8">
                <CardStatistics data={expensesStatistics} />
            </div>
            <div className="sm:col-span-8">
              <CardExpensesBreakdown data={expensesBreakdowns} />
            </div>

            <div className="sm:col-span-8">
              <Card
                title="Expenses Breakdown"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
              />
            </div>
          </div>
        </MainLayout>
    );
}

export default DashboardPage;