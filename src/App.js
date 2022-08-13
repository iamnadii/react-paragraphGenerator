import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    let newCount = parseInt(count);
    console.log(newCount);
    if (newCount <= 0) {
      newCount = 1;
    }
    if (newCount > data.length) {
      newCount = data.length();
    }
    setText(data.slice(0, newCount));
  };
  return (
    <div className="section-center">
      <h3>Get bored of lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <div className="lorem-text">
        {text.map((data, index) => {
          return <p key={index}>{data}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
