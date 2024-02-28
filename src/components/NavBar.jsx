import React from 'react'

const NavBar = () => {
  return (
    <div className='hidden lg:block'>
        <div className='container'>
            <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blakish'>
                <div className='navbar_link relative cursor-pointer'>HOME</div>
                <div className='navbar_link relative cursor-pointer'>CATEGORIES</div>
                <div className='navbar_link relative cursor-pointer'>{`MEN's`}</div>
                <div className='navbar_link relative cursor-pointer'>{`WOMEN's`}</div>
                <div className='navbar_link relative cursor-pointer'>JEWELLERY</div>
                <div className='navbar_link relative cursor-pointer'>PERFUME</div>
                <div className='navbar_link relative cursor-pointer'>BLOG</div>
                <div className='navbar_link relative cursor-pointer'>HOT OFFERS</div>
            </div>
        </div>
    </div>
  )
}

export default NavBar