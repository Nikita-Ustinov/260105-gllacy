var btn = document.querySelector(".feedback_btn");
var hidden_form = document.querySelector(".heeden_feedback");
var close = hidden_form.querySelector(".close_form");
var over_lay = document.querySelector(".over_lay");
// var your_name_label = document.querySelector(".your_name label");
// var your_name_input = document.querySelector(".your_name input");
// var your_mail_label = document.querySelector(".your_mail label");
// var your_mail_input = document.querySelector(".your_mail input");

// your_name_input.addEventListener("click", function(e) {
//   if (your_name_input.value) {
//     your_name_label.classList.toggle("not_hidden");
//   }
//  });
//
//  your_mail_input.addEventListener("click", function(e) {
//    if (your_mail_input.value) {
//      your_mail_label.classList.toggle("not_hidden");
//    }
//   });


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
