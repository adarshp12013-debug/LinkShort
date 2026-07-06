/*
Name: Navbar.js
Date: 4 July 2026
Description: Navbar for the URL Shortener app
*/

import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className='w-full px-3 py-3 md:px-6 md:py-4 bg-blue-400 text-white flex justify-between items-center'>
            <div className='text-md md:text-xl font-semibold'>
                <Link href='/'>LinkShort</Link>
            </div>

            <ul className='text-sm md:text-md flex justify-center items-center gap-3 md:gap-6'>
                <li><Link className='hidden lg:block' href='/'>Home</Link></li>
                <li><Link href='/shorten'>Shorten</Link></li>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
                <li className='hidden md:flex items-center justify-center gap-2'>
                    <Link href='/shorten'><button className='px-2 py-1 bg-blue-700 rounded-lg shadow-3 cursor-pointer'>Try Now</button></Link>
                    <Link href='/github'><button className='px-2 p-1 bg-blue-700 rounded-lg shadow-3 cursor-pointer'>Github</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
