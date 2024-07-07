import React from 'react'


const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-[#736FA1] px-1 md:px-11 py-3 via-[#9996C5] to-[#78719B]" >
       <div className='flex items-center py-1 px-8 rounded-lg justify-between bg-white'>
             <div className='flex gap-4 md:gap-10'>
                <img src='carts-icon.png' alt='carts' width={15} />
                <img src='Vector.png' alt='Vector' width={15} />
                <img src='notification-icon.png' alt='Notification' width={15} />
                <img src='user.png' alt='Notification' width={15} />
             </div>
               <div className='items-center justify-center'>
                  <input className='text-[10px] w-40 md:w-72 border-purple-400 border rounded-lg py-2 px-2 justify-start text-left outline-none' type='text' placeholder='What are you Looking for?' />
               </div>
            <div>
                <img src='logo.png' alt='logo' width={25} />
            </div>
 
    </div>
    </div>
  )
}

export default Navbar