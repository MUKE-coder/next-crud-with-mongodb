"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    const newCourse = {
      title,
      description,
    };
    const response = await fetch("http://localhost:3000/api/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourse),
    });
    if (response.status == 201) {
      router.push("/");
    }
    console.log(newCourse);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Course title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="Enter Course description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button type="submit">Add Course</button>
    </form>
  );
}
