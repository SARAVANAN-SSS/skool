import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux";
import { randomMessge, randomName } from "../utils/helper";
import { addChat } from "../utils/chatSlice";

const LiveChat = () => {
  const [myMessage, setMyMessage] = useState('')

  const dispatch = useDispatch()

  const chatData = useSelector(store=> store.chat.data);


  useEffect(()=>{

      const i = setInterval(() => {

          dispatch(addChat({name: randomName(), message: randomMessge()}))
          
      }, 2000);
      return (()=> clearInterval(i))
  },[])

  const handleSubmit = (e)=>{
    e.preventDefault();

    dispatch(addChat({
      name: "Saravanan",
      message: myMessage
    }))

    setMyMessage("")
  }

  return (
    <>
    <div className="p-3 w-full h-[391px] border border-black bg-gray-100 overflow-y-scroll">
        <div>
        {chatData.map((c,i)=>(<ChatMessage key={i} name={c.name} message={c.message} />
        ))}
        </div>
        
    </div>
    <form className="border border-black bg-gray-100 pl-3 pb-3" onSubmit={handleSubmit}>
          <input className="px-2 border border-black w-96" type="text" value={myMessage} onChange={(e)=> setMyMessage(e.target.value)} />
          <button className="px-2 ml-3 mt-3 bg-green-500 rounded-lg">Send</button>
        </form>
        </>
  )
}

export default LiveChat