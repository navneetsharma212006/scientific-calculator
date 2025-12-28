import { useState } from "react";

const ScientificCalculator = () => {
  const [display, setDisplay] = useState("");

  const buttons = [
    "sin", "cos", "tan", "log",
    "(", ")", "√", "^",
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay("Error");
      }
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  const clearDisplay = () => setDisplay("");

  const backspace = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-blue-900 overflow-hidden">
      
      {/* Calculator Card */}
      <div className="w-full max-w-sm sm:max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-4 sm:p-6">
        
        {/* Display */}
        <div className="mb-4">
          <input
            type="text"
            value={display}
            readOnly
            className="w-full h-16 text-right text-2xl sm:text-3xl px-4 rounded-xl bg-black/70 text-white border border-blue-500/30 outline-none"
            placeholder="0"
          />
        </div>

        {/* Control Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <button
            onClick={clearDisplay}
            className="py-3 rounded-xl bg-red-500/80 text-white font-semibold hover:bg-red-600 transition"
          >
            Clear
          </button>

          <button
            onClick={backspace}
            className="py-3 rounded-xl bg-yellow-500/80 text-black font-semibold hover:bg-yellow-600 transition"
          >
            ⌫ Back
          </button>
        </div>

        {/* Main Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => handleClick(btn)}
              className={`h-12 sm:h-14 rounded-xl text-base sm:text-lg font-semibold
                transition-all duration-200
                ${
                  btn === "="
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                    : "bg-white/10 text-white hover:bg-white/20"
                }
              `}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScientificCalculator;
