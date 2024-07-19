import { useState, useEffect } from "react";
import image1 from "/image1.jpg";
import image2 from "/image2.jpg";
import image3 from "/image3.jpg";
import image4 from "/image4.jpg";
import image5 from "/image5.jpg";
import image6 from "/image6.jpg";
import image7 from "/image7.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            DevPen
          </h1>
          <h2 className="max-w-2xl mb-4 text-lg font-bold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-sky-900">
            Build and showcase your web projects effortlessly with DevPen
          </h2>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-600">
            DevPen is your go-to platform for creating, testing, and sharing web
            projects in real-time. Whether you're a beginner or a seasoned
            developer, DevPen provides the tools and community you need to bring
            your ideas to life.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <div className="w-full text-white flex justify-center items-center flex-col gap-3">
            <div className="relative w-full h-96 transition-all duration-300 cursor-pointer rounded-lg filter grayscale hover:grayscale-0">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Slider Image ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-between w-8 mx-auto">
              <button
                onClick={goToPrevious}
                className="bg-sky-900 rounded-full w-8 p-2"
              >
                &larr;
              </button>
              <button
                onClick={goToNext}
                className="bg-sky-900 rounded-full w-8 p-2"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
