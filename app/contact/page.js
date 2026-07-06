/*
Name: page.js
Date: 4 July 2026
Description: About page of the URL Shortener app
*/

import React from 'react'

function Contact() {
	const contact = [];

	return (
		<main>
			<section className='max-w-lg mx-auto px-3 py-10 flex flex-col gap-5 text-center'>
				<h2 className='text-2xl font-semibold mb-4'>Contact</h2>

				<div>
					<h2 className='text-xl'><span className='font-semibold'>LinkShort</span> Contacts:</h2>

					<ul className='flex flex-col gap-1 m-3'>
						{
							contact.length>0
								? contact.map((item, index) => {
									return <li key={index}>{item}</li>
								})
								: <li className='font-light'>No Contact Found!</li>
						}
					</ul>
				</div>
			</section>
		</main>
	)
}

export default Contact
