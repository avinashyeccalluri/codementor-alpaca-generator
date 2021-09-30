import React, { useState, useEffect } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Left from "./components/left/Left";
import Right from "./components/right/Right";
import "./index.css";

function App() {
  const [customizations, setCustomizations] = useState({
    accessory: "earings",
    background: "blue50",
    ears: "default",
    eyes: "naughty",
    hair: "curls",
    leg: "cookie",
    mouth: "eating",
    neck: "thick",
  });

  const [selectedOptions, setSelectedOptions] = useState({
    accessory: "hair",
    style: "curls",
  });
  return (
    <div className="container-fluid background" id="app">
      <div className="app pt-2 mt-3">
        <Header />
        <div className="row">
          <div className="col-lg-6 col-xs-12 col-sm-12 col-md-12">
            <Left
              customizations={customizations}
              setCustomizations={setCustomizations}
            />

            <Footer
              setCustomizations={setCustomizations}
              customizations={customizations}
            />
          </div>
          <div className="col-lg-6 col-xs-12 col-sm-12 col-md-12 mt-2 p-5">
            <Right
              setSelectedOptions={setSelectedOptions}
              selectedOptions={selectedOptions}
              setCustomizations={setCustomizations}
              customizations={customizations}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
