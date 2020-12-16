import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: undefined,
      errorMessage: '',
    };
    window.navigator.geolocation.getCurrentPosition(
      (location) => {
        this.setState({
          latitude: location.coords.latitude,
        });
      },
      (err) => {
        this.setState({
          errorMessage: err.message,
        });
      }
    );
  }
  render() {
    const { latitude, errorMessage } = this.state;
    if (errorMessage && !latitude) {
      return <div>Error: {errorMessage}</div>;
    }
    if (!errorMessage && latitude) {
      return <div> Latitude : {latitude}</div>;
    }
    return <div>Loading...</div>;
  }
}

export default App;
