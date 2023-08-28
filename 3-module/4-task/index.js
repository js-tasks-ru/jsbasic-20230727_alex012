function showSalary(users, age) {
  let list;
  list = users
    .filter(value => value.age <= age)
    .map(item => list = `${item.name}, ${item.balance}\n`);

  return list.join('').slice(0, -1);
}
