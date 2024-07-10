import React from 'react'
import {appleImg,bagImg,searchImg } from '../utils'
import { navLists } from '../constants'


const Navbar = () => {
  return (
<header className='py-5 w-full sm:px-10 px-5 flex justify-between items-center'>
  <nav className='flex w-full screen-max-width'>
    <img src={appleImg} alt="" width={16} height={24}/>

    <div className='flex flex-1 justify-center max-sm:hidden'>
      {navLists.map((nav)=> (
        <div key={nav} className='px-5 text-sm text-gray hover:text-white cursor-pointer transition-all'>
          {nav}
        </div>
      )

      )}
    </div>

    <div className= 'flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
      <img src={searchImg} alt="" width={18} height={18}/>
      <img src={bagImg} alt="" width={18} height={18}/>
    </div>
  </nav>
</header>
  )
}

export default Navbar
