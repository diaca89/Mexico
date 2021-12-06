function Cookies(functions) {
  const container = document.querySelector('.cookies-container');
  const save = document.querySelector('.cookies-save');

  function getFormPref() {
    const inputs = Array.from [...document.querySelectorAll('[data-function]')];
    console.log (inputs);
  }

function handleSave() {
  const pref = getFormPref ();
}



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
