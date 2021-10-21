import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "test5",
    amount: 4,
    date: new Date(2021, 6, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  //sending a pointer to my child that read the data from user input
  const addExpenseHandler = (expense) => {
    /* correct way of updating the previous values */
    setExpenses((prevExpenses) => {
      //expenses er det som kommer inn, setExpenses forventer expenses
      return [expense, ...prevExpenses];
    });
  };

  console.log(DUMMY_DATA);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
export default App;
