/*
Name: page.js
Date: 5 July 2026
Description: Redirecting to the actual URL from the short URL
*/

import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
    const client = await clientPromise;
    const db = client.db('linkshort')
    const collection = db.collection('url');

    // Obtaining the short URL text
    const { shortUrl } = await params;

    // Obtaining the object of the short URL text
    const existing = await collection.findOne({
        shortUrl: shortUrl,
    });

    // Checking if it exists
    if (existing) {
        redirect(existing.url);
    } else {
        redirect(process.env.NEXT_PUBLIC_HOST);
    }
}