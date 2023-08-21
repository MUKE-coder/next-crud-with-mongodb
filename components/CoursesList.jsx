import React from "react";
import DeleteBtn from "./DeleteBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
export default function CoursesList() {
  return (
    <div className="courses-list">
      <div className="course">
        <div className="course-details">
          <h2 className="course-title">HTML and Css Course</h2>
          <p className="description">This is the fundamental course</p>
        </div>
        <div className="course-actions">
          <DeleteBtn />
          <Link className="edit" href="/edit-course/123" title="Edit">
            <HiPencilAlt size={32} />
          </Link>
          <Link href="/courses/12" title="View ">
            <AiOutlineEye size={32} />
          </Link>
        </div>
      </div>
      <div className="course">
        <div className="course-details">
          <h2 className="course-title">HTML and Css Course</h2>
          <p className="description">This is the fundamental course</p>
        </div>
        <div className="course-actions">
          <DeleteBtn />
          <Link className="edit" href="/edit-course/123" title="Edit">
            <HiPencilAlt size={32} />
          </Link>
          <Link href="/courses/12" title="View ">
            <AiOutlineEye size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
}
