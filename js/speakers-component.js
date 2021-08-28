class speakersComponent {

  constructor() {
    const hostElem = document.getElementById('speakers-host');
    if (!hostElem) return;

    const messageBtns = hostElem.querySelectorAll('.speakers__message-btn');
    const messageContentElems = hostElem.querySelectorAll('.speakers__message-content');

    messageBtns.forEach((btn, i) => {
      btn.onmouseover = () => {
        messageContentElems[i].classList.add('mod-show');
      }
    })

    messageContentElems.forEach(elem => {
      elem.onmouseout = () => {
        elem.classList.remove('mod-show');
      }
    })
  }
}

window.onload = () => {
  new speakersComponent();
}
