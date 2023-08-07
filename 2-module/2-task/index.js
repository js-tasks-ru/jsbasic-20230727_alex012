function isEmpty(obj) {
  for (let o in obj) {
    if (obj.hasOwnProperty(o)) {
      return false;
    }
  }

  return true;
}
