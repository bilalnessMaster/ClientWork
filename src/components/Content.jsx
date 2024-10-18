import React, { useEffect, useRef, useState } from 'react';
import CardVideo from './CardVideo';
import Wrapper from './Wrapper';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const data = [
    { id: 1 ,video  : "https://drive.google.com/file/d/1UcMt7MR5PvG9icfeRIjnQU58_Eim1Yhn/preview" },
    { id: 2  ,video  : "https://drive.google.com/file/d/1q6IOtZ_YNCPNpvDA0INZj1Kq9gyH2f7x/preview"},
    { id: 3, video : 'https://drive.google.com/file/d/19Qy8aZl9CbDho11XFhhJPS4qNdmK-WXi/preview' },
    { id: 4, video : 'https://drive.google.com/file/d/1RyenvyrGNcuA_z6FLH_3zXlYBy2NoRTY/preview' },
    { id: 5, video : 'https://drive.google.com/file/d/1fxV56oOTrfwlz0QVbTJkYQgVj8hyldyD/preview' },
    { id: 6, video : 'https://drive.google.com/file/d/1KPvnxOMQt2iyDUNN-iu-j98K8gJ4qogj/preview' },
    { id: 7, video : 'https://drive.google.com/file/d/19d1PP39oimg9g1P7_Uuuq3akJd60tjsB/preview' },
    { id: 8, video : 'https://drive.google.com/file/d/1_wrfRIfD8a6WXMcJqomsCuGjm0GvC3Cd/preview' },
    { id: 9, video : 'https://drive.google.com/file/d/1z0HI12f9qL0Vmup_a1XKrDSj-4UOn5kE/preview' },
    { id: 10, video : 'https://drive.google.com/file/d/1xvMe7lK6XzUN1zuZRBmiC5OTeDCZLLgn/preview' },
    { id: 12, video : 'https://drive.google.com/file/d/1fq5CEoDwDBDXPmCDeM3yEnFhy5LvNEZb/preview' },
,
];

const Content = () => {
  
  const swiperRef = useRef(null);
  return (
   <>
    <Wrapper className={' bg-gray-50 py-8 border border-gray-300/40 mt-44 rounded-lg'}>
        <div className='w-full flex flex-col-reverse gap-6 md:gap-0 md:flex-row justify-center items-center md:justify-between md:items-start 2xl:items-center  ' >
          
            <p className='text-center md:text-end w-[360px] md:w-[500px] text-xl lg:text-2xl font-Almarai text-gray-400 '>
            محتواي يركز على تقديم قيمة حقيقية للجمهور من خلال تسليط الضوء على مواضيع رياضية وثقافية مهمة، بأسلوب يجمع بين الفائدة والترفيه. أحرص على أن يكون لكل ما أنشره هدف واضح سواء كان نشر الوعي.
            </p>
            <h1 className='text-center  w-[350px]  text-6xl  xl:text-9xl font-bold md:text-end  text-primary md:w-[500px] font-Almarai'>
            محتوى
            هادف
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
  );
};

export default Content;
