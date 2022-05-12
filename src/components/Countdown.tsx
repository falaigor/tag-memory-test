import { useState, useEffect } from "react";

interface CountdownProps {
  countdown: number;
  startCountdown: boolean;
}

export const Countdown = ({ countdown, startCountdown }: CountdownProps) => {
  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div className="flex flex-row font-montserrat text-7xl">
      <div>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
      <span>:</span>
      <div>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </div>
    </div>
  );
};
