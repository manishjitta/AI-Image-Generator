import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import {motion} from 'framer-motion'
import profile_icon from '../assets/profile_icon.png'
import email_icon from '../assets/email_icon.svg'
import lock_icon from '../assets/lock_icon.svg'
import cross_icon from '../assets/cross_icon.svg'
import { AppContext } from '../context/AppContext'

function Login() {

    const [state, setState] = useState('Login')
    const {setShowLogin, backendUrl, setToken, setUser} = useContext(AppContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) =>{
        e.preventDefault();

        try{
            if(state === 'Login'){
                const {data} = await axios.post(backendUrl + '/api/user/login', {email, password})

                if(data.success){
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                }
                else{
                    toast.error(data.message)
                }
            }
            else{
                const {data} = await axios.post(backendUrl + '/api/user/register', {name, email, password})

                if(data.success){
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                }
                else{
                    toast.error(data.message)
                }
            }
        }
        catch(error){
            toast.error(error.message)
        }
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [])


    return (
        <div className='fixed top-0 left-0 bottom-0 right-0 backdrop-blur-sm bg-black/50 flex justify-center items-center z-50'>

            <motion.form 
                initial={{opacity:0.2, y:50}}
                transition={{duration: 0.5}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                
                onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-xl text-slate-500 text-center'>
                <h1 className='text-center text-2xl text-neutral-700 font-medium mb-2'>{state === 'Login' ? 'Log In' : 'Sign Up'}</h1>
                <p className='text-sm'>Welcome back! Please sign in to continue</p>

                {state === 'Sign Up' && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                    <img src={profile_icon} alt='' width={20}/>
                    <input type='text'  onChange={(e)=>setName(e.target.value)} value={name} className='outline-none text-sm' 
                    placeholder='Full Name' required/>
                </div>}

                <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                    <img src={email_icon} alt=''/>
                    <input type='email' onChange={(e)=>setEmail(e.target.value)} value={email} className='outline-none text-sm pl-' 
                    placeholder='Email id' required/>
                </div>

                <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                    <img src={lock_icon} alt='' />
                    <input type='password' onChange={(e)=>setPassword(e.target.value)} value={password} className='outline-none text-sm pl-1' 
                    placeholder='Password' required/>
                </div>

                <p className='text-sm text-blue-600 my-4 cursor-pointer text-left'>Forgot Password?</p>
                <button className='bg-blue-600 w-full text-white py-2 rounded-full'>{state === 'Login' ? 'Log In' : 'Create Account'}</button>
                
                {state === 'Login' ? (
                    <p className='mt-5 text-center'>
                        Don't have an account?{' '}
                        <span className='text-blue-600 cursor-pointer' onClick={() => setState('Sign Up')}>
                            Sign Up
                        </span>
                    </p>
                ) : (
                    <p className='mt-5 text-center'>
                        Already have an account?{' '}
                        <span className='text-blue-600 cursor-pointer' onClick={() => setState('Login')}>
                            Login
                        </span>
                    </p>
                )}
            
                <img src={cross_icon} alt='cross_icon' className='absolute top-5 right-5 cursor-pointer' onClick={() => {setShowLogin(false)}}/>
            </motion.form>

        </div>
    )
}

export default Login;