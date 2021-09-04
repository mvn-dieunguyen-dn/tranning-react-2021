import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

function Login(props) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const auth = useAuth()

  function handleChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    auth.login(form.email, form.password).then((e) => {
      console.log(e)
    })
  }

  return (
    <div className="login-page">
      <div className="container">
        <div className="form-page">
          <h3 className="title-page">Form Login</h3>
          <form className="form-register" onSubmit={ handleSubmit }>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="text" name="email" onChange={ handleChange } />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input type="password" name="password" onChange={ handleChange } />
            </div>
            <div className="btn-group">
              <button className="btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
