import { courseList } from "@/lib/constants";
import CourseCard from "./course-card";
import { ICourse } from "@/lib/declarations";
const CourseSection = () => {
  return (
    <section id="courses" className="my-8 lg:px-5 space-y-2.5">
      <div className="flex flex-col gap-y-2 py-2.5 px-5 lg:px-2 lg:py-2.5 border-b">
        <h2 className="text-2xl font-bold uppercase text-blue-900">Courses</h2>
        <h3 className="text-base lg:text-lg capitalize font-medium">
          Our offerings are comprehensive and include courses along with job
          placement support in the following areas
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 md:px-4 xl:p-2.5">
        {courseList.map((course: ICourse) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CourseSection;
