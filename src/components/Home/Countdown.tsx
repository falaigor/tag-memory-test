import { useChallenge } from "../../contexts/challenge";

export const Countdown = () => {
  const { time } = useChallenge();
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div
      data-testid="countdown"
      className="flex flex-row font-montserrat text-7xl"
    >
      <div data-testid="minute">
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
      <span>:</span>
      <div data-testid="second">
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </div>
    </div>
  );
};
