import { UserAPI } from './modules/usersAPI';
// ===================================================
const refs = {
  userListElem: document.querySelector('.js-user-list'),
  createUserForm: document.querySelector('.js-create-form'),
  updateUserForm: document.querySelector('.js-update-form'),
  resetUserForm: document.querySelector('.js-reset-form'),
  deleteUserForm: document.querySelector('.js-delete-form'),
};
// ============================================================

const userApi = new UserAPI();

refs.createUserForm.addEventListener('submit', onCreateUser);
refs.updateUserForm.addEventListener('submit', onUpdateUser);
refs.resetUserForm.addEventListener('submit', onResetUser);
refs.deleteUserForm.addEventListener('submit', onDeleteUser);

async function onCreateUser(e) {
  e.preventDefault();

  const userName = e.target.elements.userName.value;
  const userEmail = e.target.elements.userEmail.value;
  const userPhone = e.target.elements.userPhone.value;

  const isInvalidName = !userName.trim();
  const isInvalidEmail = !userEmail.trim();
  const isInvalidPhone = !userPhone.trim();

  const isInvalidData = isInvalidName || isInvalidEmail || isInvalidPhone;

  if (isInvalidData) {
    alert('Invalid fields');
    return;
  }

  const obj = {
    name: userName,
    email: userEmail,
    phone: userPhone,
  };

  const newUser = await userApi.createUser(obj);
  const markup = userTemplate(newUser);
  refs.userListElem.insertAdjacentHTML('afterbegin', markup);

  e.target.reset();
}

async function onUpdateUser(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const obj = {};

  formData.forEach((value, key) => {
    key = key.replace('user', '').toLowerCase();
    if (value.trim()) {
      obj[key] = value;
    }
  });

  const updatedUser = await userApi.updateUser(obj);
  const markup = userTemplate(updatedUser);
  const oldUser = document.querySelector(`[data-id="${obj.id}"]`);
  oldUser.insertAdjacentHTML('afterend', markup);
  oldUser.remove();
}

async function onResetUser(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const obj = {};

  formData.forEach((value, key) => {
    key = key.replace('user', '').toLowerCase();
    obj[key] = value;
  });

  const updatedUser = await userApi.resetUser(obj);
  const markup = userTemplate(updatedUser);
  const oldUser = document.querySelector(`[data-id="${obj.id}"]`);
  oldUser.insertAdjacentHTML('afterend', markup);
  oldUser.remove();
}

function onDeleteUser(e) {
  e.preventDefault();
  const id = e.target.elements.userId.value;
  userApi.removeUser(id);
  const oldUser = document.querySelector(`[data-id="${id}"]`);
  oldUser.remove();
}

// ============================================================
function userTemplate({ name, phone, email, avatar, id }) {
  return `<li class="card user-item" data-id="${id}">
  <img
    src="https://source.unsplash.com/500x500/?random=${id}&avatar,user,man"
    alt="#"
    class="user-avatar"
  />
  <h3>${name}</h3>
  <p>${email}</p>
  <p>${phone}</p>
</li>`;
}

function userListTemplate(users) {
  return users.map(userTemplate).join('');
}

function renderUsers(users) {
  const markup = userListTemplate(users);
  refs.userListElem.innerHTML = markup;
}

userApi.getUsers().then(renderUsers);
