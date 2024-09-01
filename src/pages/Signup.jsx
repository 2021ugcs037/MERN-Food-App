import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Signup = () => {
  const [credentials, setCredentials] = useState({name: "",email: "",password: ""});
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: credentials.name,
        
        //DateofJoining : credentials.DateofJoining.toString(),
        email: credentials.email,
        password: credentials.password
       })
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    }
    
  };

  // const handleDateChange = (date) => {
  //   setCredentials({
  //     ... credentials,
  //     DateofJoining : date
  //   });
  // }

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };
  const merasubmit = () => {
    //api call for registeration
    
    navigate('/')

  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name="name" value={credentials.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" name="email" value={credentials.email} onChange={handleChange} />
          <div className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" value={credentials.password} onChange={handleChange} />
        </div>
      
        {/* <div className="mb-3">
          <label htmlFor="DateofJoining" className="form-label">Date of Joining</label>
         <DatePicker 
           selected = {credentials.DateofJoining}
           onChange = {handleDateChange}
           dateFormat="MM/dd/yyyy"
           />
        </div> */}
        <button type="submit" className="m-3 btn btn-primary" onClick={merasubmit}>Submit</button>
        <Link to="/login" className="btn btn-danger">Already a User?</Link>
      </form>
    </div>
  );
};

export default Signup;