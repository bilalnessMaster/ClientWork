import React from 'react'
import Wrapper from './Wrapper'
const Data = [
    {id : 1, img : "/12.png"},
    {id : 2, img : "/13.png"},
    {id : 3, img : "/14.png"},
    {id : 4, img : "/15.png"},
    {id : 5, img : "/16.png"},
    {id : 6, img : "/17.png"},
    {id : 7, img : "/18.png"},
    {id : 8, img : "/19.jpg"},
    {id : 9, img : "/20.jpg"},
    {id : 10, img : "/21.jpg"},
    {id : 11, img : "/22.jpg"},
    {id : 12, img : "/23.jpg"},
    {id : 13, img : "/24.jpg"},
    {id : 14, img : "/25.jpg"},
    {id : 15, img : "/26.jpg"},
    {id : 16, img : "/27.jpg"},
    {id : 17, img : "/28.jpg"},
    {id : 18, img : "/29.jpg"},
    {id : 19, img : "/30.jpg"},
    {id : 20, img : "/31.jpg"},
    {id : 21, img : "/32.jpg"},
    {id : 22, img : "/33.jpg"},
    {id : 23, img : "/34.jpg"},
    {id : 24, img : "/35.jpg"},
                    
]
const Photos = () => {
  return (
    <>
        <Wrapper className={'bg-gray-50  mt-14 lg:mt-44 pt-8 border border-gray-300/40 rounded-lg '}>
        <div className='w-full flex flex-col-reverse gap-6 md:gap-0 md:flex-row justify-center items-center md:justify-between md:items-start 2xl:items-center  px-4'>
          
            <p className='text-center md:text-end w-[300px] md:w-[500px] text-xl lg:text-2xl font-Almarai text-gray-400 '>
            المحتوى الذي أقدمه يعتمد على التصوير الاحترافي، حيث أحرص على استخدام تقنيات متقدمة وزوايا مبتكرة لتقديم صور عالية الجودة تعكس التفاصيل بدقة وجمال            </p>
            <h1 className='text-center w-[350px]  text-6xl  xl:text-9xl font-bold md:text-end  text-primary md:w-[500px] font-Almarai'>
            تصوير
احترافي          
            </h1>
        </div>
        <div className='flex items-start justify-start gap-2 mt-28 '>
            <div className='grid grid-cols-1 gap-2 items-start justify-start'>
                {
                    Data.slice(0,12).map((item) => (
                            <img src={item.img} key={item.id} alt="" />
                    ))
                }

            </div>
            <div className='grid grid-cols-1 gap-2 '>
            {
                    Data.slice(12,24).map((item) => (
                            <img src={item.img} key={item.id} alt="" />
                    ))
                }
            </div>
        </div>
        
    </Wrapper>
    </>
  )
}

export default Photos
