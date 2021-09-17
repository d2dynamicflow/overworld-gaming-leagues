import { logDOM } from "@testing-library/dom"
import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalContext"
import Message from "./Message"

const Messages = () => {
  const [state] = useContext(GlobalContext)

  return (
    <div className="messages">
      { state.messages !== [] && state.messages.map((message, index) => {
        if (index > 3) {
          console.log(`${message.body}: ${message.desc}`);
          if (index === 4) {
            return (<Message message={ { "type": "message", "body": `Total ${index + 1} Errors`, "desc": "Check Consol For More Errors" } } key={ index } index={ index } length={ state.messages.length } />);
          } else {
            return false;
          }
        } else {
          return (<Message message={ message } key={ index } index={ index } length={ state.messages.length } />)
        }
      }) }
    </div>
  )
}

export default Messages
