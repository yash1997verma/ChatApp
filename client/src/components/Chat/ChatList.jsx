import { useState } from "react"
import SingleChat from "./SingleChat"
function ChatList() {
    const [chatList, setChatList]  = useState([
        {
            id:1,
            name: 'user1',
            lastMessage: 'Lastmsg1',
            timeStamp: 'today',
        },
        {
            id:2,
            name: 'user1',
            lastMessage: 'Lastmsg1',
            timeStamp: 'today',
        },
        {
            id:3,
            name: 'user1',
            lastMessage: 'Lastmsg1',
            timeStamp: 'today',
        }
    ])

    return (
        <div className="w-[98%] h-[80vh] mt-2 overflow-y-scroll custom-scrollbar  ">
            {chatList.map((chat)=>(
                <SingleChat  key={chat.id} chat={chat} />
            ))}
        </div>
    )
}

export default ChatList