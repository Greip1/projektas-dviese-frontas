const baseUrl = 'http://localhost:3306/api';
const containerEl = document.querySelector('.card-container');
const nameIdEl = window.location.search.slice(1);
const nameEl = document.querySelector('.name-span');

// http://localhost:3306/api/pets/select/

// =================== name===============================
async function getName() {
  const resp = await fetch(`${baseUrl}/pets/select/${nameIdEl}`);
  const dataJs = await resp.json();
  nameEl.textContent = dataJs[0].name;
  console.log(dataJs);
}
getName();
// ==========================================================
async function getLog() {
  const resp = await fetch(`${baseUrl}/prescr-pet-med`);
  const dataJs = await resp.json();
  renderCard(dataJs);
}
getLog();
// ----------------------------------------------------
function makeEl(tagName, text, dest, elClas = null) {
  const el = document.createElement(tagName);
  el.innerHTML = text;
  if (elClas) el.className = elClas;
  dest.append(el);
  return el;
}

//-------------------------------------------------------

function createCard(cardObj) {
  const kortele = makeEl('div', '', containerEl, 'card');
  makeEl('h4', cardObj.name, kortele, 'card-name');
  makeEl('p', cardObj.description, kortele, 'card-description');
  makeEl('p', cardObj.timestamp, kortele, 'card-time');
}
//  --------------------------------------------------------
function renderCard(petsArr) {
  containerEl.innerHTML = '';
  petsArr.forEach((petObj) => {
    createCard(petObj);
  });
}
