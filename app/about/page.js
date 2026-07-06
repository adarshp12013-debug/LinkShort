/*
Name: page.js
Date: 4 July 2026
Description: About page of the URL Shortener app
*/

import React from 'react'

function About() {
  return (
    <main>
      <section className='max-w-lg mx-auto px-3 py-10 flex flex-col gap-5 text-center'>
        <h2 className='text-2xl font-semibold'>About</h2>

        <p>
          This is the <span className='font-semibold'>LinkShort</span> app created for shortening your links. We don't need you to log in. This service is created for you to make shorter links faster. This is the best link shortener in the market.
        </p>
      </section>
    </main>
  )
}

export default About
