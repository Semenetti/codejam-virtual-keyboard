import Keys from './components/Keys.js';
import arrayWithKeys from './components/data.js';
import fragment from './components/Markdown.js';

let capsLock = true;
let lang;

if (localStorage.lang === undefined) {
  lang = 'EN';
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
  if (lang === 'EN') {
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
  const TAB = 'Tab';
  const ALT = 'Alt';
  const CONTROL = 'Control';

  switch (e.key) {
    case TAB:
      e.preventDefault();
      addTextAtCaret('   ');
      break;
    case ALT:
      e.preventDefault();
      document.getElementById('result').focus();
      break;
    case CONTROL:
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
  document.getElementById('keyboard').addEventListener('click', (e) => {
    const currentClickedKey = e.target.closest('.key');
    const BACKSPACE = 'Backspace';
    const ENTER = 'Enter';
    const TAB = 'TAB';
    const CAPSLOCK = 'CapsLock';
    const ARROWUP = 'ArrowUp';
    const ARROWDOWN = 'ArrowDown';
    const ARROWLEFT = 'ArrowLeft';
    const ARROWRIGHT = 'ArrowRight';
    const DELETE = 'Delete';

    if (currentClickedKey) {
      switch (e.target.closest('.key').id) {
        case BACKSPACE:
          addTextAtCaret('Backspace');
          break;

        case ENTER:
          addTextAtCaret('\n');
          break;

        case TAB:
          e.preventDefault();
          addTextAtCaret('   ');
          break;

        case CAPSLOCK:
          upperLower();
          break;

        case ARROWUP:
          addTextAtCaret('ArrowUp');
          break;

        case ARROWDOWN:
          addTextAtCaret('ArrowDown');
          break;

        case ARROWLEFT:
          addTextAtCaret('ArrowLeft');
          break;

        case ARROWRIGHT:
          addTextAtCaret('ArrowRight');
          break;

        case DELETE:
          addTextAtCaret('Del');
          break;

        default:
          if (lang === 'EN') {
            if (capsLock) {
              addTextAtCaret(currentClickedKey.getAttribute('value').toUpperCase());
            } else {
              addTextAtCaret(currentClickedKey.getAttribute('value').toLowerCase());
            }
          } else if (capsLock) {
            if (currentClickedKey.getAttribute('valueRus') == null) {
              addTextAtCaret(currentClickedKey.getAttribute('value'));
              localStorage.setItem('result', result.value);
            } else {
              addTextAtCaret(currentClickedKey.getAttribute('valueRus').toUpperCase());
            }
            localStorage.setItem('result', result.value);
          } else if (currentClickedKey.getAttribute('valueRus') == null) {
            addTextAtCaret(currentClickedKey.getAttribute('value'));
          } else {
            addTextAtCaret(currentClickedKey.getAttribute('valueRus').toLowerCase());
          }
          break;
      }
      localStorage.setItem('result', result.value);
    }
  });
};


// Change language EN/RU with pressing 'AltLeft' and 'ShiftLeft'
function langSwitchListener(func, ...codes) {
  const pressed = new Set();

  document.addEventListener('keydown', (event) => {
    document.getElementById('result').focus();
    const PRESSEDKEY = event.code;

    pressed.add(PRESSEDKEY);
    if (PRESSEDKEY === 'CapsLock') {
      upperLower();
    }
    if (document.getElementById(PRESSEDKEY) != null) {
      document.getElementById(PRESSEDKEY).classList.remove('keyup');
      document.getElementById(PRESSEDKEY).classList.add('keydown');
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
    const PRESSEDKEYUP = event.code;
    try {
      document.getElementById(PRESSEDKEYUP).classList.remove('keydown');
      document.getElementById(PRESSEDKEYUP).classList.add('keyup');
      pressed.delete(PRESSEDKEYUP);
    } catch (error) {
      console.warn(
        `Нажатая клавиша "${event.key}" отсутствует на виртуальной клавиатуре`,
      );
    }
  });
}
const SHIFT = 'ShiftLeft';
const ALT = 'AltLeft';

langSwitchListener(
  () => {
    if (lang === 'EN') {
      lang = 'RU';
    } else {
      lang = 'EN';
    }
    localStorage.lang = lang;
    if (lang === 'EN') {
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
  SHIFT,
  ALT,
);


// Save input text to localStorage
result.value = localStorage.getItem('result');

result.addEventListener('oninput', () => {
  localStorage.setItem('result', result.value);
});

result.addEventListener('onchange', () => {
  localStorage.setItem('result', result.value);
});

window.onload = () => {
  // Render Keys
  if (arrayWithKeys) {
    renderKeysToDom();
  }

  addKeysClickHandler();
  setDefaultLanguage();
};
