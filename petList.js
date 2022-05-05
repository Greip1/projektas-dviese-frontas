// -----------------------------------------
const baseUrl = 'http://localhost:3306/api';
const containerEl = document.querySelector('.card-container');
// --------------------------------------
function makeEl(tagName, text, dest, elClas = null) {
  const el = document.createElement(tagName);
  el.innerHTML = text;
  if (elClas) el.className = elClas;
  dest.append(el);
  return el;
}

//--------------------------------------

function createCard(cardObj) {
  const kortele = makeEl('div', '', containerEl, 'card');
  makeEl('h4', cardObj.name, kortele, 'card-name');
  makeEl('p', cardObj.dod, kortele, 'card-date');
  makeEl('p', cardObj.client_email, kortele, 'card-email');
  const btnContEl = makeEl('div', '', kortele, 'buttons-container');
  makeEl(
    'button',
    `<a href="./healthLog.html?${cardObj.id}">VIEW LOG</a>`,
    btnContEl,
    'main-color-btn btn'
  );
  const deleteBtnEl = makeEl('button', 'DELETE', btnContEl, 'reverse-color-btn btn');
  // --------------------------------------
  deleteBtnEl.addEventListener('click', () => {
    deletePet(cardObj.id);
  });
}

function renderCard(petsArr) {
  containerEl.innerHTML = '';
  petsArr.forEach((petObj) => {
    createCard(petObj);
  });
}
// --------------------------------GET
// http://localhost:3306/api/pets/notArchived
async function getPets() {
  const resp = await fetch(`${baseUrl}/pets/notArchived`);
  const dataJs = await resp.json();
  renderCard(dataJs);
}

getPets();
// ------------------------------DELETE
// http://localhost:3306/api/pets/row/delete/1
async function deletePet(id) {
  const patvirtinimas = confirm('Ar tikrai trinti?');
  if (patvirtinimas === false) return;
  const resp = await fetch(`${baseUrl}/pets/row/delete/${id}`);
  //   const dataJs = await resp.json();
  getPets();
}
