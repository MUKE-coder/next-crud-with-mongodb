import { Schema, model, models } from "mongoose";

const courseSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Course = models.Course || model("Course", courseSchema);
export default Course;
