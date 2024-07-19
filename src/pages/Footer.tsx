function Footer() {
  return (
    <>
      <section className="bg-white dark:bg-zinc-900 border border-black">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-2xl font-medium text-gray-900 dark:text-gray-700">
                "DevPen is an amazing platform for code sharing and
                collaboration. With its intuitive interface and powerful
                features, it's the perfect tool for developers looking to
                showcase their work and connect with others."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-gray-400">
                  Micheal Gough
                </div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  CEO at Google
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <footer className="font-sans dark:bg-neutral-900 mt-auto">
        <div className="container px-4 py-4 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <h1 className="max-w-lg text-xl font-base tracking-tight text-gray-800 xl:text-2xl dark:text-gray-400">
                Subscribe to our newsletter to get updates.
              </h1>
              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input
                  id="email"
                  type="text"
                  className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Email Address"
                />
                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-gray-400 transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  Subscribe
                </button>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-400">
                Quick Links
              </p>
              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                >
                  Who We Are
                </a>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                >
                  Our Philosophy
                </a>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-400">
                Industries
              </p>
              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                >
                  Retail & E-Commerce
                </a>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                >
                  Information Technology
                </a>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                >
                  Finance & Insurance
                </a>
              </div>
            </div>
          </div>
          <hr className="my-2 border-gray-200 md:my-4 dark:border-gray-700 h-2" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="font-sans p-4 text-start md:text-center md:text-lg md:p-4 text-gray-600">
              © 2024 DevPen Inc. All rights reserved.
            </p>
            <div className="flex gap-4 hover:cursor-pointer">
              <a href="/#" aria-label="Facebook">
                <img
                  src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                  width="30"
                  height="30"
                  alt="Facebook"
                />
              </a>
              <a href="/#" aria-label="Twitter">
                <img
                  src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                  width="30"
                  height="30"
                  alt="Twitter"
                />
              </a>
              <a href="/#" aria-label="Instagram">
                <img
                  src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                  width="30"
                  height="30"
                  alt="Instagram"
                />
              </a>
              <a href="/#" aria-label="GitHub">
                <img
                  src="https://www.svgrepo.com/show/94698/github.svg"
                  width="30"
                  height="30"
                  alt="GitHub"
                />
              </a>
              <a href="/#" aria-label="Path">
                <img
                  src="https://www.svgrepo.com/show/22037/path.svg"
                  width="30"
                  height="30"
                  alt="Path"
                />
              </a>
              <a href="/#" aria-label="LinkedIn">
                <img
                  src="https://www.svgrepo.com/show/28145/linkedin.svg"
                  width="30"
                  height="30"
                  alt="LinkedIn"
                />
              </a>
              <a href="/#" aria-label="Dribbble">
                <img
                  src="https://www.svgrepo.com/show/22048/dribbble.svg"
                  width="30"
                  height="30"
                  alt="Dribbble"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
