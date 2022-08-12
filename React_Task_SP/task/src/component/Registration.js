import React ,{useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import userSignUp from '../actions/userSignUp'; 
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { getData } from '../selectors/SignUpSelector';
import { FlagTwoTone } from '@ant-design/icons';
import axios from 'axios';

export const ErorMessages = {
  fname: "Required First Name",
  lname: "Required Last Name",
  uname: "Required User Name",
  email: "Required Email",
  password: "Required Password",
  cpassword: "Required Confirm Password",
};

function Registration(){ 
    const passwordRegex = RegExp('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"')
    const data = JSON.parse(localStorage.getItem("user"))
    const dispatch = useDispatch();
    const getDataSelector = useSelector(getData);
    console.log("getDataSelector",getDataSelector)
    const navigate = useNavigate();
    const [err, setErr] = useState({});
    const [state,setState] = useState({
      id: "",
      uname: "",
      fname: "",
      lname: "",
      email: "",
      password: "",
      cpassword: ""
  })
  
  function handleChange(event){
    const value = event.target.value;
      setState({
        ...state,
        [event.target.name] : value
      });
      handleValidation(event);  
  }

  const handleValidation = (event) => {
    const errors = {...err};

    if(event.target.value === ""){
        errors[event.target.name] = ErorMessages[event.target.name];
    } else {
      delete errors[event.target.name];
    }
    setErr(errors);
  }
  
  const handleSubmitValidation = () => {
    const errors = {
      ...err,
    };
    
    if(state.fname === "") {
      errors['fname'] = ErorMessages['fname'];
    }
    if(state.lname === "") {
      errors['lname'] = ErorMessages['lname'];
    }
    if(state.uname === "") {
      errors['uname'] = ErorMessages['uname'];
    }
    if(state.email === "") {
      errors['email'] = ErorMessages['email'];
    }
    if(state.password === "") {
      errors['password'] = ErorMessages['password'];
    }
    if(state.cpassword === "") {
      errors['cpassword'] = ErorMessages['cpassword'];
    }
    setErr(errors);
    return Object.keys(errors).length > 0;              
  }

  const onClickHandle = () => {
    setState({...state,id: uuidv4()});
    
  };

  const handleSubmit = () => {
    if(handleSubmitValidation()) {
      return;
    }
    // onClickHandle();
    dispatch(userSignUp({state}));
    setState({
      id: "",
      uname: "",
      fname: "",
      lname: "",
      email: "",
      password: "",
      cpassword: ""
    });
    alert("Sign Up Successfull !!!");
    navigate('/SignIn')
  }

    return (
    <div className="main">
    <div className="sign" align="center">Create account</div>
    Already have an account?<a><Link to="/signin"> Sign in</Link></a>
    <div>
    <form onSubmitCapture={onClickHandle}>
    <div>
      <input className="un " type="text" align="center" 
                         placeholder="User Name"
                         id= "uname"
                         name='uname'
                         onBlur={handleValidation}
                         onChange = {handleChange}/><br></br>
                         {
                           err?.uname && (
                             <label>{err.uname}</label>
                           )
                         }
      <div className='flex-container'>
      <input className="un " type="text" align="center"
                         placeholder="First Name"
                         id= "fname"
                         name='fname'
                         onBlur={handleValidation}
                         onChange = {handleChange}/><br></br>
                         {
                           err?.fname && (
                             <label>{err.fname}</label>
                           )
                         }

      <input className="un " type="text" align="center" 
                         placeholder="Last Name"
                         id= "lname"
                         name='lname'
                         onBlur={handleValidation}
                         onChange = {handleChange}/><br></br>
                         {
                           err?.lname && (
                             <label>{err.lname}</label>
                           )
                         }
      </div>
      <input className="un " type="email"
                         placeholder="E-mail"
                         id= "email"
                         name='email'
                         onBlur={handleValidation}
                         onChange = {handleChange}/><br></br>
                         {
                           err?.email && (
                             <label>{err.email}</label>
                           )
                         }

      <input className="un " type="password" 
                         placeholder="Password"
                         id= "password"
                         name='password'
                         onBlur={handleValidation}
                         onChange = {handleChange}/><br></br>
                         {
                           err?.password && (
                             <label>{err.password}</label>
                           )
                         }

      <input className="un " type="password"
                          placeholder="Repeat Password"
                          id= "cpassowrd"
                          name='cpassword'
                          onBlur={handleValidation}
                          onChange = {handleChange}/><br></br>
                          {
                            err?.cpassword && (
                              <label>{err.cpassword}</label>
                            )
                          }<br></br>

      <button className="submit" align="center" onClick={handleSubmit}>Sign Up</button><br></br><br></br>
      </div>
      </form>
      </div>
      <Outlet/>            
    </div>
  )
}
export default Registration


