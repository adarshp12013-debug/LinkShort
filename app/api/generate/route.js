/*
Name: route.js
Date: 4 July 2026
Description: Handling Generate request for the URL Shortener app
*/

import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    const client = await clientPromise;
    const db = client.db('linkshort')
    const collection = db.collection('url');

    // Body of request
    const body = await request.json();

    const existing = await collection.findOne({
        shortUrl: body.shortUrl,
    });

    // Checking if preferred URL exists
    if (existing) {
        // Returning Error
        return Response.json({ success: false, error: true, message: 'Preferred URL text already exists' });
    }

    // Inserting the new pair
    await collection.insertOne({
        url: body.url,
        shortUrl: body.shortUrl,
    });

    // Returning Success
    return Response.json({ success: true, error: false, message: 'URL generated successfully' });
}