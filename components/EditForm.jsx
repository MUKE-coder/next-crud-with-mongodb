"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function EditForm({ course }) {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(course.title);
  const [newDescription, setNewDescription] = useState(course.description);
  async function handleSubmit(e) {
    e.preventDefault();
    const newCourse = {
      newTitle,
      newDescription,
    };
    const response = await fetch(
      `http://localhost:3000/api/courses/${course._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCourse),
      }
    );
    if (response.status == 201) {
      router.push("/");
      router.refresh();
    }
    console.log(newCourse);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Course title"
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
      />
      <input
        type="text"
        placeholder="Enter Course description"
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
      />
      <button type="submit">Update Course</button>
    </form>
  );
}
