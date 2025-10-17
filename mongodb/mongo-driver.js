import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");

await client.connect();

const db = client.db("mongodb_nodejs");
const userCollections = db.collection("users");
userCollections.insertOne({ name: "Chetan Rana", age: 21 });
