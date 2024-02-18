
function MessagesHeader() {
  return (
    <div className=' flex items-center justify-between gap-4 p-2 bg-[#e3e5e8] w-[98%] h-[60px] rounded-md '>
        <img className="w-10 h-10 md:w-10 md:h-10 border-2  rounded-full" src="/icons/chatAppLogo.png" alt="Profile Picture" />
        <div className="w-[90%]">
        <p className=" ">Name of chat</p>
        <p className="text-slate-400 text-sm">Online</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
        </svg>

    </div>
  )
}

export default MessagesHeader