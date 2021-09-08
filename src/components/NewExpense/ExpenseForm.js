import React,{useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm(props){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');

    const titleChangeHandler = (event)=> {
       setEnteredTitle(event.target.value);
   }
   const dateChangeHandler = (event)=> {
       setEnteredDate(event.target.value);
    }
    const amountChangeHandler = (event)=> {
       setEnteredAmount(event.target.value);
    }
   
   /*   //alternative 2
        const [userInput, setUserInput] = useState({
        enteredeTitle: '',
        enteredeAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event)=>{
        //setUserInput({
       //     ...userInput, //need to update other properties as well
       //     enteredeTitle: event.target.value //updating selected value
       // });

       //this is the correct way
       setUserInput( (prevState)=>{
           return {...prevState,  //using {} due to object
            enteredeTitle: event.target.value} //updating one value and not whole object
       } )
    };

    const amountChangeHandler = (event)=>{
        setUserInput({
            ...userInput,
            enteredeAmount: event.target.value
        });

    };

    const dateChangeHandler = (event)=>{
        setUserInput({
            ...userInput,
            enteredeDate: event.target.value
        });

    }; */

    const submitHandler = (event)=>{
        event.preventDefault(); //ikke send til server som er default...
        const expenseData= {
            title : enteredTitle,
            amount: +enteredAmount,
            date : new Date (enteredDate)
        };
        props.onSaveExpenseData(expenseData); //executing a parent component function
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');        
    };
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                <label>Title</label>
                <input 
                type="text" 
                value={enteredTitle} 
                onChange={titleChangeHandler}/>
                </div>

                <div className="new-expense__control">
                <label>Amount</label>
                <input 
                type="number" 
                value={enteredAmount}
                onChange={amountChangeHandler} min="1" step="0.1"/>
                </div>

                <div className="new-expense__control">
                <label>Date</label>
                <input 
                type="date"
                value={enteredDate} 
                onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31"/>
                </div>
            </div>

            <div className="new-expense__actions">
                <button type ="button" onClick={props.onCancel} >Cancel</button>
                <button type="submit">Add Expense</button>
            </div>

        </form>
    );
}
export default ExpenseForm;