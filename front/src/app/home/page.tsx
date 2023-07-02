import React from "react";
import Header from "../header";
import Image from "next/image";

const Home = () => {
  return (
    <div className="items-center justify-around flex pt-[100px]">
      <Image
        width={1000}
        height={1000}
        src="/assets/landing-page-image.jpg"
        alt="picture of woman facing lake"
        className=""
      />
      <div className="w-[600px]  p-[70px]">
        <p className="pb-5 text-5xl bold font-extrabold">Roam Free.</p>
        <div className="pb-4">
          <p className="text-xl ">Discover new places everyday.</p>
          <p className="text-xl ">
            Whether you&apos;re in a new city or in your hometown.
          </p>
        </div>
        <button className="bg-blue-500 p-3 rounded-lg text-white">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Home;
