import { useEffect, useState } from "react";
import Button from "../../components/Button";

const Clock = () => {
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      setDate(d.getDate());
      setMonth(d.getMonth());
      setYear(d.getFullYear());
      setHours(d.getHours());
      setMinutes(d.getMinutes());
      setSeconds(() => {
        if (d.getSeconds() < 10) {
          return `0${d.getSeconds()}`;
        } else {
          return d.getSeconds();
        }
      });
    };

    setInterval(updateTime, 1000);
    updateTime();
  }, [hours, minutes, seconds]);

  return (
    <section className="container mx-auto ">
      <div className=" flex flex-col items-center justify-center mt-12 px-6 py-8 lg:py-0 ">
        <a
          href="#"
          className="text-black flex items-center mb-6 text-2xl font-semibold "
        >
          Clock
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0">
          <div className=" space-y-4 md:space-y-6 sm:p-8">
            <div className="flex gap-10 justify-center flex-col items-center">
              <h1 className="text-3xl font-bold">
                {hours}: {minutes}: {seconds} {hours < 12 ? "AM" : "PM"}
              </h1>
              <h1>
                {month}/{date}/{year}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clock;
