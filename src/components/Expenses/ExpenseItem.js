import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  //   console.log(props.date);
  return (
    <li>
      <Card className="expense-item">
        {/* Date Component */}
        <ExpenseDate date={props.date} />
        <div></div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <p className="expense-item__price">${props.amount}</p>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
