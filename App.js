/*
<div id="parent">
    <div id='child'>
        <h1></h1>
    </div>
</div>
 */

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
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
