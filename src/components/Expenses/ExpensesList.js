import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  console.log(props.items);
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      {/* <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem /> */}
    </ul>
  );
};

export default ExpensesList;
