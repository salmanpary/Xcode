import React from 'react'
import {useRouter} from 'next/router'
import CreateApiPage from '../../../../components/CreateApi'
const TablePage = () => {
    const router = useRouter()
    console.log(router.query)
  return (
   <CreateApiPage/>
  )
}

export default TablePage