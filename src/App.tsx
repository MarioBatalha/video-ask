import React from "react";

import Button from "./Components/Button";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="card-item">
          <video
            src="https://www.youtube.com/watch?v=NUsoVlDFqZg"
            controls
          ></video>
          <h1>Video introduction</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            facere, eos, repudiandae dolore itaque nihil minus ad quam
            laboriosam sapiente provident maxime officiis suscipit fuga ipsam
            est aspernatur ipsa eveniet?
          </p>
          <Button
            border="none"
            color="blue"
            height="200px"
            onClick={() => console.log("You clicked on the pink circle!")}
            radius="50%"
            width="200px"
            children="Next"
          />
        </div>

        <div className="card-item">
          <video
            src="https://www.youtube.com/watch?v=NUsoVlDFqZg"
            controls
          ></video>
          <h1>presentation</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            facere, eos, repudiandae dolore itaque nihil minus ad quam
            laboriosam sapiente provident maxime officiis suscipit fuga ipsam
            est aspernatur ipsa eveniet?
          </p>
          <Button
            border="none"
            color="blue"
            height="200px"
            onClick={() => console.log("You clicked on the pink circle!")}
            radius="50%"
            width="200px"
            children="Previous"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
