import { useNavigate } from "react-router-dom"

function SingleChat({chat}) {
  const navigate=  useNavigate();
  return (
    <div onClick={()=>navigate('messages')} className="flex items-center gap-4 h-[60px] border-t-2 cursor-pointer">
        <img className="w-10 h-10 md:w-10 md:h-10 border-2  rounded-full" src="/icons/chatAppLogo.png" alt="Profile Picture" />
        <div className=" flex justify-between w-full">
            <div className=" ">
              <p className="">{chat.name}</p>
              <p className="text-slate-400 text-sm" >{chat.lastMessage}</p>
            </div>
            <p className="text-slate-400 text-sm  ">{chat.timeStamp}</p>
        </div>
    </div>
  )
}

export default SingleChat