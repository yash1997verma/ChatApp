import CurrentMessages from "./CurrentMessages"
import MessagesHeader from "./MessagesHeader"
import NewMessage from "./NewMessage"
import WelcomeMessage from "./WelcomeMessage"

function Messages() {
  return (
    <div  className="flex flex-col  grow-[0.7] py-4 gap-2 ">
      {/* header of messages */}
      <MessagesHeader />

      {/* message in chat */}
      <WelcomeMessage />
      {/* <CurrentMessages /> */}

      {/* type new message */}
      <NewMessage />
    </div>
  )
}

export default Messages