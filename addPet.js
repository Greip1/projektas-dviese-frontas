console.log('Ieshkom suns');
//---------------------------
const formEl = document.forms[0];
const inputNameEl = formEl.name;
const inputDodEl = formEl.dod;
const inputEmailEl = formEl.email;
//---------------------------
const btnEl = document.querySelector('.btn');

//----------------------------

btnEl.addEventListener('click', () => {
  console.log('click');
});
