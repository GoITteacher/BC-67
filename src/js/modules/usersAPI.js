import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:3000/users',
  headers: { X_RAPID_KEY: '123123123123' },
});

class UserAPIv1 {
  static BASE_URL = '';
  static END_POINT = '';

  async getUsers() {
    const url = `${UserAPI.BASE_URL}${UserAPI.END_POINT}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async createUser(user) {
    const url = `${UserAPI.BASE_URL}${UserAPI.END_POINT}`;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    const response = await fetch(url, options);
    const newUser = await response.json();
    return newUser;
  }

  async updateUser({ id, ...user }) {
    const url = `${UserAPI.BASE_URL}${UserAPI.END_POINT}/${id}`;

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    const response = await fetch(url, options);
    const newUser = await response.json();
    return newUser;
  }

  async resetUser({ id, ...user }) {
    const url = `${UserAPI.BASE_URL}${UserAPI.END_POINT}/${id}`;

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    const response = await fetch(url, options);
    const newUser = await response.json();
    return newUser;
  }

  async removeUser(id) {
    const url = `${UserAPI.BASE_URL}${UserAPI.END_POINT}/${id}`;

    const options = {
      method: 'DELETE',
    };

    const response = await fetch(url, options);
    const newUser = await response.json();
    return newUser;
  }
}

export class UserAPI {
  async getUsers() {
    const response = await axios.get();
    return response.data;
  }

  async createUser(user) {
    const response = await axios.post('', user);
    return response.data;
  }

  async updateUser({ id, ...user }) {
    const response = await axios.patch(`/${id}`, user);
    return response.data;
  }

  async resetUser({ id, ...user }) {
    const response = await axios.put(`/${id}`, user);
    return response.data;
  }

  async removeUser(id) {
    const response = await axios.delete(`/${id}`);
    return response.data;
  }
}
