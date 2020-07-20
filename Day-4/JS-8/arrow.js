//using function

/*function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "do you agree?",
  function () {
    alert("You Agreed");
  },
  function () {
    alert("you canceled the execution.");
  }
);
*/

//using arrow function

let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
