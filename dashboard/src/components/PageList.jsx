import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const PageList = () => {
    const pagelist = [ '1', '2', '3', '4','5','...','10','11']
  return (
    <div className='page-list'><FaArrowLeft/>{pagelist.map((item,index)=>(
        <p className= {index == 3? 'selected-page':''}>{item}</p>
    ))}<FaArrowRight/></div>
  )
}

export default PageList