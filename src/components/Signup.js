import { useContext, useEffect } from "react"
import { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { toast } from "react-toastify"
import { GlobalContext } from "../context/GlobalContext"

export const Signup = () => {
  const [state, setState] = useContext(GlobalContext)
  const [formData, setSetFromData] = useState({
    username: "",
    password: ""
  })
  const formToast = useRef({
    username: null,
    password: null,
    account: null
  })
  let history = useHistory()

  const onSubmit = async (e) => {
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

    const users = state.users
    const user = users.find(user => user.username === formData.username)
    if (user) {
      if (!toast.isActive(formToast.current.account)) {
        formToast.current.account = toast.warn("Username already exist")
      }
    } else {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({ id: users.length + 1, ...formData })
        })
        const data = await res.json()
        if (data) {
          // Login
          setSetFromData({
            username: "",
            password: ""
          })
          localStorage.setItem('login', "true")
          localStorage.setItem('token', "demo_token")
          localStorage.setItem('user', JSON.stringify({ ...data }))
          setState({
            ...state, "auth": {
              "isLogin": true,
              "user": { ...data },
              "token": "demo_token"
            }
          })
        }
      } catch (error) {
        toast.error(error.message)
        setState({ ...state, "messages": [...state.messages, { "type": "error", "body": "Game Data Fetching Error", "desc": error.message }] })
        return null
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
        <button className="btn-primary">Create an account</button>
        <Link to="/login" className="btn-outline">I have an account</Link>
        {/* <div className="w-full text-mediumSlateBlue flex flex-col justify-center items-center">
          <Link to="/">Forgot password?</Link>
        </div> */}
      </form>
    </div>
  )
}
