import React, { useState } from 'react';
import UserRow from './UserRow';
import './Form.css';
import UserRowHooks from './UserRowHooks';

let id = 0;

const FormHooks = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    country: '',
    gender: '0',
    other: ''
  });
  const [users, setUsers] = useState([]);

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
    id += 1;
    const user = { ...form, id };
    setUsers([ ...users, user ])
    console.log(users);
  }

  function handleRemove(e) {
    const newUsers = users.filter(item => item.id !== e)
    setUsers(newUsers)
  }

  return (
    <div className="d-flex">
      <form className="form-register" onSubmit={ handleSubmit }>
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input type="text" name="email" onChange={ handleChange } />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input type="password" name="password" onChange={ handleChange } />
        </div>
        <div className="form-group">
          <label className="form-label">Your country</label>
          <select name="country" value={ form.country } onChange={ handleChange }>
            <option value="" disabled>Please choose country</option>
            <option value="VietNam">VietNam</option>
            <option value="Campuchia">Campuchia</option>
            <option value="Lao">Lao</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Gender</label>
          <div className="radio-group">
            <label className="form-label">
              <input
                type="radio"
                value="0"
                name="gender"
                id="male"
                checked={form.gender === '0'}
                onChange={ handleChange }
              />
              Male
            </label>
            <label className="form-label">
              <input
                type="radio"
                value="1"
                name="gender"
                id="female"
                checked={form.gender === '1'}
                onChange={ handleChange }
              />
              Female
            </label>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Other information</label>
          <textarea name="other" onChange={ handleChange }></textarea>
        </div>
        <div className="btn-group">
          <button className="btn">Submit</button>
        </div>
      </form>
      <div className="list-users">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Country</th>
              <th>Gender</th>
              <th>Other information</th>
              <th className="txt-center">Remove</th>
            </tr>
          </thead>
          <tbody>
            { users.length
              ? users.map((user) =>
                <UserRowHooks key={user.id} user={user} onRemoveUser={handleRemove}/>)
              : <tr><td className="txt-center" colSpan="5">No user here</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default FormHooks
