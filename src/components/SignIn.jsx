import React, { useRef } from 'react'
import { auth } from '../firebase';
import "./SignIn.css"
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";


function SignIn() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e)=> {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, emailRef.current.value , passwordRef.current.value).then((user) => {
            console.log(user);
        }).catch((error) => {
            console.log(error);
        })
    }
    
    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, emailRef.current.value , passwordRef.current.value).then((user) => {
            console.log(user);
        }).catch((error) => {
            console.log(error);
        })
    }

  return (
    <div className='signin'>
        <form action="">
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder='Email' />
            <input ref={passwordRef} type="password" placeholder='Password' />
            <button type='submit' onClick={login}>Sign In</button>

            <h4>
                <span className='signin__gray'>New to Netflix?</span>
                <span className='signin__link' onClick={register}>Sign Up Now</span>
                
            </h4>
        </form>
    </div>
  )
}

export default SignIn