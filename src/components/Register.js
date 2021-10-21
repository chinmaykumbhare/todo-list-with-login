import React, {useState, useRef} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

export default function Register() {

    let username = useRef(null);
    let password = useRef(null);
    let cpassword = useRef(null);

    const [passVal, setPasVal] = useState("");
    const [cpassVal, setCPasVal] = useState("");
    const URL = "https://username-server-lxqad.ondigitalocean.app/users";

    const validate = (event) => {
        
        let obj = {username: username.current.value, password: password.current.value};
        console.log(obj);
        axios.post(URL, obj);
        window.location.reload();
    }

    const setVal = (event) => {
        setPasVal(password.current.value);
        setCPasVal(cpassword.current.value);
    }

    return (
        <div>
            <h3>Register</h3>
            <input placeholder="username" type="text" ref={username}></input>
            <br/>
            <input placeholder="password" type="password" ref={password} onChange={setVal}></input>
            <br/>
            <input placeholder="confirm password" type="password" ref={cpassword} onChange={setVal}></input>
            <br/>
            {(passVal === cpassVal) ? null : <h5 style={{color: "orange", marginBottom: "-15px",
            marginTop: "10px"}}>Passwords do not match</h5>}
            <br/>
            <Link to="/todo-list-with-login/login" style={{fontSize: "20px", color: "white", float: "left"}}>Login Here</Link>
            {(passVal === cpassVal) && <button style={{width: "auto", float: "right"}} onClick={validate}>Register</button>}
        </div>
    )
}
