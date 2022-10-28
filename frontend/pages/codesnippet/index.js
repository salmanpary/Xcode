import React from 'react'
import CodeSnippet from '../../components/Codesnippet/CodeSnippet'
import Sidebar from '../../components/Sidebar'

function Code() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="mx-auto">
        <CodeSnippet />
      </div>
    </div>
  )
}

export default Code