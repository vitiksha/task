import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SignIn(){
    const [state,setState] = useState({
        uname: "",
        password: "",
    })
    const userData = JSON.parse(localStorage.getItem("user"))||[];
    
    function handleChange(event){
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name] : value
        });  
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        let flag = false;
        if(state.uname !== "" && state.password !== ""){
            userData.map((data) => {
                if ((state.uname === data.uname && state.password === data.password) ||
                    (state.uname === data.email && state.password === data.password)) {
                        flag = true;
                        
                        localStorage.setItem("token", JSON.stringify(data.id));
                        alert("Log In Successfull !!!");
                        navigate('/displaydata')
                        return true;
                    }
                });
                if(flag === false){
                    alert("Sorry !! User Does not Exist !!!");
                    return false;
                }
            }else{
                    alert("Please Enter Your LogIn Information");
                    return false;
            }
        };

        return (
            <div className='main1'>
                <div className="sign" align="center">Sing In</div>
                You have Not account?<a><Link to="/registration"> Sign Up</Link></a>
                <form className="form1"/>
                    <input className="un " type="text" align="center" 
                        placeholder="Enter User Name or Email"
                        id= "uname"
                        name='uname'
                        onChange = {handleChange}/>

                    <input className="un " type="password" align="center" 
                        placeholder="Enter Password"
                        id= "password"
                        name='password'
                        onChange = {handleChange}/>

                    <button className="submit" align="center" onClick={handleSubmit}>Sign in</button> <br></br><br></br>
            </div>
        )
    }

export default SignIn;