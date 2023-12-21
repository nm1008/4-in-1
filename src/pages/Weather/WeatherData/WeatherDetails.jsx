import { useEffect, useState } from "react";
import Card from "../../../components/Card";

const WeatherDetails = ({ data }) => {
  console.log(data);

  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  const timeAm = data?.sys?.sunrise;
  const timePm = data?.sys?.sunset;

  useEffect(() => {
    const timeConverter = (time) => {
      const date = new Date(time * 1000);
      let hours = date.getHours();
      const minutes = date.getMinutes();


      hours = hours % 12 || 12;

      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      const formattedTime = `${hours}:${formattedMinutes}`;
      return formattedTime;
    };

    if (timeAm) {
      setSunrise(timeConverter(timeAm));
    }

    if (timePm) {
      setSunset(timeConverter(timePm));
    }
  }, [timeAm, timePm]);

  return (
    <div className="w-full p-3 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0">
      <div className=" space-y-4 h md:space-y-6  ">
        <div className="flex flex-col">
          <div className="flex gap-5 mb-5 text-center p-2 ">
            <Card title={"Temps °C (High / Low)"}>
              {data?.main?.temp_max.toFixed(1)}°C / {data?.main?.temp_min.toFixed(1)}°C
            </Card>
            <Card title={"Humidity / hPA"}>
              {data?.main?.humidity}% / {data?.main?.pressure}
            </Card>
          </div>
          <div className="flex gap-5 mb-5  text-center">
            <Card title={"Wind speed"}>{data?.wind?.speed} m/s</Card>
            <Card title={"Sunrise / Sunset"}>
              {sunrise}AM / {sunset}PM
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
