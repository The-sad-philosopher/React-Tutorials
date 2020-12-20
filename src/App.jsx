import React, { Component } from 'react';
import SeasonDisplay from './Components/SeasonDisplay/SeasonDisplay';
import Loader from './Components/Loader';
import Error from './Components/Error/Error';

class App extends Component {
  state = { latitude: undefined, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (location) =>
        this.setState({
          latitude: location.coords.latitude,
        }),
      (err) =>
        this.setState({
          errorMessage: err.message,
        })
    );
  }

  renderContent = () => {
    const { latitude, errorMessage } = this.state;
    let contentToBeRendered = <Loader message="Waiting for location..." />;
    if (errorMessage && !latitude) {
      contentToBeRendered = <Error message="Location denied." />;
    }
    if (!errorMessage && latitude) {
      contentToBeRendered = <SeasonDisplay latitude={latitude} />;
    }
    return contentToBeRendered;
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default App;
