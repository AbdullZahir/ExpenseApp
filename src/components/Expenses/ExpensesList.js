import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  let expensesContent = <p> No expenses found.</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses</h2>;
  }

  return (
    <div className="expense-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default ExpensesList;
