import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (input === "0") {
      setInput(value);
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const handleClear = () => {
    setInput("0");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleDelete = () => {
    if (result !== "") {
      setInput("0");
      setResult("");
    } else {
      setInput((prevInput) => {
        const newInput = prevInput.slice(0, -1);
        return newInput === "" ? "0" : newInput;
      });
    }
  };

  return (
    <section className="container mx-auto flex flex-col justify-center mt-10 w-full  lg:w-1/8  md:w-1/2 ">
      <div className=" bg-blue-500 p-3 m-2 rounded-lg ">
        <div className="flex flex-col bg-white rounded-lg mx-2 my-5 p-5">
          <h1 className="grow text-end font-bold text-lg ">{input}</h1>
          <h1 className="grow text-end font-bold text-lg ">{result}</h1>
        </div>
        <div className="grid grid-cols-4 ">
          <button
            className="bg-white mx-2 my-3 p-2w-auto rounded-lg text-md font-bold md:text-lg "
            onClick={() => handleButtonClick("7")}
          >
            7
          </button>
          <button
            className="bg-white mx-2 my-3 p-5 rounded-lg text-md font-bold md:text-lg"
            onClick={() => handleButtonClick("8")}
          >
            8
          </button>
          <button
            className="bg-white mx-2 my-3 p-5 rounded-lg text-md font-bold md:text-lg "
            onClick={() => handleButtonClick("9")}
          >
            9
          </button>
          <button
            className="bg-white mx-2 my-3 p-5 rounded-lg text-md font-bold md:text-lg "
            onClick={handleDelete}
          >
            Del
          </button>
          <button
            className="bg-white mx-2 my-3 p-5 rounded-lg text-md font-bold md:text-lg "
            onClick={() => handleButtonClick("4")}
          >
            4
          </button>
          <button
            className="bg-white mx-2 my-3 p-5 rounded-lg text-md font-bold md:text-lg "
            onClick={() => handleButtonClick("5")}
          >
            5
          </button>
          <button
            className="bg-white mx-2 my-3 p-5 rounded-lg text-md font-bold md:text-lg "
            onClick={() => handleButtonClick("6")}
          >
            6
          </button>
          <button
            className="bg-white mx-2 my-3 p-5 rounded-lg text-md font-bold md:text-lg "
            onClick={() => handleButtonClick("+")}
          >
            +
          </button>
          <button
            className="bg-white mx-2 my-3 p-5 rounded-lg text-md font-bold md:text-lg "
            onClick={() => handleButtonClick("1")}
          >
            1
          </button>
          <button
            className="bg-white mx-2 my-3 p-5 rounded-lg text-md font-bold md:text-lg "
            onClick={() => handleButtonClick("2")}
          >
            2
          </button>
          <button
            className="bg-white mx-2 my-3 p-5 rounded-lg text-md font-bold md:text-lg "
            onClick={() => handleButtonClick("3")}
          >
            3
          </button>
          <button
            className="bg-white mx-2 my-3 p-5 rounded-lg text-md font-bold md:text-lg "
            onClick={() => handleButtonClick("7")}
          >
            -
          </button>
          <button
            className="bg-white mx-2 my-3 p-5 rounded-lg text-md font-bold md:text-lg "
            onClick={() => handleButtonClick("-")}
          >
            .
          </button>
          <button
            className="bg-white mx-2 my-3 p-5 rounded-lg text-md font-bold md:text-lg "
            onClick={() => handleButtonClick("0")}
          >
            0
          </button>
          <button
            className="bg-white mx-2 my-3 p-5 rounded-lg text-md font-bold md:text-lg "
            onClick={() => handleButtonClick("/")}
          >
            /
          </button>
          <button
            className="bg-white mx-2 my-3 p-5 rounded-lg text-md font-bold md:text-lg "
            onClick={() => handleButtonClick("*")}
          >
            X
          </button>
        </div>
        <div className="flex">
          <button
            className="bg-white mx-2 my-3 p-5 rounded-lg text-lg font-bold grow"
            onClick={handleClear}
          >
            Reset
          </button>
          <button
            className="bg-white mx-2 my-3 p-5 rounded-lg text-lg font-bold grow"
            onClick={handleCalculate}
          >
            =
          </button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
