import { useContext, useEffect, useRef, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { Link, useHistory } from "react-router-dom"
import { toast } from "react-toastify"

const Login = () => {
  const [state, setState] = useContext(GlobalContext)
  const [formData, setSetFromData] = useState({
    username: "",
    password: ""
  })
  const formToast = useRef({
    username: null,
    password: null,
    login: null
  })
  let history = useHistory()

  const onSubmit = (e) => {
    e.preventDefault()
    //Validation
    if (!formData.username) {
      if (!toast.isActive(formToast.current.username)) {
        formToast.current.username = toast.warn("Please enter your username")
      }
      return
    }
    if (!formData.password) {
      if (!toast.isActive(formToast.current.password)) {
        formToast.current.password = toast.warn("Please enter your password")
      }
      return
    }

    // Login
    const users = state.users
    const user = users.find(user => user.username === formData.username)
    if (!user) {
      if (!toast.isActive(formToast.current.login)) {
        formToast.current.login = toast.error("The username or password you have entered is wrong")
      }
      setState({ ...state, "messages": [...state.messages, { "type": "error", "body": "Invalid Credentials", "desc": "The username or password you have entered is wrong" }] })
    } else {
      if (user.password !== formData.password) {
        if (!toast.isActive(formToast.current.login)) {
          formToast.current.login = toast.error("The username or password you have entered is wrong")
        }
        setState({ ...state, "messages": [...state.messages, { "type": "error", "body": "Invalid Credentials", "desc": "The username or password you have entered is wrong" }] })
      } else {
        setSetFromData({
          username: "",
          password: ""
        })
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
      }

    }
  }

  useEffect(() => {
    if (state.auth.isLogin) {
      history.push("/")
    }
  }, [state, history])

  return (
    <div className="container mx-auto px-4 md:px-0">
      <form onSubmit={ onSubmit } className="flex flex-col w-full md:w-96 bg-gray-300 bg-opacity-10 backdrop-filter backdrop-blur shadow-lg rounded-lg px-5 py-7 mx-auto">
        <input type="text" name="name" placeholder="Username" className="form-input" onChange={ (e) => setSetFromData({ ...formData, username: e.target.value }) } />
        <input type="password" name="password" placeholder="Password" className="form-input" onChange={ (e) => setSetFromData({ ...formData, password: e.target.value }) } />
        <button className="btn-primary">Login</button>
        <Link to="/signup" className="btn-outline mb-3">I don't have an account</Link>
        <div className="w-full text-mediumSlateBlue flex flex-col justify-center items-center">
          <Link to="/">Forgot password?</Link>
        </div>
      </form>
    </div>
  )
}

export default Login
