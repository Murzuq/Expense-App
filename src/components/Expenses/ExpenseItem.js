import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        {/* Date Component */}
        <div>July 15th 2025</div>
        <div className="expense-item__description">
          <h2>Housing</h2>
          <p className="expense-item__price">$298.97</p>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
