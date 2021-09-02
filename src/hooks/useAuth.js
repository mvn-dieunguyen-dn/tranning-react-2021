import { useState } from 'react';
import { useHistory } from "react-router-dom";

function useAuth(props) {
  const [user, setUser] = useState(localStorage.getItem('user'))
  const history = useHistory()
  const [isLogged, setIsLogged] = useState(!!user)

  const login = (email, password) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        localStorage.setItem('user', JSON.stringify({email}))
        setUser({email})
        setIsLogged(true)
        history.push('/account')
      }, 1000);
    })
  }
  const logout = () => {
    localStorage.removeItem('user')
    setIsLogged(false)
    history.push('/')
  }
  return {isLogged ,login, logout}
}

export default useAuth;