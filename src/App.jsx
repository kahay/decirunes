import React from "react";
import "./App.css";

const POINTS = [
  "0,0 0,3",           // 0 
  "0,0 1,0",           // 1
  "0,1 1,1",           // 2
  "0,0 1,1",           // 3
  "0,1 1,0",           // 4
  "0,0 1,0 0,1",       // 5
  "1,0 1,1",           // 6
  "0,0 1,0 1,1",       // 7
  "1,0 1,1 0,1",       // 8
  "0,0 1,0 1,1 0,1"    // 9
];

const getDigits = (number) => {
  return number.toString().split("").reverse();
};

const Digit = ({ value, magnitude }) => {
  const getTransform = () => {
    switch (magnitude) {
      case 1:
        return "scale(-1, 1)";
      case 2:
        return "translate(0, 3) scale(1, -1)";
      case 3:
        return "translate(0, 3) scale(-1, -1)";
      default:
        return "";
    }
  };

  return (
    <polyline transform={getTransform()} points={POINTS[value]} />
  );
};

const App = () => {
  const [number, setNumber] = React.useState(0);

  const handleChange = (e) => {
    const { value, min, max } = e.target;
    const num = Math.max(min, Math.min(max, value % (+max + 1)));
    setNumber(num);
  };

  const downloadSvg = () => {
    const svg = document.getElementById("cistercian-svg");
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const blob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `cistercian_${number}.svg`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="App">
      <header>
        <h1>Cistercian Numerals</h1>
        <label>
          Enter a number (0-9999)
          <input
            type="number"
            name="number"
            id="number"
            min="0"
            max="9999"
            value={number}
            onChange={handleChange}
          />
        </label>
      </header>

      <svg
        id="cistercian-svg"
        viewBox="-1.5 -1 3 5"
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="300" 
      >
        <Digit value={0} />
        {getDigits(number).map((digit, i) => (
          <Digit value={parseInt(digit, 10)} magnitude={i} key={i} />
        ))}
      </svg>

      <button onClick={downloadSvg}>
        Download SVG
      </button>
    </div>
  );
};

export default App;
