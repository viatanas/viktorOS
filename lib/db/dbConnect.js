import mongoose from "mongoose";

async function dbConnect() {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.log(err));
}
export default dbConnect;
