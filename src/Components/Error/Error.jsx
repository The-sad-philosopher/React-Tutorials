import React from 'react';
import './Error.sass';

const Error = ({ message }) => {
  return (
    <div className="error ui container">
      <div className="ui message">
        <div className="header ui red">Oops!</div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Error;
