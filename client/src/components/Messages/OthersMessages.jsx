
function OthersMessages() {
    //get random colors for bg
    const colors = ['bg-[#fffafa]', 'bg-[#fdfff5]', 'bg-[#fff5ee]', 'bg-[#f0fff0]', 'bg-[#EEEEFF]', 'bg-[#ffe4e1]', 'bg-[#f8f8ff]'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
        <div className='flex items-center justify-start gap-2'>
            <img className="w-10 h-10 md:w-10 md:h-10 border-2  rounded-full" src="/icons/chatAppLogo.png" alt="Profile Picture" />
            <div className={`flex flex-col p-2  rounded-md shadow-md bg-[#f8f8ff]`}>
                <p className='text-sm italic' >~ Yash</p>
                <p>Message</p>
                <p className='text-[10px] mt-1 text-end'>12.08 PM</p>
            </div>
        </div>
    )
}

export default OthersMessages