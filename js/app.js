function Cookies(functions) {
  const container = document.querySelector('.cookies-container');
  const save = document.querySelector('.cookies-save');
if (!container || !save) return null;


const localFormPref = JSON.parse(window.localStorage.getItem('cookies-pref'));
if (localPref) activateFunctions(localPref);



  function getFormPref() {
    return [document.querySelectorAll('[data-function]')]
  .filter ((el) => el.checked)
  .map( (el) => el.getAttribute('data-functions'));

  }


function activateFunctions(pref){
  pref.forEach((f) => functions[f]());
  container.style.display = 'none';
window.localStorage.setItem('cookies-pref', JSON.stringify(pref))
;
}



function handleSave() {
  const pref = getFormPref ();
  activateFunctions(pref);
}


save.addEventListener('click', handleSave);

function marketing(){
  console.log('function de marketing')

}

function analytics(){
  console.log('function de analitica')

}

 cookies({
   marketing: 's',
   analytics: 'a',

 });


save.addEventListener('click', handleSave);
}


var check = document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma() {
  let id = check.checked;
  if (id == true) {
    location.href = "es/index.html";
  } else {
    location.href = "../index.html";
  }
}
