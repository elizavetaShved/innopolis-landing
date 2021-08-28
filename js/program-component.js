class programComponent {
  constructor() {
    const hostElem = document.getElementById('program-host');
    if (!hostElem) return;
    const btsOpenDescription = hostElem.querySelectorAll('.program__content-info-btn-show');
    const descriptionElems = hostElem.querySelectorAll('.program__content-info-list');

    const radioDateElems = hostElem.querySelectorAll('.program__navigate-radio');
    const contentBlockElems = hostElem.querySelectorAll('.program__bottom-block-wrapper');

    const checkboxFilterElems = hostElem.querySelectorAll('.program__filter-checkbox');

    const form = hostElem.querySelector('#program-form');

    let contentElems;
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

    radioDateElems.forEach((radio, index) => {
      radio.onchange = () => {
        indexCurrentContent = index;

        contentBlockElems.forEach((contentBlock, i) => {
          if (i === index) {
            contentBlock.classList.add('mod-show');
          } else {
            contentBlock.classList.remove('mod-show');
          }
        })
      }
    })

    checkboxFilterElems.forEach(checkbox => {
      checkbox.onchange = () => {
        const checkedNames = [...form['program-filter']].filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);

        contentElems = contentBlockElems[indexCurrentContent].querySelectorAll('.program__content-item');

        if (checkedNames.length) {
          contentElems.forEach(elem => {
            let isShowElem = false;
            checkedNames.forEach(checkedName => {
              if (elem.className.includes(checkedName)) {
                isShowElem = true;
              }
            })

            if (isShowElem) {
              elem.classList.remove('mod-hide');
            } else {
              elem.classList.add('mod-hide');
            }
          });
        } else {
          contentElems.forEach(elem => {
            elem.classList.remove('mod-hide');
          })
        }
      }
    })
  }
}

window.onload = () => {
  new programComponent();
}
