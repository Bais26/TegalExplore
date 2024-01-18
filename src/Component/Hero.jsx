import React from "react";
import Navbar from "./Navbar"
import Sambutan from "/src/Content/Sambutan"

const Hero = () => {
  return (
    <>
      <section className="relative bg-[url(https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg)] bg-cover bg-center bg-no-repeat">
      <Navbar/>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right text-white/75">
            <h1 className="text-3xl font-extrabold sm:text-5xl">Kota Tegal</h1>

            <p className="mt-4 max-w-lg sm:text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
              excepturi perspiciatis alias!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="/sejarah"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Mulai Explore
              </a>
            </div>
          </div>
        </div>
      </section>
      <Sambutan/>
    </>
  );
}

export default Hero;
