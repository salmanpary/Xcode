import axios from 'axios';
import React, { useState } from 'react'
import FormBlock from '../FormBlock'

function CreateTable() {



    const [inputList, setInputList] = useState(1);
    const [tables,setTables] = useState({
        tablename:"",
        fields:[]
    })

    const fetchApi = async(body)=>{
        try {
            
            const resp = await axios.post('https://xcode321.herokuapp.com/tablecreate/',body)
            console.log(resp.data)
        } catch (error) {
            console.log(error)
        }
    }
    const submitHanlder = (e)=>{
      var jsontable = JSON.stringify(tables)
      fetchApi(jsontable)
    }

    const onAddBtnClick = (e) => {
        setInputList(inputList + 1);
    };
    const onChange=(e)=>{
        const {name,value} = e.target
        setTables({
            ...tables,
            [name]:value
        })
    }

    return (
        <div className='w-[80vw] min-h-screen'>
            <h2 className='text-4xl text-center font-bold mt-6'>Create Table</h2>

            <div className="w-[80vw] flex justify-center mt-12">
                <div class="flex flex-wrap  mb-6">
                    <div class=" px-3 flex items-center">
                        <label class="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2" for="grid-first-name">
                            Table Name
                        </label>
                        <input onChange={onChange} name='tablename' value={tables.tablename} class="appearance-none w-[15rem] ml-4 block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />

                    </div>

                </div>
            </div>

            <div className="flex flex-col items-center">
                <h2 className='text-3xl font-bold text-text-sec'>Add Fields</h2>
                {/* {Array.apply(null, { length: inputList }).map((e, i) => (
                    <>

                    {i}
                <FormBlock key={e}/>
                    </>
                ))} */}
                {
                    [...Array(inputList)].map((e, i) => <FormBlock key={e} setTables={setTables} tables={tables} />)

                }
            </div>
            <h3 onClick={onAddBtnClick} className='text-center text-text-sec text-xl mt-4 font-semibold cursor-pointer'>+ Add More Fields</h3>

            <div style={{
                background: 'linear-gradient(90deg, #1E3B86 0%, #3765DC 100%)'
            }} onClick={submitHanlder} className="mx-auto mt-12  text-lg text-white w-[10rem] text-center rounded-lg py-2 items-center ">
                Submit
            </div>
        </div>
    )
}

export default CreateTable