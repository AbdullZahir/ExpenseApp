 import React from 'react'; 
 import './ExpenseItem.css'
 import ExpenseDate from './ExpenseDate';
 import Card from '../UI/Card';
 
 //This is a dumb component, it just outputs the data, no logic
 function ExpenseItem(props){

    return(
        <div>
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">    
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </Card>
        </div>
    ); 
 }

 export default ExpenseItem;