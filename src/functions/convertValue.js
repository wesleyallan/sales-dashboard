const convertValue = (value) => {
  if (Math.trunc(value) < 1000) {
    return value;
  }
  return convertValue(value / 1000) + 'K';
};

export default convertValue;
