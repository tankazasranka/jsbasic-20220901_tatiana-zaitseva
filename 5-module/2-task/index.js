function toggleText() {

  let hideText = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');

  hideText.addEventListener('click', () => text.toggleAttribute('hidden'));

}
