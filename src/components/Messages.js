import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalContext"
import Message from "./Message"

const Messages = () => {
  const [state] = useContext(GlobalContext)

  return (
    <div className="messages">
      { state.messages !== [] && state.messages.map((message, index) => (
        <Message message={ message } key={ index } />
      )) }
    </div>
  )
}

export default Messages
