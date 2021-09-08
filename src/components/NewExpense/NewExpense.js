import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";


function NewExpense(props){
    //const [id, setId]=useState(0); 
    //const idIncrement = ()=>(setId(id+1));
    //console.log({id});
    const saveExpenseDataHandler = (enteredExpenseData)=>{
    
        const expenseData = {
            ...enteredExpenseData, 
            id: Math.random().toString()
            //id: {id}
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const [isEditing, setIsEditing] = useState(false);
    const startEditingHandler = ()=>{
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

//passing the saveExpenseDataHandler as a pointer and execute it in a child component
// which will in return pass user input data to the parent component
    return(
        <div className='new-expense'>
            {!isEditing?   
            <button onClick={startEditingHandler}>Add New Expense</button>:
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} 
            onCancel={stopEditingHandler}/>}
             
        </div>

    );
}
export default NewExpense;