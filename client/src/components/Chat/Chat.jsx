import ChatHeader from "./ChatHeader"
import ChatSearch from "./ChatSearch"
import ChatList from "./ChatList"

function Chat() {
  return (
    <div className="grow-[0.3] flex-col  py-4 px-2 ">
        {/* chat header icons */}
        <ChatHeader />

        {/* search component */}
        <ChatSearch />

        {/* chatList */}
        <div>
            <ChatList />
        </div>
    </div>
  )
}

export default Chat