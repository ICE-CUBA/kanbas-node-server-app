import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    course: String,
  },
  { collection: "modules" }
);
export default moduleSchema;
