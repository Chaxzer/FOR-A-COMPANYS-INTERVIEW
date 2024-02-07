import React from 'react';
import { useSelector } from 'react-redux';
import Balance from './Balance';
import Transactions from './Transactions';
import AddTransaction from './AddTransaction';
import CategoriesChart from './CategoriesChart';

function Dashboard() {
  const transactions = useSelector(state => state.transactions.transactions);

  return (
    <div>
      <Balance transactions={transactions} />
      <Transactions transactions={transactions} />
      <AddTransaction />
      <CategoriesChart transactions={transactions} />
    </div>
  );
}
