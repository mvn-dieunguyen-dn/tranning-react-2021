import React, { Component } from 'react';
import UserRow from './UserRow';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: '',
        country: '',
        gender: '0',
        other: ''
      },
      listUser: [],
    }
    this.id = 0;
  }

  handleChange = (e) =>{
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState(prev => ({
      form: {
        ...prev.form,
        [name]: value
      }
    }))
  }

  handleSubmit = e =>  {
    e.preventDefault()
    this.id = this.id + 1;
    const user = { ...this.state.form, id: this.id };
    this.setState(prev => ({
      listUser: [
        ...prev.listUser,
        user
      ]
    }))
  }

  handleRemoveUser = (e) => {
    this.setState(prev => ({
      listUser: prev.listUser.filter(item => item.id !== e)
    }))
  }

  render() {
    const form = this.state.form;
    const users = this.state.listUser;
    return (
      <div className="d-flex">
        <form className="form-register" onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input type="text" name="email" onChange={ this.handleChange } />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" name="password" onChange={ this.handleChange } />
          </div>
          <div className="form-group">
            <label className="form-label">Your country</label>
            <select name="country" value={ form.country } onChange={ this.handleChange }>
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
                  onChange={ this.handleChange }
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
                  onChange={ this.handleChange }
                />
                Female
              </label>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Other information</label>
            <textarea name="other" onChange={ this.handleChange }></textarea>
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
                <UserRow key={user.id} user={user} onRemoveUser={this.handleRemoveUser}/>)
              : <tr><td className="txt-center" colSpan="5">No user here</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default Form;
