import { useEffect, useState } from "react";
import { BiCheck, BiInfoCircle, BiX } from "react-icons/bi"

const Message = ({ message }) => {
  const [show, setShow] = useState(true)

  // On componentDidMount set the timer
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShow(false)
    }, 5 * 1000)

    return () => {
      clearTimeout(timeId)
    }
  }, []);

  // If show is false the component will return null and stop here
  if (!show) {
    return null;
  }

  return (
    <div className={ `message-box ${message.type}` }>
      <div className="flex items-center justify-center pr-3">
        <div className="message-circle">
          { message.type === "error" && <BiX /> }
          { message.type === "success" && <BiCheck /> }
          { message.type !== "success" && message.type !== "error" && <BiInfoCircle /> }
        </div>
      </div>
      <div className="flex-grow">
        <h1 className="message-body">{ message.body }</h1>
        <p className="message-desc">{ message.desc }</p>
      </div>
    </div>
  )
}

export default Message
