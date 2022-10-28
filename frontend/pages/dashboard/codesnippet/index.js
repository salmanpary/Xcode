import React from 'react'
import Sidebar from '../../../components/Sidebar'

function CodeSnippet() {
  return (
    <div className="flex">
     <Sidebar />
      <div className="mx-auto">
        <CodeSnippet />
      </div>
    </div>
  )
}

export default CodeSnippet