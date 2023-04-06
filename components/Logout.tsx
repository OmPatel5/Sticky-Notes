"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

function Logout() {
  return (
    <div className='absolute top-5	right-5'>
      <button onClick={() => signOut()} className='text-white font-bold text-2xl'>Log out</button>

    </div>
  )
}

export default Logout