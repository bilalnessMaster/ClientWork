import React, { useRef } from 'react'

import Wrapper from './Wrapper';

const data = [
  {id : 1 , img : '/40.jpeg'},

  {id : 3 , img : '/42.jpeg'},
  {id : 4 , img : '/43.jpeg'},
  {id : 5 , img : '/44.jpeg'},
]
const Results = () => {

  return (
    <Wrapper className='bg-gray-50    mt-14 lg:mt-44 py-8 px-1 border border-gray-300/40'>
         <div className='w-full flex flex-col-reverse gap-6 md:gap-0 md:flex-row justify-center items-center md:justify-between md:items-start 2xl:items-center px-4'>
          
          <p className='text-center md:text-end w-[330px] md:w-[500px] text-xl lg:text-2xl font-Almarai text-gray-400 '>
         شاهد نتائج عملائنا واستمتع بمشاهدة قصص النجاح والتحولات التي حققوها من خلال استراتيجياتنا المبتكرة.  
          </p>
          <h1 className='text-center w-[350px]  text-6xl  xl:text-9xl font-bold md:text-end  text-primary md:w-[500px] font-Almarai'>
          شاهد
          نتائج 
          </h1>
      </div>
      <div className='grid lg:grid-cols-4  
      grid-cols-2 gap-2 items-center justify-center mt-28 px-1'>
      {data.map((item) => (
          
           <img src={item.img} className='rounded-xl' alt="" />
     
        ))}
      </div>

   

    </Wrapper>
  )
}

export default Results
