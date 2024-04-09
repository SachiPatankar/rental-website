import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './UserContext';

const ENDPOINT = "http://localhost:4000"; 
import { io } from 'socket.io-client';

var socket, selectedChatCompare;

const ChatComponent = () => {

    

    const {user,setUser,ready} = useContext(UserContext);

    const [toggle, setToggle] = useState(false);
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');

    const [socketConnect, setSocketConnect] = useState(false);

    const handleMenuToggle = () => {
        setToggle(!toggle);
    };

    const [currentUserMessage, setCurrentUserMessage] = useState('');

    const [chatHistory, setChatHistory] = useState([
        { id: 1, type: 'incoming', message: 'Hello! How are you?' },
        { id: 2, type: 'outgoing', message: 'I’m good, thanks! And you?' },
        { id: 3, type: 'incoming', message: 'I’m great, thanks for asking!' },
        { id: 4, type: 'outgoing', message: 'What have you been up to?' },
        { id: 5, type: 'incoming', message: 'Hello! How are you?' },
        { id: 6, type: 'outgoing', message: 'I’m good, thanks! And you?' },
        { id: 7, type: 'incoming', message: 'I’m great, thanks for asking!' },
        { id: 8, type: 'outgoing', message: 'What have you been up to?' },
        // ... more messages
    ])

    const handleSendMessage = () => {
        if (!currentUserMessage.trim()) return;
        const newMessage = {
            id: chatHistory.length,
            type: "outgoing",
            message: currentUserMessage.trim(),
        };
        setChatHistory([...chatHistory, newMessage]);
        setCurrentUserMessage(''); 
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
                        {chatHistory.map((chat) => (
                            <div key={chat.id} className={`flex ${chat.type === 'incoming' ? 'justify-start' : 'justify-end'}`}>
                                <div className={`rounded-lg px-4 py-2 mb-2 ${chat.type === 'incoming' ? 'bg-gray-200 ' : 'bg-primary text-white'}`}>
                                    {chat.message}
                                </div>
                            </div>
                        ))}

                        <div>
                        <input
                            value={currentUserMessage}
                            onChange={(e) => setCurrentUserMessage(e.target.value)}
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