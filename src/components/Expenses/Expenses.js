import React,{useState} from "react";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";

function Expenses(props){

    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear)=>{
        //console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

    /* filtering through the object array and returning objects that 
    matches the criteria we filter with. FilteredExpense contains only an array of 
    objects that mathes the criteria we filter with. Its a new array. */
    const filteredExpense = props.items.filter( (expense)=>{
        return expense.date.getFullYear().toString() === filteredYear;
    } );

    return(
        <div> 
        <Card className="expenses">
            <ExpensesFilter 
            selected={filteredYear} 
            onChangeFilter={filterChangeHandler}/>
            <ExpenseChart expenses= {filteredExpense} />    
            <ExpensesList items={filteredExpense}/>
        </Card>
        </div>
    );
}

export default Expenses;