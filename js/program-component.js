class programComponent {
  constructor() {
    const hostElem = document.querySelector('#program-host');
    if (!hostElem) return;
    const btsOpenDescription = hostElem.querySelectorAll('.program__content-info-btn-show');
    const descriptionElems = hostElem.querySelectorAll('.program__content-info-list');

    const btnsNavigate = hostElem.querySelectorAll('.program__navigate-btn');
    const contentBlockElems = hostElem.querySelectorAll('.program__bottom-block-wrapper');

    const btnsFilter = hostElem.querySelectorAll('.program__filter-btn');

    let contentFilterElems;
    let indexCurrentContent = 0;

    btsOpenDescription.forEach((btn, index) => {
      btn.onclick = () => {
        descriptionElems.forEach((descriptionElem, i) => {
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

    btnsNavigate.forEach((btn, index) => {
      btn.onclick = () => {
        indexCurrentContent = index;

        contentBlockElems.forEach((contentBlock, i) => {
          if (i === index) {
            contentBlock.classList.add('mod-show');
            btnsNavigate[i].classList.add('mod-active');
          } else {
            contentBlock.classList.remove('mod-show');
            btnsNavigate[i].classList.remove('mod-active');
          }
        })
      }
    })

    btnsFilter.forEach((btnFilter, index) => {
      btnFilter.onclick = () => {
        contentFilterElems = contentBlockElems[indexCurrentContent].querySelectorAll('.program__content-item');

        contentFilterElems.forEach((elem, i) => {
          if (elem.className.includes(btnFilter.value)) {
            elem.classList.add('mod-show');
          } else {
            elem.classList.remove('mod-show');
          }
        })

        btnsFilter.forEach((btn, i) => {
          if (i === index) {
            btn.classList.add('mod-active');
          } else {
            btn.classList.remove('mod-active');
          }
        })
      }
    })
  }
}

window.onload = () => {
  new programComponent();
}
