import {React, useContext } from 'react'
import {motion} from 'framer-motion'
import star_icon from '../assets/star_icon.svg'
import star_group from '../assets/star_group.png'
import sample_img_1 from '../assets/sample_img_1.png'
import sample_img_2 from '../assets/sample_img_2.png'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

function Header() {

  const navigate = useNavigate()
  const {setShowLogin, user, showLogin} = useContext(AppContext)


  const onClickHandler = () => {
    if(user){
      navigate('/result')
    }
    else{
      setShowLogin(true)
    }
  }


  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20' 
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}>
        <motion.div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'
        initial={{opacity:0, y:-20}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.2, duration:0.8}}
        >
            <p>Best text to image generator</p>
            <img src={star_icon} alt='star_icon'/>
        </motion.div>
        
        <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[690px] mx-auto mt-10 text-center'>Turn text to 
          <span className='text-blue-500'
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.4, duration:2}}
          > image, </span>in seconds.</motion.h1>

        <motion.p className='text-center max-w-xl mx-auto mt-5'
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.6, duration:0.8}}
        >Unleash your creativity with AI. 
          Turn your imagination into visual art in seconds – just type, and watch the magic happen.</motion.p>

        {!showLogin && <motion.button className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full' onClick={onClickHandler}
          whileHover={{scale: 1.05}}
          whileTap={{scale:0.95}}
          initial={{opacity:0}}
          animate={{opacity: 1}}
          transition={{default: {duration: 0.5}, opacity : {delay: 0, duration: 1}}}>
           Generate Images
          <img className='h-6' src={star_group} alt='star_group'/>
        </motion.button>}

        <motion.div className='flex flex-warp justify-center mt-16 gap-3'
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{delay: 1, duration: 1}}>
          {Array(6).fill('').map((item, idx) => (
            <motion.img 
            whileHover={{scale: 1.05, duration: 0.1}}
            className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' 
            src={ idx % 2 === 0 ? sample_img_1 : sample_img_2} alt='image' key={idx} width={70}/>
          ))}
        </motion.div>
        <motion.p 
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{delay: 1.2, duration: 0.8}}
        className='mt-2 text-neutral-600'>Generated images from imagify</motion.p>


    </motion.div>
  )
}

export default Header