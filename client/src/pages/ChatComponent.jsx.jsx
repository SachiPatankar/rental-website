import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './UserContext';
import axios from "axios";

const ENDPOINT = "http://localhost:4000"; 
import { io } from 'socket.io-client';
var socket;

const ChatComponent = ({reqId}) => {
    const {user} = useContext(UserContext);
    const [toggle, setToggle] = useState(false);
    const [messages, setMessages] = useState([]);
    const [messageInput, setmessageInput] = useState('');
    const [socketConnect, setSocketConnect] = useState(false);

    const handleMenuToggle = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        axios.get('/chat/'+reqId).then(response => {
          setMessages(response.data);
        });
      }, []);

    // useEffect (()=>{
    // socket = io(ENDPOINT);
    // socket.emit("setup", user);
    // socket.on("connection", () => {
    //     setSocketConnect(true);
    // })

    // socket.emit("join chat", reqId);
    // }, [])

    useEffect(() => {
        if (!socket) {
          socket = io(ENDPOINT);
          socket.emit("setup", user);
          socket.on("connection", () => setSocketConnect(true));
          socket.emit("join chat", reqId);
        }
      }, []);
      

    useEffect(() => {
       socket.on("message received", (newMessageRecieved)  => {
        console.log(newMessageRecieved);

        if (reqId != newMessageRecieved.chat._id)
        {
            console.log("opps")
        }else
        {
            setMessages([...messages, newMessageRecieved])
        }

        setMessages([...messages, newMessageRecieved])

       })
      });



    const handleSendMessage = async() => {
        if (!messageInput.trim()) return;
        const newMessage = {
            message: messageInput.trim(),
            sender:user._id,
            chat:reqId
        };

        const data = await axios.post("/chat/"+ reqId, newMessage);

        socket.emit("new message", data )
        setMessages([...messages, newMessage]);
        setmessageInput(''); 
    };

  return (
    <div>
        <button onClick={handleMenuToggle} className='bg-primary text-white px-4 py-2 rounded-3xl'>
        Chat Now
        </button>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } `}
        >
           <div className="fixed bottom-16 right-4 bg-white border rounded-lg w-96  shadow-lg">
                <div className="flex flex-col h-96">
                    <div className="flex-1 overflow-y-auto">

                        
                        <div className='bg-primary text-white text-left p-4 sticky-top-0'>Username</div>

                        <div className='p-4'>
                        {messages.map((message) => (
                            <div className={`flex ${message.sender === user._id ? 'justify-end' : 'justify-start'}`}>
                                <div className={`rounded-lg px-4 py-2 mb-2 ${message.sender === user._id ? 'bg-primary text-white' : 'bg-gray-200 '}`}>
                                    {message.message}
                                </div>
                            </div>
                        ))}

                        <div>
                        <input
                            value={messageInput}
                            onChange={(e) => setmessageInput(e.target.value)}
                            className="w-full p-2 border-none rounded-lg focus:outline-none focus:border-neutral-500"
                            placeholder="Enter a message..."
                        ></input>
                        <div className='flex'>
                        <button onClick={handleSendMessage} className="mt-2 w-full bg-primary text-white font-bold py-2 px-4 mr-1 rounded">
                            Send
                        </button>
                        <button onClick={handleMenuToggle} className="mt-2 ml-1 w-full bg-primary text-white font-bold py-2 px-4 rounded">Close</button>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
</div>
</div>
  )
}

export default ChatComponent