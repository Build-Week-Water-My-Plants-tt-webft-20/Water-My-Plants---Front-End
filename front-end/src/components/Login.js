import React, {useState} from 'react'
import axios from 'axios'

const emptyCredentials = {
  username: "",
  password: ""
}

export default function Login(props) {
  const [credentials, setCredentials] = useState(emptyCredentials)

  const onChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
}

  const login = e => {
    e.preventDefault()
    axios.post('', credentials)
      .then(res => {
        localStorage.setItem('token', res.data)
      })
      .then(() => {
        props.history.push('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <div >
      <div className="login-form">
        <form onSubmit={login}>
          <label>
            Username:
             <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={onChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </label>
          <button type="submit">Log In</button>
        </form>
        
      </div>
    </div>
  )
}