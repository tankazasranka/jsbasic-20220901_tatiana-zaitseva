function makeFriendsList(friends) {
  let ul = document.createElement('ul')
  ul.innerHTML = `<ul> ${friends.map(item => `<li> ${item.firstName} ${item.lastName}</li> `).join(`\n`)} </ul>`;
  return ul;
}