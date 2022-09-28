function makeDiagonalRed(table) {
  for (let i = 0; i < 5; i++) {
    let elem = table.rows[i].cells[i];
    elem.style.background = 'red';
  }
}