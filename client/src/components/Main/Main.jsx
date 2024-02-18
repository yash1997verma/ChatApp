import { Outlet } from "react-router-dom"
import Chat from "../Chat/Chat"
import Messages from "../Messages/Messages"
import Online from "../Online/Online"


function Main() {
  
  return (
    <div className=" flex overflow-hidden bg-white rounded-md shadow-md h-full w-full md:h-[96vh] md:w-[96vw]">
      <Chat />
      <Outlet />
      {/* <Messages /> */}
      {/* <Online /> */}
    </div>
  )
}

export default Main