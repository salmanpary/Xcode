import React,{useState,useEffect} from 'react'
import axios from 'axios'
import OpenAIAPI from "react-openai-api";

function CodeSnippet() {
    const [data, setData] = useState( { text:'' });
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    

    const changeHandler = (e) => {
        setSearch(e.target.value);
    }
    const fetchData = async () => {
        if (search) {
        setIsLoading(true);
        const res = await fetch(`/api/openai`, {
          body: JSON.stringify({
            name: search
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        })
        const data = await res.json();
        setData(data);
        setIsLoading(false);
      }};
    
      const submitHandler=()=>{
        fetchData()
      }
//  const fetchApi = async()=>{
//     // try {
//     //   const resp = await axios.post('https://xcode321.herokuapp.com/snippet/',{
//     //     "prompt":"nodejs code for login"
//     //   })
//     //   console.log(resp.data)
//     // } catch (error) {
//     //   console.log(error)
//     // }
//     try {
        
//         let response = await axios.post('/api/openai')
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
//  }

 const onClick=()=>{
fetchApi()
 }

    let text= "{fn myworld() ok}"
    var arr = text.split('')
    console.log(arr,'arr')
  return (<>
    <div className="mb-24 mt-12">


<div class="flex flex-wrap -mx-3  ">
    
    <div class="w-[10rem] px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Select Library
      </label>
      <div class="relative">
                <select
                name='type'
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                //   value={data.type}
                //   onChange={onChange}
                  
                >
                  <option className=''>Nodejs</option>
                  <option>Django</option>
                  <option  >Spring</option>             
                 
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
    
    <div class="w-[10rem] px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Use Case
      </label>
      <div class="relative">
                <select
                name='type'
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                //   value={data.type}
                //   onChange={onChange}
                  
                >
                  <option className=''>Login</option>
                  <option>Register</option>
                  <option  >Get all</option>
                  <option  >Post</option>   
                  <option  >Update</option>                                    
                 
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
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Custom search
      </label>
    <input
    type="text"
    value={search}
    className='border-2'
    onChange={(e)=>changeHandler(e)}
  />
    <div style={{
                background: 'linear-gradient(90deg, #1E3B86 0%, #3765DC 100%)'
            }}  onClick={submitHandler }
              className="mx-auto mt-12  text-lg text-white w-[10rem] text-center rounded-lg py-2 items-center ">
                Generate
            </div>
    <div className="bg-black min-w-[30rem] max-w-[40rem] min-h-[10rem] mt-12 rounded-lg text-white p-2 pl-4">
    <div className="flex gap-2">
        <div className="w-4 h-4 bg-red-600 rounded-full"> </div>
        <div className="w-4 h-4 bg-green-600 rounded-full"> </div>
        <div className="w-4 h-4 bg-blue-600 rounded-full"> </div>
    </div>
<div className="max-w-[20ch] mt-6 font-semibold text-white">
{isLoading ? (
      <div>Loading ...</div>
   ) : (
     <span>
     {data.text}
     </span>
     )}

  
</div>
    </div>
    </div>
<div className=''>
<h3>
  <title>GPT-3 App</title>
  <link rel="icon" href="/favicon.ico" />
</h3>


</div>
</>
);
}
  

export default CodeSnippet