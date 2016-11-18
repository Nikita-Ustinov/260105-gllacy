var btn = document.querySelector(".feedback_btn");
var hidden_form = document.querySelector(".heeden_feedback");
var close = hidden_form.querySelector(".close_form");
var over_lay = document.querySelector(".over_lay");

btn.addEventListener("click", function(e) {
   hidden_form.classList.toggle("not_hidden");
   over_lay.classList.toggle("not_hidden");
});

over_lay.addEventListener("click", function(e){
   hidden_form.classList.toggle("not_hidden");
   over_lay.classList.toggle("not_hidden");
});

close.addEventListener("click", function(e) {
   hidden_form.classList.toggle("not_hidden");
   over_lay.classList.toggle("not_hidden");
});
