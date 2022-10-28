import React, { useState } from 'react'
import {BsFillHandThumbsUpFill} from 'react-icons/bs'
function FormBlock({key,setTables,tables}) {
    const [data,setData] = useState({
        key:key,
        name:"",
        type:"STRING",
        validation:""

    })
    const handleClick = (e)=>{
        for(var i=0;i<tables.fields.length;i++){
            if(data.name.toLowerCase()===tables.fields[i].name.toLowerCase()){
            alert('Field name already exists')
            return
            }
        }
        setTables({...tables,fields:[...tables.fields,data]})
console.log(data)
    }
    const onChange = (e)=>{
const {name,value} = e.target
setData({
    ...data,
    [name]:value
})
    }
  return (
    <div className="flex flex-col items-center mt-6 border-[2px] max-w-fit py-6 px-16 rounded-lg ">

<form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Field Name
      </label>
      <input onChange={onChange} name='name' value={data.name} class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
     
    </div>
    
  </div>
  
  <div class="flex flex-wrap -mx-3 mb-2">
    
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Type
      </label>
      <div class="relative">
                <select
                name='type'
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                //   value={data.type}
                  onChange={onChange}
                  
                >
                  <option className=''>STRING</option>
                  <option>NUMERIC</option>
                  <option disabled >DATE</option>
                  <option disabled >ARRAY</option>
                  
                 
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
      </div>
    </div>
    
    <div class="flex flex-wrap -mx-3 mb-2">
    
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Validation
      </label>
      <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  name='validation'
                //   value={data.validation}
                  onChange={onChange}

                  
                >
                  <option>UNIQUE</option>
                  <option>NIL</option>
                  <option disabled>EMAIL</option>
                  <option disabled>MAX 10</option>
                 
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
      </div>
    </div>
    <div className="flex items-center cursor-pointer bg-bg-prm w-16 text-text-prm text-center justify-center rounded-lg opacity-90 mt-4 py-1 ml-auto" onClick={handleClick}> ok <BsFillHandThumbsUpFill /></div>
</form>
    </div>
  )
}

export default FormBlock