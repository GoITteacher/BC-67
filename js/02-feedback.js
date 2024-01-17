const STORAGE_KEY = 'user-data';

const form = document.querySelector('.feedback-form');

// ==========================
form.addEventListener('input', onFormInput);
function onFormInput(event) {
  const name = form.elements.name.value;
  const message = form.elements.message.value;
  const data = { name, message };

  saveToLS(STORAGE_KEY, data);
}
// =========================

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const name = form.elements.name.value;
  const message = form.elements.message.value;

  const data = { name, message };

  console.log(data);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

// =========================
function saveToLS(key, value) {
  const zip = JSON.stringify(value);
  localStorage.setItem(key, zip);
}

function loadFromLS(key) {
  const zip = localStorage.getItem(key);
  try {
    const data = JSON.parse(zip);
    return data;
  } catch {
    return zip;
  }
}

// =========================

function restoreData() {
  const data = loadFromLS(STORAGE_KEY) || {};
  form.elements.name.value = data.name || '';
  form.elements.message.value = data.message || '';
}

restoreData();
