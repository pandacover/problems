import "./index.css";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const calcuteFreq = (e) => {
    e.preventDefault();
    let str = e.target.querySelector("input").value.toUpperCase();
    let arr = Array(26).fill(0);
    for (let i = 0; i < str.length; ++i) {
      ++arr[str[i].charCodeAt(0) - "A".charCodeAt(0)];
    }
    setData([...arr]);
  };
  return (
    <div className="App">
      <form onSubmit={calcuteFreq}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
      <div className="item-container">
        {data &&
          data.map((cnt, index) => (
            <div>
              {cnt > 0
                ? `${String.fromCharCode("A".charCodeAt(0) + index)} - ${cnt}`
                : ""}
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
