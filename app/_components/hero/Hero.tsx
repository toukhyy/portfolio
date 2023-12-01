import React from 'react';

type Props = {};

function Hero({}: Props) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="-z-10 fixed w-full h-full object-cover"
      >
        <source src="/assets/hero.mp4" type="video/mp4" />
      </video>
      <div className="relative z-20 p-4 flex flex-col justify-center items-center drop-shadow-[0_5px_3px_rgba(0,0,0,0.6)] text-white">
        {/* <div className="absolute opacity-30 h-full w-full rounded-lg bg-white"></div> */}
        <p className="text-6xl font-bold mb-2">Hi, I'm Abdelrahman.</p>
        <p className="text-xl text-center">Avid Learner and Web Developer.</p>
      </div>
    </div>
  );
}

export default Hero;
