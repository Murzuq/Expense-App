import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Housing',
    amount: 76.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'Clothing', amount: 99.49, date: new Date(2021, 11, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Laptop',
    amount: 1265.98,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Iphone',
    amount: 450,
    date: new Date(2019, 5, 12),
  },
];

const App = (props) => {
  // console.log(DUMMY_EXPENSES);
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    // console.log(expense);
  };
  console.log(expenses);

  return (
    <div>
      <h1>Expense App</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
