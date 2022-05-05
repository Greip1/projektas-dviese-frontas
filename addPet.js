console.log('Ieshkom suns');
//---------------------------
const formEl = document.forms[0];
const inputNameEl = formEl.name;
const inputDodEl = formEl.dod;
const inputEmailEl = formEl.email;
//---------------------------
const btnEl = document.querySelector('.btn');

//----------------------------

btnEl.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('click');
  const newPetObj = petString();
  //   console.log(newPetObj);
  addPet(newPetObj);
});

function petString() {
  const petObj = {
    name: inputNameEl.value,
    dod: inputDodEl.value,
    client_email: inputEmailEl.value,
  };
  return petObj;
}

async function addPet(newPet) {
  const resp = await fetch('http://localhost:3306/api/pets/row', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPet),
  });
  const atsinJs = await resp.json();
  console.log(atsinJs);
  window.location.href = 'petList.html';
}
