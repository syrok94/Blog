import React from 'react'
import '../login/Login.css';

function Login() {

    const handleClick = () =>{
       
    }

    return (

        <div className='Login'>
            <div class="form-container">
                <p class="title">Welcome back</p>
                <form class="form">
                    <input type="email" class="input" placeholder="Email" />
                    <input type="password" class="input" placeholder="Password" />
                    <p class="page-link">
                        <span class="page-link-label">Forgot Password?</span>
                    </p>
                    <button onClick={handleClick} class="form-btn">Log in</button>
                </form>
                <p class="sign-up-label">
                    Don't have an account?<span class="sign-up-link">Sign up</span>
                </p>
                
            </div>
        </div>
    );
}

export default Login;