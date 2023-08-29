function highlight(table) {
  for (let i = 0; i < table.rows.length; ++i) {
    let cell = table.rows[i];
    if (cell.children[3].dataset.available) {
      if (cell.children[3].dataset.available === 'true') {
        cell.classList.add('available');
      } else {
        cell.classList.add('unavailable');
      }
    } else {
      cell.hidden = true;
    }

    if (cell.children[2].textContent === 'm') {
      cell.classList.add('male');
    }

    if (cell.children[2].textContent === 'f') {
      cell.classList.add('female');
    }

    if (cell.children[1].textContent < '18') {
      cell.style.textDecoration = 'line-through';
    }
  }
}
