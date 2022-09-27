function highlight(table) {

  for (let i = 1; i < table.rows.length; i++)  {

    let age = table.rows[i].cells[1];
    if (age.innerHTML < 18) {
      age.parentElement.style = 'text-decoration: line-through';
    }

    let status = table.rows[i].cells[3];
    if (status.dataset.available === 'true') {
      status.parentElement.classList.add('available');
    }
    else if (status.dataset.available === 'false') {
      status.parentElement.classList.add('unavailable');
    }
    else  {
      status.parentElement.setAttribute('hidden', 'hidden');
    }

    let gender = table.rows[i].cells[2];
    if (gender.innerHTML == 'm') {
      gender.parentElement.classList.add('male');
    }
    else {
      gender.parentElement.classList.add('female');
    }


  
  }

}