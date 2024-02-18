
function WelcomeMessage() {
  return (
    <div className='flex flex-col items-center justify-center gap-2  h-[80vh] w-[98%] p-2'>
        <img className='w-[20vw] h-[40vh] hidden md:inline' src="/icons/phone-chat.gif" alt="Welcome to the app" />
        <p className='font-bold'>Welcome !! </p>
        <p className='font-bold text-sm text-slate-400 text-center w-[50vw] md:w-[30vw]'>
            Connect with friends, create new groups, and start meaningful conversations, ChatApp is your platform for seamless communication.
        </p>
    </div>
  )
}

export default WelcomeMessage; 
