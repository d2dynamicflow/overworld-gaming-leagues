import { useState } from "react"

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const onSubmit = async (e) => {
    e.preventDefault()

    //Validation
    /*     if (!username) {
          setErrorUsername(true)
          return
        } else {
          setErrorUsername(false)
        }
        if (!password) {
          setErrorPassword(true)
          return
        } else {
          setErrorPassword(false)
        } */
    console.log("hello");
  }

  return (
    <form onSubmit={ onSubmit } className="flex flex-col w-96 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm shadow-lg rounded-lg px-5 py-7 mx-auto">
      <input type="text" name="name" placeholder="Username" className="form-input" onChange={ (e) => setUsername(e.target.value) } />
      <input type="password" name="password" placeholder="Password" className="form-input" onChange={ (e) => setPassword(e.target.value) } />
      <button className="btn-login">Login</button>
    </form>
  )
}

export default Login
