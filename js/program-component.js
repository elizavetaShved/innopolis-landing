class programComponent {
  hostElem;
  btsOpenDescription;
  descriptionElems;

  constructor() {
    this.hostElem = document.querySelector('#program-host');
    if (!this.hostElem) return;
    this.btsOpenDescription = this.hostElem.querySelectorAll('.program__content-info-btn-show');
    this.descriptionElems = this.hostElem.querySelectorAll('.program__content-info-list');

    this.btsOpenDescription.forEach((btn, index) => {
      btn.onclick = () => {
        this.descriptionElems.forEach((descriptionElem, i) => {
          if (i === index && !descriptionElem.className.includes('mod-show')) {
            btn.innerText = 'Скрыть описание';
            descriptionElem.classList.add('mod-show');
          } else {
            descriptionElem.classList.remove('mod-show');
            btn.innerText = 'Подробнее';
          }
        })
      }
    })
  }
}

window.onload = () => {
  new programComponent();
}
