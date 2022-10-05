import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./Auth.css";
import {useAppDispatch, useAppSelector} from '../../app/hooks'


import {signInAsync, IUser} from "./authSlice";

const Auth = () => {
    const error = useAppSelector(state => state.auth.error)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [userData, setUserData] = useState<IUser>({login: '', password: ''})

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        dispatch(signInAsync(userData)).then(() => {
            navigate('/contacts')
        })
    }

  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubmit}>
        <label htmlFor="login">Login</label>
        <input type="text" name="login" id="id" onChange={e => setUserData((prev: IUser) => ({...prev, login: e.target.value}))}/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={e => setUserData((prev: IUser) => ({...prev, password: e.target.value}))} />
        <button className="login-btn" type="submit">
          Login
        </button>
          <span>{error ? error : ''}</span>
      </form>
    </div>
  );
};

export default Auth;
