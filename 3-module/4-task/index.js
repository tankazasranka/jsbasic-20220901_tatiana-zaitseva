function showSalary(users, age) {
  return users.map((item) => {if (item.age <= age) { return `${item.name}, ${item.balance}`}}).filter(item => item).join('\n')
}
