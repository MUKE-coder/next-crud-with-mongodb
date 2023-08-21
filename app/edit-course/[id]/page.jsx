import getSingleCourse from "@/app/controllers/getSingleCourse";
import EditForm from "@/components/EditForm";
import React from "react";

export default async function EditCourse({ params: { id } }) {
  const course = await getSingleCourse(id);
  return (
    <>
      <EditForm course={course} />
    </>
  );
}
