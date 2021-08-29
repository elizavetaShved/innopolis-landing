class speakersComponent {

  constructor() {
    const hostElem = document.getElementById('speakers-host');
    if (!hostElem) return;

    const itemWrapper = hostElem.querySelectorAll('.test-wrapper');

    itemWrapper.forEach(elem => {
      elem.onmouseover = () => {
        itemWrapper.forEach(e => e.parentElement.parentElement.classList.remove('mod-hover'));
        elem.parentElement.parentElement.classList.add('mod-hover');
      }
    });
  }
}
