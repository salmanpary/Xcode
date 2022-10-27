import React from 'react'
import Sidebar from '../Sidebar'
import CreateTable from './CreateTable'
const CreateTablePage = () => {
  return (
    <div className="flex">

    <Sidebar/>
    <div className="mx-auto">

    <CreateTable />
    </div>
    </div>
  )
}

export default CreateTablePage