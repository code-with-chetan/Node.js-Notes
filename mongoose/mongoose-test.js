import mongoose from "mongoose";

//step:1 connect to the mongodb server.
try {
  await mongoose.connect("URL/DATABASE name");
  // mongoose.set("debug", true);
} catch (error) {
  console.error(error);
  process.exit();
}

//step2:create a schema
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true, min: 15 },
  createdAt: { type: Date, default: Date.now() },
});

//step3:creating a model
const User = mongoose.model("user", userSchema);

// await user.create({ name: "Chetan Rana", email: "chetan@gmail.com", age: 22 });
const userData = [
  { name: "Chetan rana", email: "chetan450@gmail.com", age: 20 },
  { name: "pawan k.c", email: "pawan@gmail.com", age: 21 },
  { name: "Birendra Shahi", email: "birendra@gmail.com", age: 22 },
];

//?Insert Operation.
// await User.insertMany(userData);

//?Read Operation.
// const users = await User.find();
// const users = await User.find({ age: { $gt: 20 } });
// console.log(users);

//?Update Operation.
// const userUpdate = await User.updateOne(
//   { email: "birendra@gmail.com" },
//   { $set: { age: 30 } }
// );
// console.log(userUpdate);

//?Delete Operation.
const deleteUser = await User.deleteMany({ email: "birendra@gmail.com" });
console.log(deleteUser);

await mongoose.connection.close();
