import React from 'react'
import "../Css/input.css"

const Search = ({input,updateInput,add1}) => {
  return (
    <div className='h-max  mt-52 flex items-center justify-center  '>

   <input placeholder='Todo' className='p-5 border rounded-l-md border-black text-black' type="text" value={input} onChange={(e)=>updateInput(e.target.value)} />
   <button onClick={add1} className='bg-black text-white p-5 rounded-r-lg'>add</button>
    </div>
  )
}

export default Search
