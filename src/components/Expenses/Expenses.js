import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  //   console.log(props.items);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter />
        <ExpensesList items={props.items} />
      </Card>
    </div>
  );
};
export default Expenses;
