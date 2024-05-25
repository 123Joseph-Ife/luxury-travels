import { useState } from "react";
import "./css/App.css";
import "./css/helper-classes.css";
import "./css/media-queries.css";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import Line from "./Components/Line";
import { Travel } from "./Components/Travel";
import Map from "./Components/Map";

function App() {
  const [clicked, setClicked] = useState("false");
  return (
    <div className={clicked === "true" ? "scroll-freeze" : ""}>
      <Header clicked={clicked} setClicked={setClicked}/>
      <Landing />
      <Line />
      <Travel />
      {/* <Map /> */}
    </div>
  );
}

export default App;
