function namify(users) {
  let arr = [];
  users.forEach(function(item, index) {
    arr[index] = item.name;
  });
  return arr;
}
