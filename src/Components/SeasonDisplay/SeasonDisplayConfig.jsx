export const seasonConfig = {
  summer: {
    text: "Let's hit the beach. 🏖",
    iconName: 'massive icon sun',
  },
  winter: {
    text: "Burr, it's chilly!",
    iconName: 'massive icon snowflake',
  },
};

export const getSeason = (latitude, month) => {
  let season;
  if (latitude > 0) {
    // * Northern hemisphere
    // Month 2 -> 9 being april -> august
    season = 9 > month > 2 ? 'summer' : 'winter';
  } else if (latitude < 0) {
    // * Southern hemisphere
    // Month 2 -> 9 being april -> august
    season = 9 > month > 2 ? 'winter' : 'summer';
  } else season = 'summer';
  return season;
};
