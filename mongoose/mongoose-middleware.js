import mongoose from "mongoose";

await mongoose.connect("URL/database-name");
mongoose.set("debug", true);

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    age: Number,
    //   createdAt: { type: Date, default: Date.now },
    //   updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

//we will use middleware.
// userSchema.pre(["updateOne", "findOneAndUpdate"], function (next) {
//   console.log("🔥 Middleware triggered!");
//   this.set({ updatedAt: Date.now() });
//   next();
// });

const User = mongoose.model("User", userSchema);

// check if doc exists
const found = await User.findOne({ name: "Chetan Rana" });
console.log("📄 Found user:", found);

const result = await User.updateOne(
  { name: "Chetan Rana" },
  { $set: { age: 55 } }
);

console.log("✅ Update result:", result);

await mongoose.connection.close();
