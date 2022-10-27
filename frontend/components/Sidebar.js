import React,{useState} from 'react'
import {AiOutlineDown,AiOutlineUp,AiOutlineTwitter,AiOutlineInstagram,AiOutlineFacebook} from 'react-icons/ai'

const Sidebar = () => {
  const [toggle,setToggle] = useState(false)
  const [toggle2,setToggle2] = useState(false)
  return (
    <div className='w-[20vw] bg-bg-prm h-screen fixed'>
      <div className="flex flex-col items-center ">
      <div className="flex text-4xl items-center text-text-prm justify-center gap-4 mt-12">
          <AiOutlineFacebook className='cursor-pointer hover:scale-110'/>
          <AiOutlineInstagram className='cursor-pointer hover:scale-110'/>
          <AiOutlineTwitter className='cursor-pointer hover:scale-110'/>
        </div>
        <h3 className='text-3xl font-bold text-text-prm mt-12 cursor-pointer'>Home</h3>
        <h3 className='text-3xl font-bold text-text-prm mt-6 cursor-pointer'>Dashboard</h3>
        <div className="mt-12">
        <h3 className='text-2xl cursor-pointer  text-text-prm mt6'>Create Table</h3>
        <h3 onClick={()=>{
          setToggle(!toggle)
          setToggle2(false)
        }}  className=' text-2xl flex items-center text-text-prm mt-8 cursor-pointer'>Create API
         {
          toggle? <AiOutlineUp className='ml-2 text-sm' />:<AiOutlineDown className='ml-2 text-sm' />
         }
         
         </h3>
        {toggle && <div className="text-lg text-text-prm p-4">
          <ul className='cursor-pointer'>
          <li>-Table1</li>
            <li>-Table1</li>
            <li>-Table1</li>
          </ul>
        </div>}
        <h3 onClick={()=>{
          setToggle2(!toggle2)
          setToggle(false)
        }} className='text-2xl flex items-center  text-text-prm mt-8 cursor-pointer'>API Docs
         {
          toggle2? <AiOutlineUp className='ml-2 text-sm font-bold' />:<AiOutlineDown className='ml-2 text-sm font-bold' />
         }
         </h3>
        {toggle2 && <div className="text-xl text-text-prm p-4">
          <ul className='cursor-pointer'>
            <li>-Table1</li>
            <li>-Table1</li>
            <li>-Table1</li>
          </ul>
        </div>}
        </div>
        </div>
        

    </div>
  )
}

export default Sidebar