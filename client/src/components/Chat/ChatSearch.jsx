import {useRef} from 'react'
function ChatSearch() {
    const handleSearchIconClick = () => {
        // Focus the input when the search icon is clicked
        inputRef.current.focus();
    };
    const inputRef = useRef();
    return (
        <div className='flex items-center gap-1  p-2 border-2 w-[98%] h-[40px] rounded-md mt-4'>
            <svg onClick={handleSearchIconClick}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input ref={inputRef} className="w-full outline-none" type="text" placeholder='Search'/>


        </div>
    )
}

export default ChatSearch