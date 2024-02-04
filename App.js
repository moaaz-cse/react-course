/*
<div id="parent">
    <div id='child'>
        <h1></h1>
    </div>
</div>
 */

import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "firstSibling" }, "I am child1."),
    React.createElement("h2", { id: "secondSibling" }, "I am chid2."),
  ])
);
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world form react!"
);
console.log(heading); //object

// JSX - HTML-like or XML-like syntax

const jsxHeading = <h1 id="heading">Hello world using JSX!</h1>;
//this code is transpiled before it reaches the JS-engine-done through PARCEL and transpiled by Babel.

// React Component
/**
 * Two types of components
 * 1. class-based component
 * 2. function-based component fist-capital letter
 */

  

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
