import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="sticky top-0 shadow z-30 w-full bg-white/90 backdrop-blur-md px-0 lg:px-5">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
          <input
            type="checkbox"
            name="toggle_nav"
            id="toggle_nav"
            className="peer hidden"
          />
          <div className="w-full px-6 flex justify-between lg:w-max md:px-0 z-40">
            <a
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
            </a>

            <div className="flex items-center lg:hidden max-h-10">
              <label
                role="button"
                htmlFor="toggle_nav"
                aria-label="humburger"
                id="hamburger"
                className="relative w-10 h-auto p-2"
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
          </div>

          <label
            aria-label="toggle nav"
            role="button"
            htmlFor="toggle_nav"
            className="hidden peer-checked:block fixed w-full h-screen left-0 p-4 top-0 z-10 bg-blue-200 bg-opacity-30 backdrop-blur-md backdrop-filter"
          />
          <div className="hidden peer-checked:flex flex-col lg:flex lg:flex-row justify-end z-30 items-center gap-y-6 p-6 rounded-xl bg-white lg:gap-y-0 lg:p-0 md:flex-nowrap lg:bg-transparent w-11/12 mx-auto lg:mx-0 lg:w-7/12 lg:ml-auto">
            <div className="text-gray-600 lg:pr-4 w-full">
              <ul
                className="tracking-wide font-medium  text-sm 
                        flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row w-full"
              >
                <li>
                  <Link
                    href="/#root"
                    className="block md:px-4 transition hover:text-yellow-700"
                  >
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#courses"
                    className="block md:px-4 transition hover:text-yellow-700"
                  >
                    <span>Courses</span>
                  </Link>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block md:px-4 transition hover:text-yellow-700"
                  >
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </div>

            <div
              className="w-full min-w-max space-y-2 space-x-1 px-1 
                    border-blue-400 lg:space-y-0 sm:w-max lg:border-l"
            >
              <button
                type="button"
                title="Start buying"
                className="w-full py-3 px-6 text-center rounded-full transition active:bg-blue-200 focus:bg-blue-100 sm:w-max"
              >
                <span className="blocks font-semibold text-sm">Sign up</span>
              </button>
              <button
                type="button"
                title="Start buying"
                className="w-full py-3 px-6 text-center rounded-full transition bg-blue-300 hover:bg-blue-400 active:bg-blue-400 focus:bg-blue-300 sm:w-max"
              >
                <span className="block text-white font-semibold text-sm">
                  Sign in
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
