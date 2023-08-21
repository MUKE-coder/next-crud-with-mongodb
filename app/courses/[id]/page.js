import getSingleCourse from "@/app/controllers/getSingleCourse";
import React from "react";

export default async function ViewCourse({ params: { id } }) {
  const course = await getSingleCourse(id);
  return (
    <div className="detail-page">
      <h1>Course Detail Page</h1>
      <hr />
      <div className="course-detail">
        <h2>{course.title}</h2>
        <p>{course.description}</p>
      </div>
    </div>
  );
}
