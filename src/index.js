
exports.min = function min (array) {
  return array ? Math.min(...array) : 0;
}

exports.max = function max (array) {
  return array ? Math.max(...array) : 0;
}

exports.avg = function avg (array) {
  return array ? array.reduce((a, b) => a + b, 0) / array.length : 0;
}
