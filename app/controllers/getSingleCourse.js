export default async function getSingleCourse(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/courses/${id}`, {
      cache: "no-store",
    });
    const course = await response.json();
    return course.data;
  } catch (error) {
    console.log(error);
  }
}
