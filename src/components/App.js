import React,{useState} from 'react'
import '../styles/App.css';

const App = () => {
  const[expense,setExpense]=useState(0);
  const handle =()=>{
    const a =document.createElement("li");
    const b= document.getElementById("expense-input");
    a.innerHTML==b.value;
    document.getElementById("expense-list").appendChild(a);
    const c=b.indexOf("-");
    const d =c.split(c);
    setExpense(parseInt(d)+expense);
  }

  return (
    <div id="main">
      <input id="expense-input" />
      <button id="expense-button" onClick={handle}>Add Expense</button>
      <div id="expense-list">
      </div>
      <div id="total-expense">
        Total Expense: {expense};
      </div>
    </div>
  )
}


export default App;
