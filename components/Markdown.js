const fragment = document.createDocumentFragment();

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
fragment.append(wrapper);

const input = document.createElement('textarea');
input.setAttribute('id', 'result');
input.setAttribute('rows', '5');
input.setAttribute('autofocus', '');
wrapper.append(input);

const keyboard = document.createElement('div');
keyboard.setAttribute('id', 'keyboard');
wrapper.append(keyboard);

export default fragment;
