import Image from "next/image";
import { courseList } from "@/lib/constants";
import { ICourse } from "@/lib/declarations";

const Banner = () => {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row text-[#0a2b1e] p-2.5 lg:px-5">
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2 w-full"
      >
        <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]"></div>
        <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem]"></div>
      </div>

      <div className="pt-5 md:pt-20 pb-10 space-y-8 px-5 md:px-4 xl:px-0 flex-1 -mt-[200px] md:-mt-[400px] lg:mt-0 z-10 border lg:border-none border-[#007FEC] bg-white/80 shadow lg:shadow-none mx-4 lg:mx-0 rounded-xl lg:bg-transparent">
        <h1 className="text-blue-900 text-4xl leading-2 text-center font-bold sm:text-5xl md:text-5xl lg:w-auto lg:text-left xl:text-6xl">
          Here is Your Next Big Thing in
          <br className="lg:block hidden" />{" "}
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#007FEC] to-[#00D9E9]">
            Your Career
          </span>
          .
        </h1>

        <p className="w-11/12 text-gray-600 font-medium text-center lg:text-left">
          Mega Techs IT Consulting Solutions INC is now accepting enrollments
          for various IT courses! Our offerings are comprehensive and include
          courses along with job placement support in the following areas:
        </p>

        <ul className="flex flex-col gap-y-2 text-base md:text-lg">
          {courseList.map((course: ICourse, index: number) => (
            <li key={index} className="flex gap-2 items-center line-clamp-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5 min-w-5 fill-green-600"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="line-clamp-2">{course.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:flex items-center justify-center flex-1 overflow-hidden ml-2.5 md:ml-0">
        <Image
          width={320}
          height={280}
          src="https://utfs.io/f/f0bae5b3-be4c-4a67-97d5-4f6c6fb02e88-awg4uk.svg"
          alt="hero image"
          className="w-[calc(100%-30px)] h-[calc(100%-30px)] animate-[spin_180s_infinite]"
        />
      </div>
    </section>
  );
};

export default Banner;
