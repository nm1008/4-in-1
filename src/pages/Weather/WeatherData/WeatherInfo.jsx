import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";

const WeatherInfo = ({ data, loading }) => {
  const [weatherPicture, setWeatherPicture] = useState("");
  const [weatherForecast, setWeatherForecast] = useState("");

  useEffect(() => {
    data?.weather?.map((w) => {
      setWeatherPicture(w.icon);
      setWeatherForecast(w.description);
    });
  }, [data?.weather]);

  return (
    <div className="w-full h-[300px] flex items-center justify-center bg-white rounded-lg shadow md:h-[370px] md:w-full  lg:w-3/4 lg:h-[400px] xl:h-[370px]">
      <div className=" space-y-4 h md:space-y-6 mb-5 sm:p-8">
        <div className="flex gap-10 flex-col items-center">
          {loading ? (
            <DNA
            visible={true}
            height="100"
            width="100"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper" />
          ) : (
            <>
              <h1 className="text-3xl font-bold mt-5">{data.name}</h1>
              <div className="flex gap-10 items-center ">
                <h1 className="text-5xl font-semibold md:text-6xl lg:text-7xl">{`${Math.floor(
                  data?.main?.temp
                )}°`}</h1>
                <img
                  src={`https://openweathermap.org/img/wn/${weatherPicture}.png`}
                  alt="weather"
                  className="w-24 md:w-36"
                />
              </div>
              <h1 className="text-xl text-bolder md:text-2xl">{weatherForecast}</h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
