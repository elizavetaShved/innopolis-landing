class programComponent {
  hostElem;
  btsOpenDescription;
  descriptionElems;
  btnsNavigate;
  contentBlockElems;
  btnsFilter;
  contentFilterElems;

  indexCurrentContent;

  constructor() {
    this.hostElem = document.querySelector('#program-host');
    if (!this.hostElem) return;
    this.btsOpenDescription = this.hostElem.querySelectorAll('.program__content-info-btn-show');
    this.descriptionElems = this.hostElem.querySelectorAll('.program__content-info-list');

    this.btnsNavigate = this.hostElem.querySelectorAll('.program__navigate-btn');
    this.contentBlockElems = this.hostElem.querySelectorAll('.program__bottom-block-wrapper');

    this.btnsFilter = this.hostElem.querySelectorAll('.program__filter-btn');

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

    this.btnsNavigate.forEach((btn, index) => {
      btn.onclick = () => {
        this.indexCurrentContent = index;

        this.contentBlockElems.forEach((contentBlock, i) => {
          if (i === index) {
            contentBlock.classList.add('mod-show');
          } else {
            contentBlock.classList.remove('mod-show');
          }
        })
      }
    })

    this.btnsFilter.forEach(btn => {
      btn.onclick = () => {
        this.contentFilterElems = this.contentBlockElems[this.indexCurrentContent].querySelectorAll('.program__content-item');

        this.contentFilterElems.forEach(elem => {
          if (elem.className.includes(btn.value)) {
            elem.classList.add('mod-show');
          } else {
            elem.classList.remove('mod-show');
          }
        })
      }
    })
  }
}

window.onload = () => {
  new programComponent();
}
