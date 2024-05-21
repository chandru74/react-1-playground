React is fast due to Efficient rendering of DOM

#React Hooks
(Normal JS utility functions)
useState => Superpowerful state variables in react,
Whenever state variable changes, then react re-renders the component
Never use useState hook in conditions, functions

useEffect => 

* if no dependency array => useEffect is called on every render
* if empty dependency array => useEffect is called only on initial render(just once)


Virtual DOM - Representation of actual DOM object(normal JS object)