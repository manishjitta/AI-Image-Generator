import React from 'react'
import logo from '../assets/logo.svg'
import facebook_icon from '../assets/facebook_icon.svg'
import instagram_icon from '../assets/instagram_icon.svg'
import twitter_icon from '../assets/twitter_icon.svg'
import { useNavigate } from 'react-router-dom';

function Footer() {

  const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        
          <img src = {logo} alt='logo' width={150} onClick={() => navigate('/')} className='cursor-pointer'/>
          <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>
            Copyright @imagify.com | All right reserved.</p>
          <div className='flex gap-2.5'>
            <img src={facebook_icon} width={35} alt='facebook_icon'/>
            <img src={instagram_icon} width={35} alt='instagram_icon'/>
            <img src={twitter_icon} width={35} alt='twitter_icon'/>
          </div>

    </div>
  )
}

export default Footer