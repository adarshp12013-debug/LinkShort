/*
Name: page.js
Date: 4 July 2026
Description: Shorten page of the URL Shortener app
*/

'use client'

import Link from 'next/link';
import { useState } from 'react';

function Shorten() {
    // States for URL, Preferred text and Generated
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [generated, setGenerated] = useState(false);

    // Function for generating the short URL
    function generate() {
        const headers = new Headers();
        headers.append('Content-type', 'application/json');

        const raw = JSON.stringify({
            url: url,
            shortUrl: shortUrl,
        });

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: raw,
            redirect: 'follow',
        };

        fetch('/api/generate', requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setUrl('');
                setShortUrl('');
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
                console.log(result);
                alert(result.message);
            })
            .catch((error) => console.log(error));
    }

    return (
        <div className='w-full md:max-w-lg md:mx-auto my-16 px-4 py-2 rounded-lg'>
            <h1 className='mb-5 text-lg md:text-xl lg:text-2xl font-semibold'>Generate your Short URLs</h1>

            <div className="mb-5 flex flex-col gap-3">
                <input className='p-2 bg-blue-100 rounded-lg focus:outline-blue-500' value={url} type="text" onChange={(e) => setUrl(e.target.value)} placeholder='Enter your URL' />
                <input className='p-2 bg-blue-100 rounded-lg focus:outline-blue-500' value={shortUrl} type="text" onChange={(e) => setShortUrl(e.target.value)} placeholder='Enter your preferred short URL text' />
            </div>

            <button onClick={() => generate()} className='w-full text-md md:text-lg lg:text-xl mb-5 text-white px-2 py-1 bg-blue-700 rounded-lg shadow-3 cursor-pointer'>Generate</button>

            {
                // Showing the link when generated
                generated
                && <div className=''>
                    <h2 className='text-lg font-light'>Your Link:</h2>
                    <Link target='_blank' href={generated}><code>{generated}</code></Link>
                </div>
            }
        </div>
    )
}

export default Shorten
