#LECTURE-1.

1. what is CDN?
2. Why is crossorigin in cdn react link?

<body>
    <div id="root"></div>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>

    <script>

//this will creat an h1 element createElement define in react code base.
const heading = React.createElement("h1", {}, "Hello world form react!");

//Below line will create a root element using createRootfunction define in ReactDOM file.
const root = ReactDOM.createRoot(document.getElementById("root"));
//Below line will render the element passed in parenthesis at root level.
root.render(heading);  
 </script>

  </body>

# In app.js

//here in the createElement's object we can attribute to our h1-tag
const heading = React.createElement("h1", {}, "Hello world form react!");
//like this
const heading = React.createElement(
"h1",
{ id: "heading", xyz: "abc" },
"Hello world form react!"
);

// this heading (const heading) is basically a react element, which means this "heading" is just a JAVASCRIPT OBJECT.\

which has props,props are children plus attribute that we pass in it.
