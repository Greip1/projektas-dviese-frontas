console.log('Prescription');
//---------------------------
const formEl = document.forms[0];
const inputSelectEl = document.getElementById('select');
const commentsEl = formEl.comment;
console.log(commentsEl);
//---------------------------
const nameIdEl = window.location.search.slice(1);

//-----------------------------
const btnEl = document.querySelector('.btn');

//----------------------------Selecto uzpildymas
async function getMedication() {
  const resp = await fetch('http://localhost:3306/api/medications');
  const dataJs = await resp.json();
  console.log(dataJs);
  pildomSelecta(dataJs);
}
getMedication();

function pildomSelecta(arr) {
  arr.forEach((obj) => {
    const creatOption = document.createElement('option');
    creatOption.textContent = obj.name;
    creatOption.value = obj.id;
    creatOption.className = 'option';
    inputSelectEl.append(creatOption);
  });
}

//--------------------------------- postinu Prescription'a

btnEl.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(inputSelectEl.value);

  const presObj = {
    medication_id: inputSelectEl.value,
    pet_id: nameIdEl,
    comment: commentsEl.value,
  };
  console.log(presObj);
  addPrescription(presObj);
});

//--------------

async function addPrescription(newPrescription) {
  const resp = await fetch('http://localhost:3306/api/prescriptions/row', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPrescription),
  });
  const atsinJs = await resp.json();
  console.log(atsinJs);
  //   window.location.href = 'petList.html';
}
