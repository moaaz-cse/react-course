# If no array dependency in useEffect, the useEffect will be called whenever the Header is rerendered

useEffect(() => {
console.log("Header rendered.");
});

# If there is empty array dependency in useEffect, the useEffect will be rendered only once when page loaded.

useEffect(() => {
console.log("rendered only once.");
}, []);

# useState is used to create local state variable in component function, and create at the top of the component. And never create it in if/else/function/loop or Condition block(may cause inconsistency).
