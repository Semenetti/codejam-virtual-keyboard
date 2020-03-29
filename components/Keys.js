export default class Keys {
  constructor({
    value, valueRus, id, innerHTML,
  }) {
    this.value = value;
    this.valueRus = valueRus;
    this.id = id;
    this.innerHTML = innerHTML;
  }

  // Keys generator
  generateKey() {
    const key = document.createElement('div');
    key.className = 'key';
    key.setAttribute('id', this.id);
    key.setAttribute('value', this.value);
    key.setAttribute('valueRus', this.valueRus);
    key.innerHTML = this.innerHTML;

    return key;
  }
}
