import { useEffect, useState } from "react";

const WeatherInfo = ({ data }) => {
  const [weatherPicture, setWeatherPicture] = useState("");
  const [weatherForecast, setWeatherForecast] = useState("");

  useEffect(() => {
    data?.weather?.map((w) => {
      setWeatherPicture(w.icon);
      setWeatherForecast(w.description);
    });
  }, []);

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0">
      <div className=" space-y-4 h md:space-y-6 mb-5 sm:p-8">
        <div className="flex gap-10 h-52  flex-col items-center md:h-58 ">
          <h1 className="text-3xl font-bold ">{data.name}</h1>
          <div className="flex gap-10 items-center ">
            <h1 className="text-2xl font-bold">{`${Math.floor(
              data?.main?.temp
            )}°C`}</h1>
            <img
              src={`https://openweathermap.org/img/wn/${weatherPicture}.png`}
              alt="weather"
              className="w-24"
            />
          </div>
          <h1>{weatherForecast}</h1>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
