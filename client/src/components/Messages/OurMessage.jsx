
function OurMessage() {
    
    //get random colors for bg
    const colors = ['bg-[#fffafa]', 'bg-[#fdfff5]', 'bg-[#fff5ee]', 'bg-[#f0fff0]', 'bg-[#EEEEFF]', 'bg-[#ffe4e1]', 'bg-[#f8f8ff]'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
       <div className='flex items-center justify-end gap-2'>
           <div className={`flex flex-col p-2 rounded-md shadow-md bg-[#d9fdd3]`}>
               <p>Message</p>
               <p className='text-[10px] mt-1 text-end'>12.08 PM</p>
           </div>
       </div>
    )
}

export default OurMessage