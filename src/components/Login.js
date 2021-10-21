import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

export default function Login() {

    let username = useRef(null);
    let password = useRef(null);
    let [data, setData] = useState([]);
    const URL = "https://username-server-lxqad.ondigitalocean.app/users";

    useEffect(async() => {
        setData(await (await axios.get(URL)).data);
        console.log(data);

    }, [])

    const validate = (event) => {
        data.map((user) => {
            if(user.username === username.current.value && user.password === password.current.value) {
                sessionStorage.setItem("isLoggedIn", true);
                sessionStorage.setItem("name", username.current.value);
            }
            else sessionStorage.setItem("isLoggedIn", false);
        })
        window.location.replace("todo-list-with-login/");
    }

    return (
        <div>
            <h3>Login</h3>
            {(sessionStorage.getItem("isLoggedIn")) ? <Redirect to="/todo-list-with-login/todo"></Redirect> : null}
            <input placeholder="username" type="text" ref={username}></input>
            <br/>
            <input placeholder="password" type="password" ref={password}></input>
            <br/>
            <Link to="/todo-list-with-login/register" style={{fontSize: "20px", color: "white", marginTop: "10px", float: "left"}}>Register Here</Link>
            <button style={{width: "auto", float: "right", marginTop: "5px"}} onClick={validate}>Login</button>
        </div>
    )
}
