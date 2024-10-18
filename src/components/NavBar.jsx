import React from 'react'
import logo from '../assets/logo.png'
import { motion } from 'framer-motion'
const NavBar = () => {
  return (
    <motion.header initial={{opacity:0,y :-50}} animate={{opacity:1, y :0}} transition={{delay:1, duration :1,ease: [0, 0.71, 0.2, 1.01] }} className='w-full flex justify-between items-center px-5 mt-5'>
 
        <div>
            <img src={logo} className='h-14' alt="" />
        </div>
        <a href="#contact" className='px-4 font-semibold text-2xl py-2 rounded-full items-center justify-center flex bg-primary font-Almarai' >تواصل معنا</a>
  
    </motion.header>
  )
}

export default NavBar
