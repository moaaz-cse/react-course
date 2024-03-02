import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

// * not using keys (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice)

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
