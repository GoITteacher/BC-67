import { v4 as uuidv4 } from 'uuid';

export class Message {
  constructor(username, email, text) {
    this.id = uuidv4();
    this.username = username;
    this.email = email;
    this.text = text;
  }

  toString() {
    return `<li class="box message" data-id="${this.id}">
    <h3>${this.username} - ${this.email}</h3>
    <div class="fb">
      <p class="message-desc">
       ${this.text}
      </p>
    </div>
    <button class="form-control" data-type="show">SHOW MODAL</button>
    <button class="form-control" data-type="delete">DELETE</button>
  </li>`;
  }
}
