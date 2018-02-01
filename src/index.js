import React from 'react';
import ReactDOM from 'react-dom'

//create a new component
//should produce some html
const App = () => {
  return <div>Hi!</div>;
}

// Take this component's HTML and
//put in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
