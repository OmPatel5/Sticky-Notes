'use client'

import { signIn } from 'next-auth/react'
import React from 'react'

import Image from 'next/image'

function Login() {
  return (
    <div className='bg-gray-700 h-screen flex flex-col items-center justify-center text-center'>
        <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Microsoft_Sticky_Notes_icon.png"
            width={300}
            height={2}
            alt="logo"
            className='animate-spin'
        />
        
        <button className={"text-white font-bold text-3xl animate-bounce mt-10"} onClick={() => signIn('google')}>sign in to use notes!</button>
    </div>
  )
}

export default Login

