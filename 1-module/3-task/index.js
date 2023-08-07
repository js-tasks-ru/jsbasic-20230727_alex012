function ucFirst(str) {
  if (str === '') {
    return '';
  }
  if (typeof str === "string") {
    return str[0].toUpperCase() + str.slice(1, str.length);
  }
}
