import './SeasonDisplay.sass';
import { seasonConfig, getSeason } from './SeasonDisplayConfig';
import React from 'react';

const SeasonDisplay = ({ latitude }) => {
  const currentMonth = new Date().getMonth();
  const season = getSeason(latitude, currentMonth);
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} huge icon-left`}></i>
      <h1 className="ui header">{text}</h1>
      <i className={`${iconName} huge icon-right`}></i>
    </div>
  );
};

export default SeasonDisplay;
