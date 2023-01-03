
import React, { useState } from 'react';
import './App.js';


function App() {
  const [fullName, setFullName] = useState({

    fname : '',
    lname : '',
  });


  const inputEvent = (e) => {
    // console.log(e.target.value);       // e is used to get the object and target.value get the specific value which user put in input field
    // console.log(e.target.name);

    const value = e.target.value;
    const name = e.target.name;

    setFullName((preValue) =>{
      // console.log(preValue);    // preValue check tha previous value of state
      if(name === 'fname'){
        return{
          fname : value,
          lname : preValue.lname,
        }
      } else if(name === 'lname'){
       return {
        fname : preValue.fname,
        lname : value,
       }
      }
    })

  }
  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div className="main">
        <form onSubmit={onSubmit}>
          <h1>Hello {fullName.fname} {fullName.lname}</h1>

          <input type="text" 
          placeholder='Enter your Name' 
          name='fname'
          onChange={inputEvent} 
          value={fullName.fname}/>

          <br /><br />

          <input type="Text" 
          placeholder='Enter your password' 
          name='lname'
          onChange={inputEvent} 
          value={fullName.lname} />


          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
