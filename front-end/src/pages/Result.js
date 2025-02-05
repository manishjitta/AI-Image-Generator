import React, { useContext, useState } from 'react';
import sample_img_1 from '../assets/sample_img_1.png';
import { AppContext } from '../context/AppContext';
import {motion} from 'framer-motion'
import { toast } from 'react-toastify';

function Result() {
  
    const [image, setImage] = useState(sample_img_1)
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const [loading, setLoading] = useState(false)
    const [userInput, setUserInput] = useState('')

    const {generateImage} = useContext(AppContext)

    const onSubmitHandler = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        if (userInput) {
          const image = await generateImage(userInput);
          if (image) {
            setIsImageLoaded(true);
            setImage(image);
          }
        }
      } catch (error) {
        toast.error('Failed to generate image. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    return (
    <motion.div 
      initial={{opacity:0.2, y:100}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}

      className='flex flex-col min-h-[90vh] justify-center items-center'>
      <div>
        <div className='relative'>
          <img src={image} className='max-w-sm rounded' alt='Sample' />
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`} />
        </div>
        {loading && <p className=''>Loading...</p>}
      </div>
      
      {!isImageLoaded 
        ?
        <div className='flex bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full w-[600px] max-w-full'>
          <input
            type='text'
            placeholder='Describe what you want to generate'
            className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20'
            onChange={(e) => {setUserInput(e.target.value)}}
            value = {userInput}
          />
          <button type='submit' onClick={onSubmitHandler} className='bg-zinc-900 sm:px-12 max-sm:px-5 py-3 rounded-full text-white'>
            Generate
          </button>
        </div>
        :
        <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
          <p onClick={() => {setIsImageLoaded(false)}} className='bg-transparent border
           border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
          <a href={image} download className='bg-zinc-900 text-white px-10 py-3 rounded-full cursor-pointer'>Download</a>
        </div>
      }

    </motion.div>
  );
}

export default Result;