let barcaPopUp = document.getElementById("barca_pop_up_holder");
barcaPopUp.classList.add('active');

function show_barca_pop_up() {
    let barcaPopUp = document.getElementById("barca_pop_up_holder");
    barcaPopUp.style.display = "block";
    document.body.style.overflow = "hidden";
  }
  function hide_barca_pop_up() {
    let barcaPopUp = document.getElementById("barca_pop_up_holder");
    barcaPopUp.style.display = "none";
    document.body.style.overflow = "auto";
  }
  setTimeout(show_barca_pop_up, 7000);
  
let questionsPopUp = document.getElementById("questions_pop_up_holder");
  questionsPopUp.classList.add('active')

function show_questions_pop_up() {
    let questionsPopUp = document.getElementById("questions_pop_up_holder");
    questionsPopUp.style.display = "block";
    barcaPopUp.style.display = "none";
  }
  function hide_questions_pop_up() {
    let questionsPopUp = document.getElementById("questions_pop_up_holder");
    questionsPopUp.style.display = "none";
    document.body.style.overflow = "auto";
  }
  setTimeout(show_questions_pop_up, 30000);
