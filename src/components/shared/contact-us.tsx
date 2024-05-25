const ContactUs = () => {
  return (
    <section
      id="contact"
      className="bg-white my-8 lg:px-5 relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2 space-y-2.5"
    >
      <div className="flex flex-col gap-y-2 py-2.5 px-5 lg:px-2 lg:py-2.5 border-b">
        <h2 className="text-2xl font-bold uppercase text-blue-900">
          Contact US
        </h2>
        <h3 className="text-base lg:text-lg capitalize font-medium">
          Let us know your ask & get in touch for more information
        </h3>
      </div>
      <div className="container p-8 mx-auto">
        <div className="lg:flex lg:items-start lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6">
            <div className="mt-6 space-y-4 md:mt-8">
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="mx-2 text-gray-700 truncate w-72">
                  91-17 187 ST Jamaica, NY-11423
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="mx-2 text-gray-700 truncate w-72">
                  +1 (347) 445-5355
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="mx-2 text-gray-700 truncate w-72">
                  megatechsusa@gmail.com
                </span>
              </p>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.328479662516!2d-73.77502102358648!3d40.710784837689495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2611377f160eb%3A0x4e7466028ba5ddb1!2s90-32%20186th%20St%2C%20Jamaica%2C%20NY%2011423%2C%20USA!5e0!3m2!1sen!2sbd!4v1716599597881!5m2!1sen!2sbd"
                className="border-0 w-full block lg:hidden"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="lg:w-1/2 lg:mx-6">
            <div className="w-full p-8 px-0 lg:px-8 mx-auto overflow-hidden bg-white rounded-md lg:max-w-xl shadow-gray-300/50">
              <h1 className="text-lg font-medium text-gray-700">
                What do you want to ask
              </h1>

              <form className="mt-6">
                <div className="flex-1">
                  <label className="block mb-2 text-sm text-gray-600">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-sm text-gray-600">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-6">
                  <label className="block mb-2 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
