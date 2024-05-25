import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  course: {
    id: number;
    name: string;
    image: string;
    description: string;
  };
}
const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="grid grid-cols-3 shadow-sm items-start justify-center rounded-md p-4 gap-2.5 bg-gradient-to-t from-slate-100 to-slate-200 cursor-default">
      <div className="aspect-square col-span-1">
        <Image
          width={96}
          height={96}
          className="mx-auto object-contain w-auto h-auto aspect-square"
          src={course.image}
          alt="illustration"
          loading="lazy"
        />
      </div>
      <div className="col-span-2 flex flex-col gap-y-2">
        <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-800">
          {course.name}
        </h3>
        <p className="line-clamp-2">{course.description}</p>
        <Link
          href={`/${course.id}`}
          className="flex items-center justify-between group-hover:text-primary"
        >
          <span className="text-sm text-blue-400 font-semibold">Read more</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
