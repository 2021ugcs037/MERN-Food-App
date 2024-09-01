import React, {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
const Login = () => {

  const [credentials, setCredentials] = useState({email: "",password: ""});
  let navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/loginUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
       
        
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
    if(json.success)
    {
      localStorage.setItem("userEmail", credentials.email);
      //console.log(userEmail);
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
    }
  };

  const handleDateChange = (date) => {
    setCredentials({
      ... credentials,
      DateofJoining : date
    });
  }

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };
  return (
    <>
        <div className="container">
      <form onSubmit={handleSubmit}>
       
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" name="email" value={credentials.email} onChange={handleChange} />
          <div className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" value={credentials.password} onChange={handleChange} />
        </div>
      
       
        <button type="submit" className="m-3 btn btn-primary">Submit</button>
        <Link to="/Signup" className="btn btn-danger">I am a new User</Link>
      </form>
    </div>
      
    </>
  )
}

export default Login
