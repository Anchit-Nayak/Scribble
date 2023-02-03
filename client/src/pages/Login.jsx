import React from 'react';


export default function Login() {
  return (
  
    <div className="auth">
      <form>
      <h1>Scribble</h1>
      <h2>SignIn</h2>
        <input type="text" placeholder='username'></input>
        <input type="password" placeholder='password'></input>
        <button>SignIn</button>
      </form>
      
    </div>
  );
}
