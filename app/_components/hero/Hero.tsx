import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed -z-10 h-full w-full object-cover"
      >
        <source src="/assets/hero.mp4" type="video/mp4" />
      </video>
      <div className="relative z-20 flex flex-col items-center justify-center p-4 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.6)]">
        {/* <div className="absolute opacity-30 h-full w-full rounded-lg bg-white"></div> */}
        <p className="mb-2 text-6xl font-bold">Abdelrahman El Toukhy</p>
        <p className="text-center text-xl">Web Developer</p>
      </div>
    </div>
  );
}

export default Hero;
