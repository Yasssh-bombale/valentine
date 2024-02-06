import React, { useEffect } from "react";
import {
  img6TeddyKisses,
  img10Kiss,
  img13kiss,
  img8TeddyKissing,
} from "../images";
import { Button } from "flowbite-react";
import confetti from "canvas-confetti";

const Accept = () => {
  const launchConfetti = () => {
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };
  useEffect(() => {
    launchConfetti();
  }, []);
  return (
    <div className="min-h-screen  w-full">
      <div className="max-w-5xl w-full  mx-auto flex flex-col items-center gap-5">
        <div className="flex w-full justify-center gap-20  p-3">
          <img
            src={img6TeddyKisses}
            alt="bearKisses"
            className="object-cover h-50 w-50"
          />
          <img
            src={img10Kiss}
            alt="tedykiss"
            className="object-cover h-50 w-50"
          />
        </div>

        <h1 className="text-[#800000] text-4xl font-semibold">
          Congratulations cutiee you won a prince !
        </h1>

        <Button size={"xl"} gradientDuoTone="purpleToPink">
          Marrage fix on 14 feb
        </Button>

        <div className="flex w-full justify-center gap-20  p-3">
          <img
            src={img13kiss}
            alt="tedykiss"
            className="object-cover h-50 w-50"
          />
          <img
            src={img8TeddyKissing}
            alt="teddykiss"
            className="object-cover h-50 w-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Accept;
