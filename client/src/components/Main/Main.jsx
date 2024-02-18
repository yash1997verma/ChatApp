import Chat from "../Chat/Chat"
import Messages from "../Messages/Messages"
function Main() {
  return (
    <div className=" flex overflow-hidden bg-white rounded-md shadow-md h-full w-full md:h-[96vh] md:w-[96vw]">
      <Chat />
      <Messages />
    </div>
  )
}

export default Main