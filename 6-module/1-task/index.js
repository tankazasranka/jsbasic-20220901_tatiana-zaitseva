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

  constructor(rows) {
    this.rows = rows.map(item => item);
    
    this.#render();
  }


  #render() {
    this.elem = this.#createElement(this.#template());
   
      this.elem.onclick = function({ target }) {
       target.closest('tr').remove()
      }
  }

  #createElement(html) {
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = html;
    return tempDiv.firstElementChild;
  }



  #template() {
    return `<table>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          ${this.rows.map(value => `<td> ${value.name} </td> <td> ${value.age} </td> <td> ${value.salary} </td> <td> ${value.city} </td> <td><button>X</button></td>`).join('</tr>')}
      </tbody>
    </table>`
  }

}
