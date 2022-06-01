const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value ==""){
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});


function scrollToTop(){
    window.scrollTo(0,0);
}

//const scriptURL = 'https://script.google.com/macros/s/AKfycbz4Ve-J-eJw0OEnPxT31jaJSSPx1wBUVK2kbaJq9KV395d6vxuVVUmjFC8B0uFeSeI/exec'
//const form = document.forms['google-sheet']
const scriptURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfHIZpBL7Tq1KQ1wHdNS8-juWdeHEhJXI0uuB4RUkwJN5anCA/viewform?usp=sf_link'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})

