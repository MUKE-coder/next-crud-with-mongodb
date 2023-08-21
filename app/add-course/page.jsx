import React from "react";

export default function AddCourse() {
  return (
    <form>
      <input type="text" placeholder="Enter Course name" />
      <input type="text" placeholder="Enter Course description" />
      <button type="submit">Add Course</button>
    </form>
  );
}
