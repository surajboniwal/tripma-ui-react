import React, { useRef, useState } from 'react';
import countries from './../constants/countries'

export default function InputField({placeholder, first, icon}) {

  const [showDropdown, setShowDropdown] = useState(false)
  const [value, setValue] = useState('')
  const [sortedItems, setSortedItems] = useState(countries)
  const inputRef = useRef(null)

  function onFocus(e) {
    setShowDropdown(true)
  }

  function onBlur(e){
    setShowDropdown(false)
  }

  function setCountry(country){
    inputRef.current.value = country
    setValue(country)
  }

  function onEnterPressed(){
    setCountry(sortedItems[0])
    setShowDropdown(false)
  }

  return <div className={`block flex border border-grey-200 bg-white items-center relative ${first ? 'rounded-l-4xl' : ''}`}>
      <img className='w-8 h-8 mx-2' src={icon} alt="" />
      <input onKeyDown={(e) => e.key === 'Enter' ? onEnterPressed() : {}} ref={inputRef} onChange={(e) => setSortedItems(countries.filter((item) => item.toLowerCase().startsWith(e.target.value.toLowerCase())))} onFocus={onFocus} onBlur={onBlur} className='appearance-none focus:outline-none pr-3 text-grey-600 w-64' type="text" placeholder={placeholder} />

      <div className={`absolute bottom-0 transform translate-y-full z-20 bg-true-white rounded-6xl shadow-xl ${showDropdown? 'block': 'hidden'}`}>
        {sortedItems.slice(0, 5).map((item, i) => <DropdownItem key={item} item={item} setCountry={setCountry} index={i}/>)}
      </div>
  </div>;
}

function DropdownItem({item, setCountry, index}){
  return <div onMouseDown={()=>setCountry(item)} className={`w-72 mx-2 my-2 p-2 rounded-4xl cursor-pointer ${index === 0 ? 'bg-purple-blue text-white': 'bg-transparent text-grey-700 hover:bg-purple-blue hover:bg-opacity-20'}`}>
    {item}
  </div>;
}
