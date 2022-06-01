import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class FilePickerComponent extends Component {
  constructor(...args) {
    super(...args);
  }
  //size in MB
  @tracked maxSize = 5;

  @tracked fileName = null;

  @tracked errorMessage = null;

  addFileEventListener(element) {
    const btn = document.querySelector('#btn-id');
    // eslint-disable-next-line no-unused-vars
    btn.addEventListener('click', (evt) => {
      element.click();
    });
  }

  @action incrementSize() {
    this.maxSize++;
  }

  @action decrementSize() {
    this.maxSize--;
  }

  @action addFile(event) {
    const file = event.target.files[0];

    if (file.size / 1000000 > this.maxSize) {
      this.errorMessage =
        'Please select a file smaller than ' + this.maxSize + ' MB.';
      this.fileName = null;
    } else {
      this.errorMessage = null;
      this.fileName = file.name;
    }
  }
}
