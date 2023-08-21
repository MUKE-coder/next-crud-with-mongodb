export default async function getCourses() {
  try {
    const response = await fetch("http://localhost:3000/api/courses", {
      cache: "no-store",
    });
    const courses = await response.json();
    return courses.data;
  } catch (error) {
    console.log(error);
  }
}
