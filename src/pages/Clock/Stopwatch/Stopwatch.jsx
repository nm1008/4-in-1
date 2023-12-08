import { useEffect, useState } from "react";
import Button from "../../../components/Button";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    let intervalId;
    if(timer) {
      intervalId = setInterval(() => setTime(time + 1), 10)
    }
    return () => clearInterval(intervalId)
  }, [time, timer]);

  const handleStartStopwatch = () => {
    setTimer(true);
  };

  const handlePauseStopwatch = () => {
    setTimer(false);
  };

  const handleResetStopwatch = () => {
    setTime(0);
    setTimer(false);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0">
      <div className=" space-y-4 md:space-y-6 sm:p-8">
        <div className="flex gap-10 justify-center flex-col items-center py-5">
          <h1 className="text-3xl font-bold ">

          </h1>
          <div className="flex gap-3">
            <Button color={"bg-blue-600"} onClick={handleStartStopwatch}>
              Start
            </Button>
            <Button color={"bg-red-600"} onClick={handlePauseStopwatch}>
              Stop
            </Button>
            <Button color={"bg-amber-600"} onClick={handleResetStopwatch}>
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
