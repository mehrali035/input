
import React, { useState } from 'react';
import './App.js';


function App() {
  const [fullName, setFullName] = useState({

    fname: '',
    lname: '',
    email: '',
    phone: '',
  });


  const inputEvent = (e) => {
    console.log(e.target.value);  // e is used to get the object and target.value get the specific value which user put in input field
    console.log(e.target.name);

    // const value = e.target.value;
    // const name = e.target.name;

    const { value, name } = e.target;

    setFullName((preValue) => {
      console.log(preValue);    // preValue check tha previous value of state
      if (name === 'fname') {
        return {
          fname: value,
          lname: preValue.lname,
          email: preValue.email,
          phone: preValue.phone,
        }
      } else if (name === 'lname') {
        return {
          lname: value,
          fname: preValue.fname,
          email: preValue.email,
          phone: preValue.phone,
        }
      } else if (name === 'email') {
        return {
          email: value,
          fname: preValue.fname,
          lname: preValue.lname,
          email: preValue.email,
        }
      }
      else if (name === 'phone') {
        return {
          phone: value,
          fname: preValue.fname,
          lname: preValue.lname,
          phone: preValue.phone,
        }
      }

    })

  }
  const onSubmit = (e) => {
    e.preventDefault();
    alert('form submit');
  }

  return (
    <>
      <div className="main">
        <form onSubmit={onSubmit}>
          <h1>Hello {fullName.fname} {fullName.lname}</h1>
          <p> {fullName.email}</p>
          <p> {fullName.phone}</p>

          <input type="text"
            placeholder='Enter your Name'
            name='fname'
            onChange={inputEvent}
            value={fullName.fname} />

          <br /><br />

          <input type="Text"
            placeholder='Enter your password'
            name='lname'
            onChange={inputEvent}
            value={fullName.lname} />

          <br /> <br />

          <input type="email"
            placeholder='Enter your email'
            name='email'
            onChange={inputEvent}
            value={fullName.email} />


          <br /><br />

          <input type="number"
            placeholder='Enter your phone'
            name='phone'
            onChange={inputEvent}
            value={fullName.phone} />
            <br /><br />

          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
