import React from "react";

const task = (value, index) => {
  return <li key={index}>{value}</li>;
};

function App() {
  const allTaks = ["drive", "eat", "sleep", "dream", "work"];
  return allTaks.map((element, index) => task(element, index));
}

export default App;
