import { useState } from "react";
import "./css/App.css";
import "./css/helper-classes.css";
import "./css/media-queries.css";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import Line from "./Components/Line";
import { Travel } from "./Components/Travel";
import Map from "./Components/Map";
import Community from "./Components/Community";
import Customers from "./Components/Customers";
import Question from "./Components/Question";
import Footer from "./Components/Footer";

function App() {
  const [clicked, setClicked] = useState("false");
  return (
    <div className="app">
      <Header clicked={clicked} setClicked={setClicked}/>
      <Landing />
      <Line />
      <Travel />
      <Map />
      <Community />
      <Customers />
      <Question />
      <Footer />
    </div>
  );
}

export default App;
