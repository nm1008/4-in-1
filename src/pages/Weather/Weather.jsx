import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../components/Button";

const Weather = () => {
  const [country, setCountry] = useState("Manila");
  const [selectedCountry, setSelectedCountry] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country},&appid=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((res) => setSelectedCountry(res.data))
      .catch((error) => console.error("Error fetching weather data:", error));
  }, [country]);

  const handleSearchCountry = () => {
    console.log(country);
    console.log(selectedCountry);
  };

  return (
    <section className="container mx-auto my-10">
      <div className="border-2 shadow-md flex flex-col items-center justify-center my-12 mx-24 lg:py-0 ">
        <h1 className="text-2xl font-bold mb-5 py-5">Simple Weather App</h1>
        <div className="flex items-center justify-center mb-5 w-full">
          <input
            type="text"
            className=" w-3/4 h-12 pl-5 rounded-md font-md border-4 md:w-1/2 "
            placeholder="Search city name here.."
            onChange={(e) => setCountry(e.target.value)}
          />
          <Button onClick={handleSearchCountry} color={"bg-blue-600"}>
            Search
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-10 md:flex-nowrap">
        <div className="w-full flex items-center justify-center flex-col md:w-1/2 mx-5">
          <h1 className="text-center text-3xl font-bold mb-5">Weather</h1>
        </div>
        <div className="w-full flex items-center justify-center flex-col md:w-1/2 mx-5">
          <h1 className="text-center text-3xl font-bold mb-5">Details</h1>
        </div>
      </div>
    </section>
  );
};

export default Weather;
