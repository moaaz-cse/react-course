#

- npm start = npm run start = npx parcel index.html
- as we have configure this in package.json

# JSX

- using react
  const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world form react!"
  );

- using JSX
  const jsxHeading = <h1 id="heading">Hello world using JSX!</h1>;

  1. This code is transpiled before it reaches the JS-engine-done through PARCEL and transpiled by Babel.

- JSX is converted to React.createElement done by Babel then converted to js-object and then gets rendered html element
- attribute are given in camelCase.
- JSX and react both are different, but both create same javascript object.
- Is not HTML in Javascript.
- JSX is convention where we merge HTML and React.
- JSX automatically sanitize js code in it and reject the malicious script code.

# what is component composition

- inserting one react components in another react component.
