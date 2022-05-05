/* <div class="card">
<h4 class="card-name">name</h4>
<p class="card-date">date of birth</p>
<p class="card-email">email</p>
<div class="buttons-container">
  <button class="main-color-btn btn">
    <a href="./healthLog.html">VIEW LOG</a>
  </button>
  <button class="reverse-color-btn btn">DELETE</button>
</div>
</div> */
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
  makeEl('button', '<a href="./healthLog.html">VIEW LOG</a>', btnContEl, 'main-color-btn btn');
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

async function getPets() {
  const resp = await fetch(`${baseUrl}/pets`);
  const dataJs = await resp.json();
  renderCard(dataJs);
}

getPets();
// ------------------------------DELETE
async function deletePet(id) {
  const patvirtinimas = confirm('Ar tikrai trikti?');
  if (patvirtinimas === false) return;
  const resp = await fetch(`${baseUrl}/pets/${id}`);
  const dataJs = await resp.json();
  getPets();
}
