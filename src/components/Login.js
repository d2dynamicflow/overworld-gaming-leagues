import { useContext, useRef, useState } from "react"
import { GlobalContext } from "../Context/GlobalContext"
import { useHistory } from 'react-router'
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

const Login = () => {
  const [state, setState] = useContext(GlobalContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const toastIdUsername = useRef(null);
  const toastIdPassword = useRef(null);
  const toastIdLogin = useRef(null);
  let history = useHistory()
  if (state.auth.isLogin) {
    history.push("/")
  }
  const onSubmit = (e) => {
    e.preventDefault()
    //Validation
    if (!username) {
      if (!toast.isActive(toastIdUsername.current)) {
        toastIdUsername.current = toast.warn("Please Enter your username")
      }
      return
    }
    if (!password) {
      if (!toast.isActive(toastIdPassword.current)) {
        toastIdPassword.current = toast.warn("Please Enter your password")
      }
      return
    }

    let formData = { username, password }
    // Login
    const users = state.users
    const user = users.find(user => user.username === formData.username)
    if (user === undefined) {
      if (!toast.isActive(toastIdLogin.current)) {
        toastIdLogin.current = toast.error("The username or password you have entered is wrong")
      }
      setState({ ...state, "messages": [...state.messages, { "type": "error", "body": "Invalid Credentials", "desc": "The username or password you have entered is wrong" }] })
    } else {
      if (user.password !== formData.password) {
        if (!toast.isActive(toastIdLogin.current)) {
          toastIdLogin.current = toast.error("The username or password you have entered is wrong")
        }
        setState({ ...state, "messages": [...state.messages, { "type": "error", "body": "Invalid Credentials", "desc": "The username or password you have entered is wrong" }] })
      } else {
        setPassword('')
        setUsername('')
        localStorage.setItem('login', "true")
        localStorage.setItem('token', "demo_token")
        localStorage.setItem('user', JSON.stringify({ ...user }))
        setState({
          ...state, "auth": {
            "isLogin": true,
            "user": { ...user },
            "token": "demo_token"
          }
        })
        history.replace("/")
      }

    }
  }

  return (
    <div className="container mx-auto px-4 md:px-0">
      <form onSubmit={ onSubmit } className="flex flex-col w-full md:w-96 bg-gray-300 bg-opacity-10 backdrop-filter backdrop-blur shadow-lg rounded-lg px-5 py-7 mx-auto">
        <input type="text" name="name" placeholder="Username" className="form-input" onChange={ (e) => setUsername(e.target.value) } />
        <input type="password" name="password" placeholder="Password" className="form-input" onChange={ (e) => setPassword(e.target.value) } />
        <button className="btn-primary">Login</button>
        <Link to="/" className="btn-outline">I don't have an account</Link>
        <div className="w-full text-mediumSlateBlue flex flex-col justify-center items-center">
          <Link to="/">Forgot password?</Link>
        </div>
      </form>
    </div>
  )
}

export default Login
