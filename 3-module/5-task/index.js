function getMinMax(str) {
  let prepare = str
    .split(' ')
    .filter(item => Number(item));

  return {min: Math.min(...prepare), max: Math.max(...prepare)};
}
