import React from 'react';

const Loader = ({ message = 'Loading..' }) => {
  return (
    <div className="loader">
      <div className="ui active dimmer">
        <div className="ui loader big text">{message}</div>
      </div>
    </div>
  );
};

export default Loader;
