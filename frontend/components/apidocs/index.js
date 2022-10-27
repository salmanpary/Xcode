import React from 'react'
import Sidebar from '../Sidebar'
import ApiDocs from './ApiDocs'
const ApiDocsPage = () => {
  return (
    <div className="flex">

    <Sidebar/>
    <div className="mx-auto">

    <ApiDocs/>
    </div>
    </div>
  )
}

export default ApiDocsPage