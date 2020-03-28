const row1Keys = [
  {
    value: '1',
    valueRus: '1',
    id: 'Digit1',
    innerHTML: '1',
  },
  {
    value: '2',
    valueRus: '2',
    id: 'Digit2',
    innerHTML: '2',
  },
  {
    value: '3',
    valueRus: '3',
    id: 'Digit3',
    innerHTML: '3',
  },
  {
    value: '4',
    valueRus: '4',
    id: 'Digit4',
    innerHTML: '4',
  },
  {
    value: '5',
    valueRus: '5',
    id: 'Digit5',
    innerHTML: '5',
  },
  {
    value: '6',
    valueRus: '6',
    id: 'Digit6',
    innerHTML: '6',
  },
  {
    value: '7',
    valueRus: '7',
    id: 'Digit7',
    innerHTML: '7',
  },
  {
    value: '8',
    valueRus: '8',
    id: 'Digit8',
    innerHTML: '8',
  },
  {
    value: '9',
    valueRus: '9',
    id: 'Digit9',
    innerHTML: '9',
  },
  {
    value: '0',
    valueRus: '0',
    id: 'Digit0',
    innerHTML: '0',
  },
  {
    value: '',
    valueRus: '',
    id: 'Backspace',
    innerHTML: 'Backspace',
  },
];
const row2Keys = [
  {
    value: '     ',
    valueRus: '     ',
    id: 'Tab',
    innerHTML: 'Tab',
  },
  {
    value: 'Q',
    valueRus: 'Й',
    id: 'KeyQ',
    innerHTML: '<span>Q</span><sup>Й</sup>',
  },
  {
    value: 'W',
    valueRus: 'Ц',
    id: 'KeyW',
    innerHTML: '<span>W</span><sup>У</sup>',
  },
  {
    value: 'E',
    valueRus: 'У',
    id: 'KeyE',
    innerHTML: '<span>E</span><sup>У</sup>',
  },
  {
    value: 'R',
    valueRus: 'К',
    id: 'KeyR',
    innerHTML: '<span>R</span><sup>К</sup>',
  },
  {
    value: 'T',
    valueRus: 'Е',
    id: 'KeyT',
    innerHTML: '<span>T</span><sup>Е</sup>',
  },
  {
    value: 'Y',
    valueRus: 'Н',
    id: 'KeyY',
    innerHTML: '<span>Y</span><sup>Н</sup>',
  },
  {
    value: 'U',
    valueRus: 'Г',
    id: 'KeyU',
    innerHTML: '<span>U</span><sup>Г</sup>',
  },
  {
    value: 'I',
    valueRus: 'Ш',
    id: 'KeyI',
    innerHTML: '<span>I</span><sup>Ш</sup>',
  },
  {
    value: 'O',
    valueRus: 'Щ',
    id: 'KeyO',
    innerHTML: '<span>O</span><sup>Щ</sup>',
  },
  {
    value: 'P',
    valueRus: 'З',
    id: 'KeyP',
    innerHTML: '<span>P</span><sup>З</sup>',
  },
];
const row3Keys = [
  {
    value: '',
    valueRus: '',
    id: 'CapsLock',
    innerHTML: 'CapsLock',
  },
  {
    value: 'A',
    valueRus: 'Ф',
    id: 'KeyA',
    innerHTML: '<span>A</span><sup>Ф</sup>',
  },
  {
    value: 'S',
    valueRus: 'Ы',
    id: 'KeyS',
    innerHTML: '<span>S</span><sup>Ы</sup>',
  },
  {
    value: 'D',
    valueRus: 'В',
    id: 'KeyD',
    innerHTML: '<span>D</span><sup>В</sup>',
  },
  {
    value: 'F',
    valueRus: 'А',
    id: 'KeyF',
    innerHTML: '<span>F</span><sup>А</sup>',
  },
  {
    value: 'G',
    valueRus: 'П',
    id: 'KeyG',
    innerHTML: '<span>G</span><sup>П</sup>',
  },
  {
    value: 'H',
    valueRus: 'Р',
    id: 'KeyH',
    innerHTML: '<span>H</span><sup>Р</sup>',
  },
  {
    value: 'J',
    valueRus: 'О',
    id: 'KeyJ',
    innerHTML: '<span>J</span><sup>О</sup>',
  },
  {
    value: 'K',
    valueRus: 'Л',
    id: 'KeyK',
    innerHTML: '<span>K</span><sup>Л</sup>',
  },
  {
    value: 'L',
    valueRus: 'Д',
    id: 'KeyL',
    innerHTML: '<span>L</span><sup>Д</sup>',
  },
  {
    value: '',
    valueRus: '',
    id: 'Enter',
    innerHTML: 'Enter',
  },
];
const row4Keys = [
  {
    value: '',
    valueRus: '',
    id: 'ShiftLeft',
    innerHTML: 'Shift',
  },
  {
    value: 'Z',
    valueRus: 'Я',
    id: 'KeyZ',
    innerHTML: '<span>Z</span><sup>Я</sup>',
  },
  {
    value: 'X',
    valueRus: 'Ч',
    id: 'KeyX',
    innerHTML: '<span>X</span><sup>Ч</sup>',
  },
  {
    value: 'C',
    valueRus: 'С',
    id: 'KeyC',
    innerHTML: '<span>C</span><sup>С</sup>',
  },
  {
    value: 'V',
    valueRus: 'М',
    id: 'KeyV',
    innerHTML: '<span>V</span><sup>М</sup>',
  },
  {
    value: 'B',
    valueRus: 'И',
    id: 'KeyB',
    innerHTML: '<span>B</span><sup>И</sup>',
  },
  {
    value: 'N',
    valueRus: 'Т',
    id: 'KeyN',
    innerHTML: '<span>N</span><sup>Т</sup>',
  },
  {
    value: 'M',
    valueRus: 'Ь',
    id: 'KeyM',
    innerHTML: '<span>M</span><sup>Ь</sup>',
  },
  {
    value: ',',
    valueRus: 'Б',
    id: 'Comma',
    innerHTML: '<span>,</span><sup>Б</sup>',
  },
  {
    value: '.',
    valueRus: 'Ю',
    id: 'Period',
    innerHTML: '<span>.</span><sup>Ю</sup>',
  },
  {
    value: '',
    valueRus: '',
    id: 'ShiftRight',
    innerHTML: 'Shift',
  },
];
const row5Keys = [
  {
    value: '',
    valueRus: '',
    id: 'ControlLeft',
    innerHTML: 'Ctrl',
  },
  {
    value: '',
    valueRus: '',
    id: 'AltLeft',
    innerHTML: 'Alt',
  },
  {
    value: ' ',
    valueRus: ' ',
    id: 'Space',
    innerHTML: '',
  },
  {
    value: '',
    valueRus: '',
    id: 'AltRight',
    innerHTML: 'Alt',
  },
  {
    value: '',
    valueRus: '',
    id: 'ControlRight',
    innerHTML: 'Ctrl',
  },
];

let capsLock = true;
let lang = true;
const firstRow = 1;
const secondRow = 2;
const thirdRow = 3;
const fourthRow = 4;
const fifthRow = 5;

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.append(wrapper);

const input = document.createElement('textarea');
input.setAttribute('id', 'result');
input.setAttribute('rows', '5');
input.setAttribute('autofocus', '');
wrapper.append(input);

const keyboard = document.createElement('div');
keyboard.setAttribute('id', 'keyboard');
wrapper.append(keyboard);

function createRow(rowNumber, rowKeys) {
  const row = document.createElement('div');
  row.setAttribute('id', `row${rowNumber}`);
  keyboard.append(row);
  for (let i = 0; i < rowKeys.length; i += 1) {
    const key = document.createElement('div');
    key.className = 'key';
    key.setAttribute('id', rowKeys[i].id);
    key.setAttribute('value', rowKeys[i].value);
    key.setAttribute('valueRus', rowKeys[i].valueRus);
    key.innerHTML = rowKeys[i].innerHTML;
    row.append(key);
  }
}
createRow(firstRow, row1Keys);
createRow(secondRow, row2Keys);
createRow(thirdRow, row3Keys);
createRow(fourthRow, row4Keys);
createRow(fifthRow, row5Keys);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('sup').forEach((element) => {
    element.classList.add('lang_reset');
  });
});

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

document.querySelectorAll('.key').forEach((element) => {
  element.addEventListener('click', (e) => {
    switch (element.id) {
      case 'Backspace':
        document.getElementById('result').value = document
          .getElementById('result')
          .value.substr(0, document.getElementById('result').value.length - 1);
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
        if (lang) {
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
        // element.classList.add("keydown");
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
    lang = !lang;
    if (lang) {
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

const result = document.getElementById('result');
result.setAttribute('type', 'text')
result.value = localStorage.getItem('result');
result.oninput = () => {
  localStorage.setItem('result', result.value);
};
result.onchange = () => {
  localStorage.setItem('result', result.value);
};
