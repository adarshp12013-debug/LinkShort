/*
Name: mongodb.js
Date: 4 July 2026
Description: Connecting with MongoDB for the URL Shortener app
*/

// Reusable Connection for connecting with MongoDB
// Taken from https://www.codewithharry.com/blogpost/how-to-integrate-mongodb-into-your-nextjs-apps

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Add Mongo URI to .env.local");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;