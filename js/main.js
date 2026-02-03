const screens = Array.from(document.querySelectorAll('.screen'));
const revealBox = document.querySelector('.reveal');
const actions = document.querySelectorAll('[data-action]');
let currentIndex = 0;

const setActiveScreen = (index) => {
  screens.forEach((screen, i) => {
    screen.classList.toggle('is-active', i === index);
  });
  currentIndex = index;
};

const goNext = () => {
  if (currentIndex < screens.length - 1) {
    setActiveScreen(currentIndex + 1);
  }
};

const goBack = () => {
  if (currentIndex > 0) {
    setActiveScreen(currentIndex - 1);
  }
};

const restart = () => {
  setActiveScreen(0);
  if (revealBox) {
    revealBox.classList.remove('is-visible');
  }
};

const revealPromise = () => {
  if (!revealBox) return;
  revealBox.classList.toggle('is-visible');
};

actions.forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;

    switch (action) {
      case 'next':
        goNext();
        break;
      case 'back':
        goBack();
        break;
      case 'restart':
        restart();
        break;
      case 'reveal':
        revealPromise();
        break;
      default:
        break;
    }
  });
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    goNext();
  }
  if (event.key === 'ArrowLeft') {
    goBack();
  }
});
