import Keys from './components/Keys.js';
import arrayWithKeys from './components/data.js';
import fragment from './components/Markdown.js';

let capsLock = true;
let lang;

if (localStorage.lang === undefined) {
  lang = 'en';
} else {
  lang = localStorage.lang;
}

document.body.append(fragment);

const result = document.getElementById('result');
result.setAttribute('type', 'text');

const keyboard = document.getElementById('keyboard');

const getWrapper = () => {
  const keyboardConstainer = document.createElement('div');
  keyboardConstainer.className = 'row';
  keyboardConstainer.innerHTML = '';
  keyboard.append(keyboardConstainer);
  return keyboardConstainer;
};

const generateKeys = (data) => {
  const keys = [];
  data.forEach((key) => {
    keys.push(new Keys(key));
  });
  return keys;
};

const renderKeysToDom = () => {
  arrayWithKeys.forEach((element) => {
    const wrapper = getWrapper();
    generateKeys(element).forEach((key) => {
      wrapper.append(key.generateKey());
    });
  });
};

const setDefaultLanguage = () => {
  if (lang === 'en') {
    document.querySelectorAll('sup').forEach((element) => {
      element.classList.add('lang_reset');
    });
  } else {
    document.querySelectorAll('span').forEach((element) => {
      element.classList.add('lang_reset');
    });
  }
};

function upperLower() {
  capsLock = !capsLock;
  if (capsLock) {
    document.querySelectorAll('span').forEach((element) => {
      element.classList.add('uppercase');
      element.classList.remove('lowercase');
    });
    document.querySelectorAll('sup').forEach((element) => {
      element.classList.add('uppercase');
      element.classList.remove('lowercase');
    });
  } else {
    document.querySelectorAll('span').forEach((element) => {
      element.classList.add('lowercase');
      element.classList.remove('uppercase');
    });
    document.querySelectorAll('sup').forEach((element) => {
      element.classList.add('lowercase');
      element.classList.remove('uppercase');
    });
  }
}

const cancelCommandKeysDefaultActions = (e) => {
  switch (e.key) {
    case 'Tab':
      e.preventDefault();
      document.getElementById('result').value += '   ';
      break;
    case 'Alt':
      e.preventDefault();
      document.getElementById('result').focus();
      break;
    case 'Control':
      e.preventDefault();
      document.getElementById('result').focus();
      break;
    default:
      document.getElementById('result').focus();
      break;
  }
};

document.addEventListener('keydown', cancelCommandKeysDefaultActions);

const addKeysClickHandler = () => {
  document.querySelectorAll('.key').forEach((element) => {
    element.addEventListener('click', (e) => {
      switch (element.id) {
        case 'Backspace':
          document.getElementById('result').value = document
            .getElementById('result')
            .value.substr(
              0,
              document.getElementById('result').value.length - 1,
            );
          localStorage.setItem('result', result.value);
          break;
        case 'Enter':
          document.getElementById('result').value += '\n';
          localStorage.setItem('result', result.value);
          break;
        case 'Tab':
          e.preventDefault();
          document.getElementById('result').value += '   ';
          document.getElementById('result').focus();
          localStorage.setItem('result', result.value);
          break;
        case 'CapsLock':
          upperLower();
          localStorage.setItem('result', result.value);
          break;
        default:
          if (lang === 'en') {
            document.getElementById('result').value += capsLock
              ? element.getAttribute('value').toUpperCase()
              : element.getAttribute('value').toLowerCase();
            localStorage.setItem('result', result.value);
          } else if (capsLock) {
            if (element.getAttribute('valueRus') == null) {
              document.getElementById('result').value += element.getAttribute(
                'value',
              );
              localStorage.setItem('result', result.value);
            } else {
              document.getElementById('result').value += element
                .getAttribute('valueRus')
                .toUpperCase();
            }
            localStorage.setItem('result', result.value);
          } else if (element.getAttribute('valueRus') == null) {
            document.getElementById('result').value += element.getAttribute(
              'value',
            );
          } else {
            document.getElementById('result').value += element
              .getAttribute('valueRus')
              .toLowerCase();
            localStorage.setItem('result', result.value);
          }
          break;
      }
    });
  });
};

function runOnKeys(func, ...codes) {
  const pressed = new Set();

  document.addEventListener('keydown', (event) => {
    document.getElementById('result').focus();
    pressed.add(event.code);
    if (event.code === 'CapsLock') {
      upperLower();
    }
    if (document.getElementById(event.code) != null) {
      document.getElementById(event.code).classList.remove('keyup');
      document.getElementById(event.code).classList.add('keydown');
    }

    if (codes.some((code) => !pressed.has(code))) {
      document.querySelectorAll('.key').forEach((element) => {
        element.classList.remove('keyup');
      });
      return;
    }

    pressed.clear();
    func();
  });

  // Clear highlight keys when out of input
  document.getElementById('result').addEventListener('focusout', () => {
    document.querySelectorAll('.key').forEach((element) => {
      element.classList.remove('keydown');
    });
  });

  document.addEventListener('keyup', (event) => {
    try {
      document.getElementById(event.code).classList.remove('keydown');
      document.getElementById(event.code).classList.add('keyup');
      pressed.delete(event.code);
    } catch (error) {
      console.warn(
        `Нажатая клавиша "${event.key}" отсутствует на виртуальной клавиатуре`,
      );
    }
  });
}

runOnKeys(
  () => {
    if (lang === 'en') {
      lang = 'ru';
    } else {
      lang = 'en';
    }
    localStorage.lang = lang;
    if (lang === 'en') {
      document.querySelectorAll('span').forEach((element) => {
        element.classList.remove('lang_reset');
      });
      document.querySelectorAll('sup').forEach((element) => {
        element.classList.add('lang_reset');
      });
    } else {
      document.querySelectorAll('span').forEach((element) => {
        element.classList.add('lang_reset');
      });
      document.querySelectorAll('sup').forEach((element) => {
        element.classList.remove('lang_reset');
      });
    }
  },
  'AltLeft',
  'ShiftLeft',
);

result.value = localStorage.getItem('result');
result.oninput = () => {
  localStorage.setItem('result', result.value);
};
result.onchange = () => {
  localStorage.setItem('result', result.value);
};

window.onload = () => {
  // Render Keys
  if (arrayWithKeys) {
    renderKeysToDom();
  }

  addKeysClickHandler();
  setDefaultLanguage();
};
