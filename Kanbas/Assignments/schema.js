import mongoose from "mongoose";
const AssignmentSchema = new mongoose.Schema(
  {
    title: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    points: String,
    description: String,
    startDate: String,
    endDate: String,
    available: String,
    due: String,
  },
  { collection: "assignments" }
);
export default AssignmentSchema;