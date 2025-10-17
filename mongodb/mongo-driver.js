import { MongoClient } from "mongodb";

const client = new MongoClient("url monodb");

await client.connect();

const db = client.db("mongodb_nodejs");
const userCollections = db.collection("users");

// await userCollections.insertOne({ name: "Chetan Rana", age: 21 });

// await userCollections.insertMany([
//   { name: "pawan k.c", age: 23 },
//   { name: "Ram Shah", age: 32 },
//   { name: "Chetan Rana", age: 22 },
// ]);

//Read
// const userCursor = await userCollections.find().toArray();
// console.log(userCursor);

// const user = await userCollections.findOne({ name: "pawan k.c" });
// console.log(user);
// console.log(user._id.toHexString());

//update
// await userCollections.updateOne({ name: "Ram Shah" }, { $set: { age: 30 } });
// await userCollections.updateMany(
//   { name: "Chetan Rana" },
//   { $set: { age: 20 } }
// );

//delete
await userCollections.deleteMany({ name: "Chetan Rana" });
