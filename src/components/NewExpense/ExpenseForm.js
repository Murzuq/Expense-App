import './ExpenseForm.css';

const ExpenseForm = (props) => {
  return (
    <form>
      <div>
        <div>
          <label>Title</label>
          <input type="text" />
        </div>
        <div>
          <label>Amount</label>
          <input type="number" min="0.01" max="0.01" />
        </div>
        <div>
          <label>Title</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
