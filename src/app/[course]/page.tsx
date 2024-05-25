import { FC } from "react";
import { courseList, lessionList } from "@/lib/constants";
import { notFound } from "next/navigation";
import Image from "next/image";

export function generateStaticParams() {
  return courseList.map((course) => ({
    course: String(course.id),
  }));
}

type CoursePageProps = {
  params: {
    course: string;
  };
};

const CoursePage: FC<CoursePageProps> = ({ params: { course } }) => {
  const courseInfo = courseList.filter((c) => c.id === Number(course))[0];
  if (!courseInfo) notFound();
  return (
    <main className="flex min-h-screen flex-col w-full max-w-[1440px] mx-auto">
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-2 lg:mt-4 px-4 lg:px-5 w-full">
        <div className="w-full col-span-2">
          <div className="bg-gray-100 aspect-square w-full p-2">
            <Image
              width={500}
              height={500}
              className="h-full w-full"
              src={courseInfo.image}
              alt={courseInfo.name}
            />
          </div>
        </div>

        <div className="space-y-6 col-span-3">
          <h1 className="text-2xl font-semibold text-blue-900">
            {courseInfo.name}
          </h1>
          <p className="text-base lg:text-lg text-gray-600 line-clamp-5">
            {courseInfo.description}
          </p>
          <ul className="flex gap-4 font-medium text-orange-700">
            <li className="flex gap-2.5 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
              <span>{courseInfo.lession} Lessions</span>
            </li>
            <li className="flex gap-2.5 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>

              <span>{courseInfo.enrolled} Students Enrolled</span>
            </li>
          </ul>
          <div className="w-full divide-y divide-slate-200 rounded capitalize mt-4">
            <h3 className="text-lg mb-3 font-medium text-blue-500">
              Course Curriculum
            </h3>
            {lessionList.map((lession, lessionIndx) => (
              <details
                key={lessionIndx}
                className="group p-4"
                open={lessionIndx == 0}
              >
                <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  {`Lession ${lessionIndx + 1} - ${lession.name}`}
                </summary>
                <ul className="mt-2 ml-14 font-normal list-disc">
                  {lession.lessons.map((l) => (
                    <li
                      key={l}
                      className="p-0.5 hover:bg-gray-100 cursor-pointer"
                    >
                      {l}
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CoursePage;
