class newsComponent {
  hostElem;
  btnPrev;
  btnNext;
  cardWrapperElems;

  currentSlide = 0;

  constructor() {
    this.hostElem = document.querySelector('#news-block-host');
    if (!this.hostElem) return;

    this.btnPrev = this.hostElem.querySelector('.news__navigate-navigate-btn-wrapper.mod-prev');
    this.btnNext = this.hostElem.querySelector('.news__navigate-navigate-btn-wrapper.mod-next');
    this.cardWrapperElems = this.hostElem.querySelectorAll('.news__cards-wrapper');

    this.btnPrev.onclick = () => {
      if (this.currentSlide > 0) {
        this.cardWrapperElems[this.currentSlide].classList.remove('mod-show');
        this.currentSlide--;
        this.cardWrapperElems[this.currentSlide].classList.add('mod-show');

        this.checkDisabledBtns();
      }
    }

    this.btnNext.onclick = () => {
      if (this.currentSlide < this.cardWrapperElems.length - 1) {
        this.cardWrapperElems[this.currentSlide].classList.remove('mod-show');
        this.currentSlide++;
        this.cardWrapperElems[this.currentSlide].classList.add('mod-show');

        this.checkDisabledBtns();
      }
    }
  }

  checkDisabledBtns() {
    console.log(this.currentSlide)
    if (this.currentSlide === 0) {
      this.btnPrev.classList.add('mod-disabled');
    } else {
      console.log(111111)
      this.btnPrev.classList.remove('mod-disabled');
    }

    if (this.currentSlide === this.cardWrapperElems.length - 1) {
      this.btnNext.classList.add('mod-disabled');
    } else {
      this.btnNext.classList.remove('mod-disabled');
    }
  }
}

window.onload = () => {
  new newsComponent();
}
