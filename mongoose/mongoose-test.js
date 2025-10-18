import mongoose from "mongoose";

//step:1 connect to the mongodb server.
try {
  await mongoose.connect("mongodb://localhost:27017/mongoose-database");
  mongoose.set("debug", true);
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
const user = mongoose.model("user", userSchema);

await user.create({ name: "Chetan Rana", email: "chetan@gmail.com", age: 22 });
await mongoose.connection.close();
