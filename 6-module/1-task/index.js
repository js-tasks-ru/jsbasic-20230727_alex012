/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  #rows;
  elem;
  table;
  thead;
  tbody;

  constructor(rows) {
    this.#rows = rows;
    this.elem = this.render();
  }

  render() {
    this.table = document.createElement('table');
    this.table.classList.add('example');
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');
    this.table.appendChild(this.thead);
    this.table.appendChild(this.tbody);

    this.tHeadData = `<tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>`;

    this.tBodyData = this.#rows.map(({name, age, salary, city}) => {
      return `<tr><td>${name}</td><td>${age}</td><td>${salary}</td><td>${city}</td><td><button>X</button></td></tr>`;
    }).join('');

    this.table.tHead.innerHTML = `<tr>${this.tHeadData}</tr>`;
    this.table.tBodies[0].innerHTML = this.tBodyData;

    this.table.addEventListener('click', this.click);

    return this.table;
  }

  click(e) {
    if (e.target.closest('button')) {
      e.target.closest('tr').remove();
    }
  }
}
