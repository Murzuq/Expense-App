import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  return (
    <ul className="expenses-list">
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
    </ul>
  );
};

export default ExpensesList;
