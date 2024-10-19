import React from 'react'
import Wrapper from './Wrapper'
import { img } from 'framer-motion/client'
import Image from './Image'
const Data = [
    {id : 1, img : "/1.jpg"},
    {id : 2, img : "/2.jpg"},
    {id : 3, img : "/3.jpg"},
    {id : 4, img : "/4.jpg"},
    {id : 5, img : "/5.jpg"},
    {id : 6, img : "/6.jpg"},
    {id : 7, img : "/7.jpg"},
    {id : 8, img : "/8.jpg"},

]
const Design = () => {
  return (
    <>
        <Wrapper className={'  bg-gray-50 py-8 border border-gray-300/40  mt-14 lg:mt-44 rounded-lg'}> 
        <div className='w-full flex flex-col-reverse gap-6 md:gap-0 md:flex-row justify-center items-center md:justify-between md:items-start 2xl:items-center px-4'>
          
            <p className='text-center md:text-end w-[330px] md:w-[500px] text-xl lg:text-2xl font-Almarai text-gray-400 '>
            "تصميم المحتوى الذي أقدمه يعكس الحرص على الجمع بين الإبداع والجمالية الوظيفية. أستخدم تصاميم جذابة."
            </p>
            <h1 className='text-center w-[350px]  text-6xl  xl:text-9xl font-bold md:text-end  text-primary md:w-[500px] font-Almarai'>
            تصميم 
            </h1>
        </div>
        <div className='flex items-start justify-start gap-2 mt-16'>
            <div className='grid grid-cols-1 gap-2 items-start justify-start'>
                {
                    Data.slice(0,4).map((item) => (
                        <Image key={item.id} img={item.img} />
                    ))
                }

            </div>
            <div className='grid grid-cols-1 gap-2 '>
            {
                    Data.slice(4,8).map((item) => (
                        <Image key={item.id} img={item.img} />
                    ))
                }
            </div>
        </div>
        
    </Wrapper>
    </>
  )
}

export default Design
