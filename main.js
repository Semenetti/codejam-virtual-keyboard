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
  const keyboardContainer = document.createElement('div');
  keyboardContainer.className = 'row';
  keyboardContainer.innerHTML = '';
  keyboard.append(keyboardContainer);
  return keyboardContainer;
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

// feat: CapsLock
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

function addTextAtCaret(text) {
  const textArea = document.getElementById('result');
  let cursorPosition = textArea.selectionStart;
  let front;
  let back;
  const inputText = '';

  switch (text) {
    case 'Backspace':
      front = textArea.value.substring(0, cursorPosition - 1);
      back = textArea.value.substring(cursorPosition, textArea.value.length);
      textArea.value = front + back;

      // updateCursorPosition
      cursorPosition += inputText.length;
      textArea.selectionStart = cursorPosition - 1;
      textArea.selectionEnd = cursorPosition - 1;
      break;
    case 'Del':
      front = textArea.value.substring(0, cursorPosition);
      back = textArea.value.substring(
        cursorPosition + 1,
        textArea.value.length,
      );
      textArea.value = front + back;

      // updateCursorPosition
      cursorPosition += inputText.length;
      textArea.selectionStart = cursorPosition;
      textArea.selectionEnd = cursorPosition;
      break;

    default:
      front = textArea.value.substring(0, cursorPosition);
      back = textArea.value.substring(cursorPosition, textArea.value.length);
      textArea.value = front + text + back;

      // updateCursorPosition
      cursorPosition += text.length;
      textArea.selectionStart = cursorPosition;
      textArea.selectionEnd = cursorPosition;
      break;
  }
  textArea.focus();
}

const cancelCommandKeysDefaultActions = (e) => {
  switch (e.key) {
    case 'Tab':
      e.preventDefault();     
      addTextAtCaret('   ');
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
          addTextAtCaret('Backspace');
          break;

        case 'Enter':
          addTextAtCaret('\n');
          break;

        case 'Tab':
          e.preventDefault();
          addTextAtCaret('   ');
          break;

        case 'CapsLock':
          upperLower();
          break;

        case 'ArrowUp':
          addTextAtCaret('ArrowUp');
          break;

        case 'ArrowDown':
          addTextAtCaret('ArrowDown');
          break;

        case 'ArrowLeft':
          addTextAtCaret('ArrowLeft');
          break;

        case 'ArrowRight':
          addTextAtCaret('ArrowRight');
          break;

        case 'Delete':
          addTextAtCaret('Del');
          break;

        default:
          if (lang === 'en') {
            if (capsLock) {
              addTextAtCaret(element.getAttribute('value').toUpperCase());
            } else {
              addTextAtCaret(element.getAttribute('value').toLowerCase());
            }
          } else if (capsLock) {
            if (element.getAttribute('valueRus') == null) {
              addTextAtCaret(element.getAttribute('value'));
              localStorage.setItem('result', result.value);
            } else {
              addTextAtCaret(element.getAttribute('valueRus').toUpperCase());
            }
            localStorage.setItem('result', result.value);
          } else if (element.getAttribute('valueRus') == null) {
            addTextAtCaret(element.getAttribute('value'));
          } else {
            addTextAtCaret(element.getAttribute('valueRus').toLowerCase());
          }
          break;
      }
      localStorage.setItem('result', result.value);
    });
  });
};


// Change language EN/RU with pressing 'AltLeft' and 'ShiftLeft'
function runOnKeys(func, ...codes) {
  const pressed = new Set();

  document.addEventListener('keydown', (event) => {
    document.getElementById('result').focus();
    pressed.add(event.code);
    console.log(event.code)
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


// Save input text to localStorage
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
