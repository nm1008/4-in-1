import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../components/Button";
import WeatherInfo from "./WeatherData/WeatherInfo";
import WeatherDetails from "./WeatherData/WeatherDetails";

const Weather = () => {
  const [country, setCountry] = useState("Manila");
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(selectedCountry);

  useEffect(() => {
    setLoading(true)
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      )
      .then((res) => {
        setSelectedCountry(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      });
  }, []);

  const handleSearchCountry = async () => {
    setLoading(true)
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      )
      .then((res) => {
        setSelectedCountry(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      });
  };

  return (
    <section className="container mx-auto my-10 flex items-center flex-col">
      <div className="w-5/6 border-2 shadow-md my-12 lg:py-0 md:w-1/2">
        <h1 className="font-bold mb-5 py-5 text-center text-lg">Simple Weather App</h1>
        <div className="flex flex-col gap-5 items-center justify-center mb-5 w-full md:flex-row">
          <input
            type="text"
            className=" w-3/4 h-12 pl-3 rounded-md font-md border-4 md:w-1/2 md:pl-5 "
            placeholder="Search city name here.."
            onChange={(e) => setCountry(e.target.value)}
          />

          <Button onClick={handleSearchCountry} color={"bg-blue-600"}>
            Search
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap items-start gap-10 md:flex-nowrap">
        <div className="w-full flex items-center justify-center flex-col md:w-1/2 mx-5">
          <h1 className="text-center text-3xl font-bold mb-5">Weather</h1>
          {loading === true ? (
            <h1>Loading details</h1>
          ) : (
            <WeatherInfo data={selectedCountry}/>
          )}
        </div>
        <div className="w-full flex items-center justify-center flex-col md:w-1/2 mx-5">
          <h1 className="text-center text-3xl font-bold mb-5">Details</h1>
          <WeatherDetails data={selectedCountry}/>
        </div>
      </div>
    </section>
  );
};

export default Weather;
