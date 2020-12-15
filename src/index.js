import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const greeting = 'Hello, World!';
  return <div>{greeting}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
