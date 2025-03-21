'use client';

import { useSession } from 'next-auth/react'
import React from 'react'

function Navbar() {
    const {data:session}= useSession();
    console.log('Data session',session);
    return (
        <div className='w-full p-8 flex flex-col md:flex-row bg-violet-300 justify-between'>
            <h1 className=' font-bold text-white'>Commentary App</h1>
        </div>
    )
}

export default Navbar