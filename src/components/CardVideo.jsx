import React from 'react'

const CardVideo = ({id , video }) => {
  return (
    <article className='relative min-w-[300px] w-[370px]  h-[700px] rounded-xl overflow-hidden border-2 border-black/45'>
     <iframe 
      src={video} 
      width="370px" 
      height="700px" 
      allow="autoplay"
      frameBorder="0" 
      allowFullScreen
      className='rounded-xl object-cover shodaw drop-shadow-2xl '
      ></iframe>
    </article>
  )
}

export default CardVideo
