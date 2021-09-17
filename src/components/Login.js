import { useContext, useState } from "react"
import { GlobalContext } from "../Context/GlobalContext"
import { useHistory } from 'react-router'

const Login = () => {
  const [state, setState] = useContext(GlobalContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  let history = useHistory()
  const onSubmit = async (e) => {
    e.preventDefault()
    //Validation
    if (!username) {
      setState({ ...state, "messages": [...state.messages, { "type": "error", "body": `Username is missing`, "desc": "Please Enter your username" }] })
      return
    }
    if (!password) {
      setState({ ...state, "messages": [...state.messages, { "type": "error", "body": `Password is missing`, "desc": "Please Enter your password" }] })
      return
    }

    let formData = { username, password }

    const loginData = await state.function.login(formData)
    if (loginData.success) {
      setPassword('')
      setUsername('')
      history.replace("/")
    } else {
      setState({ ...state, "messages": [...state.messages, { "type": "error", "body": `Login Error`, "desc": "Please Check Your User Or Password" }] })
    }
  }

  return (
    <form onSubmit={ onSubmit } className="flex flex-col w-96 bg-gray-300 bg-opacity-10 backdrop-filter backdrop-blur shadow-lg rounded-lg px-5 py-7 mx-auto">
      <input type="text" name="name" placeholder="Username" className="form-input" onChange={ (e) => setUsername(e.target.value) } />
      <input type="password" name="password" placeholder="Password" className="form-input" onChange={ (e) => setPassword(e.target.value) } />
      <button className="btn-primary">Login</button>
      <button className="btn-outline">I don't have an account</button>
      <div className="w-full text-mediumSlateBlue flex flex-col justify-center items-center">
        <a href="/">Forgot password?</a>
      </div>
    </form>
  )
}

export default Login
