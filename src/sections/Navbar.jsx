import React from 'react';
import logo from '../assets/logo.svg' 
import Button from '../components/Button';

export default function Navbar() {

  const menuItems = [
    "Flights",
    "Hotels",
    "Packages",
    "Sign in",
  ]

  return <div className='h-[96px] flex items-center justify-between px-12'>
      <div>
        <img src={logo} alt="Tripma logo" />
      </div>

      <div className='flex items-center'>
          {menuItems.map((item, index) => <NavbarItem key={item} item={item} index={index}/>)}
          <Button text="Sign up"/>
      </div>
  </div>;
}

function NavbarItem({item, index}){
  return <div className={`px-3 py-2 mx-2 cursor-pointer hover:text-purple-blue ${index === 0 ? 'text-purple-blue font-bold': 'text-grey-400'}`}>{item}</div>;
}
