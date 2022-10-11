import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    // console.log(enteredExpenseData);

    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <div className="new-expense__actions">
          <button onClick={startEditingHandler} type="submit">
            Add Expense
          </button>
        </div>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
