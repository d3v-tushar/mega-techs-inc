"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <nav className="sticky top-0 shadow z-30 w-full bg-white/90 backdrop-blur-md px-0 lg:px-5">
      <div className="max-w-[1440px] mx-auto relative">
        <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
          <input
            type="checkbox"
            name="toggle_nav"
            id="toggle_nav"
            className="peer hidden"
          />

          <Link
            href="/"
            aria-label="logo"
            className="flex space-x-2 items-center ml-6 z-50"
          >
            <Image
              src="https://utfs.io/f/d0b384b2-67e6-4275-88d4-293ad45d6921-1zr02.webp"
              className="w-[120px] md:w-[150px]"
              alt="mega techs logo"
              width="200"
              height="50"
            />
          </Link>

          <label
            role="button"
            htmlFor="toggle_nav"
            aria-label="humburger"
            id="hamburger"
            className="peer-checked:hamburger relative w-10 h-auto p-2 z-[50] lg:hidden mr-6"
          >
            <div
              id="line"
              className="m-auto h-0.5 w-6 rounded bg-yellow-900 transition duration-300"
            ></div>
            <div
              id="line2"
              className="m-auto mt-2 h-0.5 w-6 rounded bg-yellow-900 transition duration-300"
            ></div>
          </label>
          {/* <div className="w-full px-6 flex justify-between lg:w-max md:px-0 z-40">
            <Link
              href="/"
              aria-label="logo"
              className="flex space-x-2 items-center"
            >
              <Image
                src="https://utfs.io/f/d0b384b2-67e6-4275-88d4-293ad45d6921-1zr02.webp"
                className="w-[120px] md:w-[150px]"
                alt="mega techs logo"
                width="200"
                height="50"
              />
            </Link>

            <div className="flex items-center lg:hidden max-h-10">
              <label
                role="button"
                htmlFor="toggle_nav"
                aria-label="humburger"
                id="hamburger"
                className="peer-checked:hamburger relative w-10 h-auto p-2 z-[50]"
              >
                <div
                  id="line"
                  className="m-auto h-0.5 w-6 rounded bg-yellow-900 transition duration-300"
                ></div>
                <div
                  id="line2"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-yellow-900 transition duration-300"
                ></div>
              </label>
            </div>
          </div> */}

          <label
            aria-label="toggle nav"
            role="button"
            htmlFor="toggle_nav"
            className="hidden lg:hidden peer-checked:block lg:peer-checked:hidden fixed w-full h-screen left-0 p-4 top-0 z-10 bg-blue-200 bg-opacity-30 backdrop-blur backdrop-filter"
          />
          <div className="absolute lg:static top-full right-1/2 translate-x-1/2 lg:translate-x-0 hidden peer-checked:flex flex-col lg:flex lg:flex-row justify-end z-30 items-center gap-y-6 p-6 rounded-md mt-1.5 bg-white lg:gap-y-0 lg:p-0 md:flex-nowrap lg:bg-transparent w-11/12 mx-auto lg:mx-0 lg:w-7/12 lg:ml-auto">
            <div className="text-gray-600 lg:pr-4 w-full">
              <ul
                className="tracking-wide font-medium  text-sm 
                        flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row w-full"
              >
                <li>
                  <label
                    role="button"
                    htmlFor="toggle_nav"
                    onClick={() => router.push("/")}
                  >
                    <span className="block md:px-4 transition hover:text-blue-700">
                      Home
                    </span>
                  </label>
                </li>
                <li>
                  <label
                    role="button"
                    htmlFor="toggle_nav"
                    onClick={() => router.push("/#courses")}
                  >
                    <span className="block md:px-4 transition hover:text-blue-700">
                      Courses
                    </span>
                  </label>
                </li>
                <li>
                  <label
                    role="button"
                    htmlFor="toggle_nav"
                    onClick={() => router.push("/#contact")}
                  >
                    <span className="block md:px-4 transition hover:text-blue-700">
                      Contact
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
