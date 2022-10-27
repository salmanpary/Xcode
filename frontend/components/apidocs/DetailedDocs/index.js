import React from 'react'
import DetailedDocs from './DetailedDocs'
import Sidebar from '../../Sidebar'
const DetailedDocsPage = () => {
  return (
    <div className="flex">

    <Sidebar/>
    <div className="mx-auto">

    <DetailedDocs/>
    </div>
    </div>
  )
}

export default DetailedDocsPage