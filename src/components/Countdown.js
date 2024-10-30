"use client";
import { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = +new Date("2024-11-15") - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <>
      <div className="bg-[#127DC0] p-4">
        <div className="mx-[100px]">
          <h3 className="text-2xl text-white text-center my-4 font-semibold">
            Event Counter
          </h3>
          <div className="text-[120px] flex flex-col lg:flex-row gap-[30px] w-full items-center my-8">
            <div className="w-[200px] mx-1 p-2 text-white rounded-lg">
              <div className="font-mono leading-none">
                {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
              </div>
              <div className="text-sm text-center leading-none">Days</div>
            </div>
            <div className="w-[200px] mx-1 p-2 text-white rounded-lg">
              <div className="font-mono leading-none">
                {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
              </div>
              <div className="text-sm text-center leading-none">Hours</div>
            </div>
            <div className="w-[200px] mx-1 p-2 text-white rounded-lg">
              <div className="leading-none">
                {timeLeft.minutes < 10
                  ? `0${timeLeft.minutes}`
                  : timeLeft.minutes}
              </div>
              <div className="text-sm text-center leading-none">Minutes</div>
            </div>
            <div className="text-2xl text-white mx-1">and</div>
            <div className="w-[200px] mx-1 p-2 text-white rounded-lg">
              <div className="font-mono leading-none">
                {timeLeft.seconds < 10
                  ? `0${timeLeft.seconds}`
                  : timeLeft.seconds}
              </div>
              <div className="text-sm text-center leading-none">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countdown;
