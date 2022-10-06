import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  console.log(props.date);
  return (
    <li>
      <Card className="expense-item">
        {/* Date Component */}
        <div>{props.date.getFullYear()}</div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <p className="expense-item__price">${props.amount}</p>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
