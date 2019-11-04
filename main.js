const row1Keys = [{
  value: '1', valueR: '1', id: 'Digit1', innerHTML: '1',
}, {
  value: '2', valueR: '2', id: 'Digit2', innerHTML: '2',
}, {
  value: '3', valueR: '3', id: 'Digit3', innerHTML: '3',
}, {
  value: '4', valueR: '4', id: 'Digit4', innerHTML: '4',
}, {
  value: '5', valueR: '5', id: 'Digit5', innerHTML: '5',
}, {
  value: '6', valueR: '6', id: 'Digit6', innerHTML: '6',
}, {
  value: '7', valueR: '7', id: 'Digit7', innerHTML: '7',
}, {
  value: '8', valueR: '8', id: 'Digit8', innerHTML: '8',
}, {
  value: '9', valueR: '9', id: 'Digit9', innerHTML: '9',
}, {
  value: '0', valueR: '0', id: 'Digit0', innerHTML: '0',
}, {
  value: '', valueR: '', id: 'Backspace', innerHTML: 'Backspace',
}];
const row2Keys = [{
  value: '     ', valueR: '     ', id: 'Tab', innerHTML: 'Tab',
}, {
  value: 'Q', valueR: 'Й', id: 'KeyQ', innerHTML: '<span>Q</span><sup>Й</sup>',
}, {
  value: 'W', valueR: 'Ц', id: 'KeyW', innerHTML: '<span>W</span><sup>У</sup>',
}, {
  value: 'E', valueR: 'У', id: 'KeyE', innerHTML: '<span>E</span><sup>У</sup>',
}, {
  value: 'R', valueR: 'К', id: 'KeyR', innerHTML: '<span>R</span><sup>К</sup>',
}, {
  value: 'T', valueR: 'Е', id: 'KeyT', innerHTML: '<span>T</span><sup>Е</sup>',
}, {
  value: 'Y', valueR: 'Н', id: 'KeyY', innerHTML: '<span>Y</span><sup>Н</sup>',
}, {
  value: 'U', valueR: 'Г', id: 'KeyU', innerHTML: '<span>U</span><sup>Г</sup>',
}, {
  value: 'I', valueR: 'Ш', id: 'KeyI', innerHTML: '<span>I</span><sup>Ш</sup>',
}, {
  value: 'O', valueR: 'Щ', id: 'KeyO', innerHTML: '<span>O</span><sup>Щ</sup>',
}, {
  value: 'P', valueR: 'З', id: 'KeyP', innerHTML: '<span>P</span><sup>З</sup>',
}];
const row3Keys = [{
  value: '', valueR: '', id: 'CapsLock', innerHTML: 'CapsLock',
}, {
  value: 'A', valueR: 'Ф', id: 'KeyA', innerHTML: '<span>A</span><sup>Ф</sup>',
}, {
  value: 'S', valueR: 'Ы', id: 'KeyS', innerHTML: '<span>S</span><sup>Ы</sup>',
}, {
  value: 'D', valueR: 'В', id: 'KeyD', innerHTML: '<span>D</span><sup>В</sup>',
}, {
  value: 'F', valueR: 'А', id: 'KeyF', innerHTML: '<span>F</span><sup>А</sup>',
}, {
  value: 'G', valueR: 'П', id: 'KeyG', innerHTML: '<span>G</span><sup>П</sup>',
}, {
  value: 'H', valueR: 'Р', id: 'KeyH', innerHTML: '<span>H</span><sup>Р</sup>',
}, {
  value: 'J', valueR: 'О', id: 'KeyJ', innerHTML: '<span>J</span><sup>О</sup>',
}, {
  value: 'K', valueR: 'Л', id: 'KeyK', innerHTML: '<span>K</span><sup>Л</sup>',
}, {
  value: 'L', valueR: 'Д', id: 'KeyL', innerHTML: '<span>L</span><sup>Д</sup>',
}, {
  value: '', valueR: '', id: 'Enter', innerHTML: 'Enter',
}];
const row4Keys = [{
  value: '', valueR: '', id: 'ShiftLeft', innerHTML: 'Shift',
}, {
  value: 'Z', valueR: 'Я', id: 'KeyZ', innerHTML: '<span>Z</span><sup>Я</sup>',
}, {
  value: 'X', valueR: 'Ч', id: 'KeyX', innerHTML: '<span>X</span><sup>Ч</sup>',
}, {
  value: 'C', valueR: 'С', id: 'KeyC', innerHTML: '<span>C</span><sup>С</sup>',
}, {
  value: 'V', valueR: 'М', id: 'KeyV', innerHTML: '<span>V</span><sup>М</sup>',
}, {
  value: 'B', valueR: 'И', id: 'KeyB', innerHTML: '<span>B</span><sup>И</sup>',
}, {
  value: 'N', valueR: 'Т', id: 'KeyN', innerHTML: '<span>N</span><sup>Т</sup>',
}, {
  value: 'M', valueR: 'Ь', id: 'KeyM', innerHTML: '<span>M</span><sup>Ь</sup>',
}, {
  value: ',', valueR: 'Б', id: 'Comma', innerHTML: '<span>,</span><sup>Б</sup>',
}, {
  value: '.', valueR: 'Ю', id: 'Period', innerHTML: '<span>.</span><sup>Ю</sup>',
}, {
  value: '', valueR: '', id: 'ShiftRight', innerHTML: 'Shift',
}];
const row5Keys = [{
  value: '', valueR: '', id: 'ControlLeft', innerHTML: 'Ctrl',
}, {
  value: '', valueR: '', id: 'AltLeft', innerHTML: 'Alt',
}, {
  value: ' ', valueR: ' ', id: 'Space', innerHTML: '',
}, {
  value: '', valueR: '', id: 'AltRight', innerHTML: 'Alt',
}, {
  value: '', valueR: '', id: 'ControlRight', innerHTML: 'Ctrl',
}];

let capsLock = true;
let lang = true;

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
    key.setAttribute('valueR', rowKeys[i].valueR);
    key.innerHTML = rowKeys[i].innerHTML;
    row.append(key);
  }
}
createRow(1, row1Keys);
createRow(2, row2Keys);
createRow(3, row3Keys);
createRow(4, row4Keys);
createRow(5, row5Keys);

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

document.querySelectorAll('.key').forEach((element) => {
  element.addEventListener('click', () => {
    switch (element.id) {
      case 'Backspace':
        document.getElementById('result').value = document.getElementById('result').value.substr(0, document.getElementById('result').value.length - 1);
        break;
      case 'Enter':
        document.getElementById('result').value += '\n';
        break;
      case 'CapsLock':
        upperLower();
        break;
      default:
        if (lang) {
          capsLock
            ? document.getElementById('result').value += element.getAttribute('value').toUpperCase()
            : document.getElementById('result').value += element.getAttribute('value').toLowerCase();
        } else if (capsLock) {
          if (element.getAttribute('valueR') == null) {
            document.getElementById('result').value += element.getAttribute('value');
          } else {
            document.getElementById('result').value += element.getAttribute('valueR').toUpperCase();
          }
        } else if (element.getAttribute('valueR') == null) {
          document.getElementById('result').value += element.getAttribute('value');
        } else {
          document.getElementById('result').value += element.getAttribute('valueR').toLowerCase();
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
    document.getElementById(event.code).classList.remove('keyup');
    document.getElementById(event.code).classList.add('keydown');

    for (const code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();
    func();
  });

  document.addEventListener('keyup', (event) => {
    document.getElementById(event.code).classList.remove('keydown');
    document.getElementById(event.code).classList.add('keyup');
    pressed.delete(event.code);
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
