import { useRef } from "react";
function OnlineUsers() {

    const handleSearchIconClick = () => {
        // Focus the input when the search icon is clicked
        inputRef.current.focus();
    };
    const inputRef = useRef();
    return (
        <div className="flex flex-col grow-[0.7] py-4  gap-2 ">
                {/* header for online */}
                <div className="flex items-center  gap-4 p-2 bg-[#e3e5e8] w-[98%] h-[60px] rounded-md ">
                    <img className="w-8 h-8" src="/icons/user.png" alt="OnlineUsers_Icon" />
                    <p>Online Users</p>
                </div>

                {/* search user or groups */}
                <div className='flex items-center gap-1  p-2 border-2 w-[98%] h-[40px] rounded-md '>
                    <svg onClick={handleSearchIconClick}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input ref={inputRef} className="w-full outline-none" type="text" placeholder='Search'/>


                </div>

                {/* render available users */}
                


                
            </div>
    )
}

export default OnlineUsers