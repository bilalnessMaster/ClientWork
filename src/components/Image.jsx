import classNames from 'classnames'
import React, { useState } from 'react'

const Image = ({img}) => {
    const [isopen , setIsopen] = useState(false)
  return (
    <div className={classNames('', isopen ? 'fixed inset-0 flex justify-center items-center  bg-black/55' : '')}>
      <div  className='absolute top-12 right-12 '>
      <i onClick={()=>setIsopen(false)} className={classNames(isopen ? "ri-close-line text-white text-5xl" : '')}></i>
      </div>
      <img onClick={()=>setIsopen(true)} src={img} className={classNames('rounded-xl', isopen ? 'h-[400px] lg:h-[700px]' : '')} alt="" />
    </div> 
  )
}

export default Image
