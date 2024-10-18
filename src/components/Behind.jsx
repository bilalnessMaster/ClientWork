import React, { useEffect, useRef, useState } from 'react';
import CardVideo from './CardVideo';
import Wrapper from './Wrapper';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
    { id: 1 ,video  : "https://drive.google.com/file/d/1ebYlMKjsPmoJjOAqF3WStNT5ZUoEpbMT/preview" },
    { id: 2  ,video  : "https://drive.google.com/file/d/1ZBc5b1ABtqZdxuZ0xON0JNrViqyQsT67/preview"},
    { id: 3, video : 'https://drive.google.com/file/d/1MVUxqJE_xCvLtoGl0_8Jx6p-BpOf2stD/preview' },
    { id: 4, video : 'https://drive.google.com/file/d/1tCGAMLCezJunreyCiYs38pAi274RGrPY/preview' },
    { id: 5, video : 'https://drive.google.com/file/d/1ZzsgaEqXv9X1pb4MjXdkmqX_oGypikpx/preview' },
    { id: 6, video : 'https://drive.google.com/file/d/1WBW6uQO5mJfX8pdEdLGil0gexhjQlML7/preview' },
    { id: 7, video : 'https://drive.google.com/file/d/14KVADc6RjqxZvc_wqcHtKKdhTid3-naD/preview' },
    { id: 8, video : 'https://drive.google.com/file/d/1VT41YLRdc3BYobZlos1__vbP35JN0OCF/preview' },
    

];
const Behind = () => {
    const swiperRef = useRef(null);
  return (
    <>
       <Wrapper className={'bg-gray-50 py-8 border border-gray-300/40  mt-14 lg:mt-44  rounded-lg'}>
        <div className='w-full flex flex-col-reverse gap-6 md:gap-0 md:flex-row justify-center items-center md:justify-between md:items-start 2xl:items-center px-9'>
          
            <p className='text-center md:text-end w-[330px] md:w-[500px] text-xl lg:text-2xl font-Almarai text-gray-400 '>
            "من خلال المحتوى الذي أقدمه خلف الكواليس، أشارك الجمهور الرحلة الحقيقية وراء المشاريع والعمل اليومي. أسلط الضوء على الجهود المبذولة، التحديات التي نواجهها، والخطوات الصغيرة التي تقود إلى النجاح."
            </p>
            <h1 className='text-center w-[350px]  text-6xl  xl:text-9xl font-bold md:text-end  text-primary md:w-[500px] font-Almarai'>
            خلف الكواليس
            </h1>
        </div>

        <div className="w-full relative mt-16 ">
  {/* Custom Navigation Buttons */}
  <div className="">
    <button
      className="absolute z-30 md:-left-7 left-0  top-1/2"
      onClick={() => swiperRef.current.swiper.slidePrev()}
    >
      <i className="ri-arrow-left-s-line text-3xl md:text-5xl p-3 bg-primary rounded-full text-white"></i>
    </button>
    <button
      className="absolute z-40 top-1/2 md:-right-7 right-0"
      onClick={() => swiperRef.current.swiper.slideNext()}
    >
      <i className="ri-arrow-right-s-line text-3xl md:text-5xl p-3 bg-primary rounded-full text-white"></i>
    </button>
  </div>

  <Swiper
    ref={swiperRef}
    slidesPerView={1}
    centeredSlides={false}
    spaceBetween={5}
    navigation={false} // Disable default navigation
    modules={[Pagination, Navigation]}
    breakpoints={{
      640: {
        slidesPerView: 1,
        spaceBetween: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 1,
      },
      1168: {
        slidesPerView: 3,
        spaceBetween: 1,
      },
      1561: {
        slidesPerView: 4,
        spaceBetween: 2,
      },
      1573: {
        slidesPerView: 4,
        spaceBetween: 5,
      },
      1732: {
        slidesPerView: 4,
        spaceBetween: 5,
      },
      1846: {
        slidesPerView: 4,
        spaceBetween: 1,
      },
    }}
  >
    {data.map((item) => (
      <SwiperSlide key={item.id} className="flex justify-center items-center">
        <div>
          <CardVideo video={item.video} />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  </div>
    </Wrapper>
    

    </>
  )
}

export default Behind
