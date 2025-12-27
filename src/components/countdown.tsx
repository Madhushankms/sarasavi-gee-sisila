"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const EVENT_DATE = new Date("2026-01-24T18:00:00");

function calculateTimeLeft(): TimeLeft {
  const difference = EVENT_DATE.getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function EventCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-fit grid gap-3 lg:gap-5 mx-auto grid-cols-2 lg:grid-cols-4 mt-7 lg:mt-8">
      <TimeBox label="Days" value={timeLeft.days} />
      <TimeBox label="Hours" value={timeLeft.hours} />
      <TimeBox label="Minutes" value={timeLeft.minutes} />
      <TimeBox label="Seconds" value={timeLeft.seconds} />
    </div>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="group bg-amber-950 text-white rounded-lg p-4 lg:p-6 shadow-lg transition-all duration-300 hover:scale-105">
      <p
        key={value}
        className="text-3xl lg:text-4xl text-center font-bold font-poppins animate-[pulse_1s_ease-in-out]"
      >
        {value}
      </p>
      <p className="mt-1 text-center font-poppins text-xs uppercase tracking-widest text-gold">
        {label}
      </p>
    </div>
  );
}
