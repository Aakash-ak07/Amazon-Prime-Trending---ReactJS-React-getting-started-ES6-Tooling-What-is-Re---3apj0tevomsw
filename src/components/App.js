import React, {Component, useState} from "react";
import '../styles/App.css';

const App = (props) => {
  const [counter, setCounter] = useState(0);
  const data = useState(props.slides);
  return (
    <>
      <h1 data-testid="title">{data[counter].title}</h1>
      <p data-testid="text">{data[counter].text}</p>

      <button data-testid="button-next"
      disabled={counter === props.slides.lenght - 1 ? true : false}
      onClick={() => setCounter(counter + 1)}> Next </button>

      <button data-testid="button-prev"
      disabled={counter === 0 ? true : false}
      onClick={() => setCounter(counter - 1)}> Prev </button>

      <button data-testid="button-restart"
      disabled={counter === 0 ? true : false}
      onClick={() => setCounter(0)}> Restart </button>
    </>
  );
};


export default App;
