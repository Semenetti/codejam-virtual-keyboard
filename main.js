let keysRow1En = ['1','2','3','4','5','6','7','8','9','0','Backspace'],    
    keysRow1Value = ['1','2','3','4','5','6','7','8','9','0','Backspace'],    
    keysRow1ValueRus = ['1','2','3','4','5','6','7','8','9','0','Backspace'],    
    keysRow2En = ['Tab','<span>Q</span><sup>Й</sup>','<span>W</span><sup>Ц</sup>','<span>E</span><sup>У</sup>','<span>R</span><sup>К</sup>','<span>T</span><sup>E</sup>','<span>Y</span><sup>Н</sup>','<span>U</span><sup>Г</sup>','<span>I</span><sup>Ш</sup>','<span>O</span><sup>Щ</sup>','<span>P</span><sup>З</sup>'],
    keysRow2Value = ['Tab','Q','W','E','R','T','Y','U','I','O','P'],
    keysRow2ValueRus = ['Tab','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З'],
    keysRow3En = ['Capslock','<span>A</span><sup>Ф</sup>','<span>S</span><sup>Ы</sup>','<span>D</span><sup>В</sup>','<span>F</span><sup>А</sup>','<span>G</span><sup>П</sup>','<span>H</span><sup>Р</sup>','<span>J</span><sup>О</sup>','<span>K</span><sup>Л</sup>','<span>L</span><sup>Д</sup>','Enter'],
    keysRow3Value = ['CapsLock','A','S','D','F','G','H','J','K','L','Enter'],
    keysRow3ValueRus = ['Tab','Ф','Ы','В','А','П','Р','О','Л','Д','Enter'],
    keysRow4En = ['ShiftLeft','<span>Z</span><sup>Я</sup>','<span>X</span><sup>Ч</sup>','<span>C</span><sup>С</sup>','<span>V</span><sup>М</sup>','<span>B</span><sup>И</sup>','<span>N</span><sup>Т</sup>','<span>M</span><sup>Ь</sup>','<span>,</span><sup>Б</sup>','<span>.</span><sup>Ю</sup>','ShiftRight'],
    keysRow4Value = ['ShiftLeft','Z','X','C','V','B','N','M',',','.','ShiftRight'],
    keysRow4ValueRus = ['ShiftLeft','Я','Ч','С','М','И','Т','Ь','Б','Ю','ShiftRight'],
    keysRow5En = ['ControlLeft','AltLeft','Space', 'AltRight', 'ControlRight'],
    keysRow5Value = ['ControlLeft','AltLeft','Space', 'AltRight', 'ControlRight'];
    keysRow5ValueRus = ['ControlLeft','AltLeft','Space', 'AltRight', 'ControlRight'];
    
let wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.append(wrapper);

let input = document.createElement('textarea');
input.setAttribute('id', 'result');
input.setAttribute('rows', '5');
input.setAttribute('autofocus', '');
wrapper.append(input);

let keyboard = document.createElement('div');
keyboard.setAttribute('id', 'keyboard');
wrapper.append(keyboard);

for (let i = 1; i <= 5; i++) {
    let row = document.createElement('div');
    row.setAttribute('id', 'row' + i);    
    keyboard.append(row);
}

fillKey(keysRow1En, row1);
fillKey(keysRow2En, row2, keysRow2Value, keysRow2ValueRus);
fillKey(keysRow3En, row3, keysRow3Value, keysRow3ValueRus);
fillKey(keysRow4En, row4, keysRow4Value, keysRow4ValueRus);
fillKey(keysRow5En, row5, keysRow5Value);

function fillKey(x,y,z,v) {
    for (let i = 0; i < x.length; i++) {
        let key = document.createElement('div');
        key.className = 'key';
        if (x[i] == 'Space') {
           key.innerHTML = ' ';
           key.setAttribute('id', 'Space');
           key.setAttribute('value', ' ')
        } else if (x[i] == 'Backspace') {
            key.innerHTML = x[i];
            key.setAttribute('value', '');
            key.setAttribute('id', 'Backspace');
        } else if (x[i] == 'Capslock') {
            key.innerHTML = x[i];
            key.setAttribute('value', '');
            key.setAttribute('id', 'CapsLock');
        } else if (x[i] == 'Enter') {
            key.innerHTML = x[i];
            key.setAttribute('value', '');
            key.setAttribute('id', 'Enter'); 
        } else if (x[i] == 'ShiftLeft') {
            key.innerHTML = 'Shift';
            key.setAttribute('value', '');
            key.setAttribute('id', x[i]);
        } else if (x[i] == 'ShiftRight') {
            key.innerHTML = 'Shift';
            key.setAttribute('value', '');
            key.setAttribute('id', 'ShiftRight');
        }  else if (x[i] == 'ControlLeft') {
            key.innerHTML = 'Ctrl';
            key.setAttribute('value', '');
            key.setAttribute('id', 'ControlLeft');
        } else if (x[i] == 'ControlRight') {
            key.innerHTML = 'Ctrl';
            key.setAttribute('value', '');
            key.setAttribute('id', x[i]);
        } else if (x[i] == 'AltLeft') {
            key.innerHTML = 'Alt';
            key.setAttribute('value', '');
            key.setAttribute('id', 'AltLeft');
        }  else if (x[i] == 'AltRight') {
            key.innerHTML = 'Alt';
            key.setAttribute('value', '');
            key.setAttribute('id', x[i]);
        }  else if (x[i] == 'Tab') {
            key.innerHTML = x[i];
            key.setAttribute('value', '       ');
            key.setAttribute('id', 'Tab');
        }  else if (x[i] == '0') {
            key.innerHTML = x[i];
            key.setAttribute('value', '0');
            key.setAttribute('id', 'Digit0');
        }  else if (x[i] == '1') {
            key.innerHTML = x[i];
            key.setAttribute('value', '1');
            key.setAttribute('id', 'Digit1');
        }  else if (x[i] == '2') {
            key.innerHTML = x[i];
            key.setAttribute('value', '2');
            key.setAttribute('id', 'Digit2');
        }  else if (x[i] == '3') {
            key.innerHTML = x[i];
            key.setAttribute('value', '3');
            key.setAttribute('id', 'Digit3');
        }  else if (x[i] == '4') {
            key.innerHTML = x[i];
            key.setAttribute('value', '4');
            key.setAttribute('id', 'Digit4');
        }  else if (x[i] == '5') {
            key.innerHTML = x[i];
            key.setAttribute('value', '5');
            key.setAttribute('id', 'Digit5');
        }  else if (x[i] == '6') {
            key.innerHTML = x[i];
            key.setAttribute('value', '6');
            key.setAttribute('id', 'Digit6');
        }  else if (x[i] == '7') {
            key.innerHTML = x[i];
            key.setAttribute('value', '7');
            key.setAttribute('id', 'Digit7');
        }  else if (x[i] == '8') {
            key.innerHTML = x[i];
            key.setAttribute('value', '8');
            key.setAttribute('id', 'Digit8');
        }  else if (x[i] == '9') {
            key.innerHTML = x[i];
            key.setAttribute('value', '9');
            key.setAttribute('id', 'Digit9');
        }  else {
            key.setAttribute('id', 'Key'+z[i]);
            key.setAttribute('value', z[i]);
            key.setAttribute('valueR', v[i]);
            key.innerHTML = x[i];
        };       
        y.append(key);         
    } 
}

document.querySelectorAll(".key").forEach(element => {    
    element.addEventListener("click", () => {
        switch (element.id) {
            case 'Backspace':
                document.getElementById('result').value = document.getElementById('result').value.substr(0,document.getElementById('result').value.length-1);
                break;
            case 'Enter':
                document.getElementById('result').value += '\n';
                break;
            default:
                if (lang) {
                capsLock ? 
                document.getElementById('result').value += element.getAttribute('value').toUpperCase() : 
                document.getElementById('result').value += element.getAttribute('value').toLowerCase()  
                } else {
                
                if (capsLock) {
                    if (element.getAttribute('valueR') == null) {
                        document.getElementById('result').value += element.getAttribute('value');
                    } else {
                        document.getElementById('result').value += element.getAttribute('valueR').toUpperCase();
                    }
                } else {
                    if (element.getAttribute('valueR') == null) {
                        document.getElementById('result').value += element.getAttribute('value');
                    } else {
                        document.getElementById('result').value += element.getAttribute('valueR').toLowerCase();
                    }                    
                }                
                }
                break;
        }
    });
});

let capsLock = true;
CapsLock.onclick = function() {
    upperLower();
}   

document.addEventListener('keydown', function(event) {
    if (event.code == 'CapsLock') {
        upperLower();  
    }
});

function upperLower() {
    capsLock = !capsLock;
    if (capsLock) {
        document.querySelectorAll("span").forEach(element => {            
                element.textContent = element.textContent.toUpperCase();              
        });
        document.querySelectorAll("sup").forEach(element => {            
            element.textContent = element.textContent.toUpperCase();                 
    });
    } else {
        document.querySelectorAll("span").forEach(element => {            
            element.textContent = element.textContent.toLowerCase();           
    });
    document.querySelectorAll("sup").forEach(element => {            
        element.textContent = element.textContent.toLowerCase();           
    });
    }
}

  function runOnKeys(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function(event) {
      pressed.add(event.code);     
      document.getElementById(event.code).style.background='#f9de53';

      for (let code of codes) { 
        console.log(code)
        if (!pressed.has(code)) {
          return;
        }
      }
      pressed.clear();
      func();
    });

    document.addEventListener('keyup', function(event) {
    document.getElementById(event.code).style.background='';
    pressed.delete(event.code);
    });
  }
  let lang = true;
  runOnKeys(
    () => {
        lang = !lang;
        if (lang) {
            document.querySelectorAll("span").forEach(element => {            
            element.style.fontWeight="900";
            element.style.fontSize="14px";

            });
            document.querySelectorAll("sup").forEach(element => {            
            element.style.fontWeight="400";
            element.style.fontSize="10px";                 
             });
        } else {
            document.querySelectorAll("span").forEach(element => {            
            element.style.fontWeight="400";
            element.style.fontSize="10px";                    
            });
            document.querySelectorAll("sup").forEach(element => {            
            element.style.fontWeight="900";                     
            element.style.fontSize="14px";
            });
        }
    },
    "AltLeft",
    "ShiftLeft", 
    );

 