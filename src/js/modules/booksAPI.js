export class BookAPI {
  static BASE_URL = 'http://localhost:3000';
  static END_POINT = '/books';

  constructor() {}

  async getBooks() {
    const url = `${BookAPI.BASE_URL}${BookAPI.END_POINT}`;
    const res = await fetch(url);
    try {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.status);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async createBook(newBook) {
    const url = `${BookAPI.BASE_URL}${BookAPI.END_POINT}`;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    };

    const res = await fetch(url, options);
    return res.json();
  }

  updateBook({ id, ...book }) {
    const url = `${BookAPI.BASE_URL}${BookAPI.END_POINT}/${id}`;

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    return fetch(url, options).then(res => res.json());
  }

  resetBook({ id, ...book }) {
    const url = `${BookAPI.BASE_URL}${BookAPI.END_POINT}/${id}`;

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    return fetch(url, options).then(res => res.json());
  }

  deleteBook(id) {
    const url = `${BookAPI.BASE_URL}${BookAPI.END_POINT}/${id}`;

    const options = {
      method: 'DELETE',
    };

    return fetch(url, options).then(res => res.json());
  }
}
