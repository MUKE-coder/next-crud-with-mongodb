import React from 'react'

export default function EditForm() {
  return (
    <form>
      <input type="text" placeholder="Enter Course name" />
      <input type="text" placeholder="Enter Course description" />
      <button type="submit">Update Course</button>
    </form>
  )
}
