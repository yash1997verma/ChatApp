import ChatHeader from "./ChatHeader"
import ChatSearch from "./ChatSearch"
import ChatList from "./ChatList"

function Chat() {
  return (
    <div className=" flex flex-col grow-[0.3] py-4 px-2  gap-2 ">
        {/* chat header icons */}
        <ChatHeader />

        {/* search component */}
        <ChatSearch />

        {/* chatList */}
        <ChatList />
    </div>
  )
}

export default Chat