const buttons = document.querySelector(".buttons");
const tabs = buttons.querySelectorAll(".tabs");

tabs.forEach((tab) => {
  tab.addEventListener("click", showPanel);
});

function showPanel(e) {
  const targetBtn = e.target;
  const targetPanel = targetBtn.getAttribute("aria-controls");
  const tabContainer = targetBtn.parentNode;
  const mainContainer = tabContainer.parentNode;
  mainContainer
    .querySelectorAll(".cycle")
    .forEach((cycle) => cycle.setAttribute("hidden", true));
  mainContainer.querySelector([`#${targetPanel}`]).removeAttribute("hidden");
}

var btnop1 = document.getElementById("op-1");
var btnop2 = document.getElementById("op-2");
var op1Text = document.getElementById("op-1-text");
var op2Text = document.getElementById("op-2-text");

btnop1.addEventListener("click", () => {
  op1Text.style.display = "block";
  op2Text.style.display = "none";
  btnop1.style.color = "gold";
  btnop1.style.borderBottom = "3px solid gold";
  btnop2.style.color = "grey";
  btnop2.style.borderBottom = "3px solid grey";
});

btnop2.addEventListener("click", () => {
  op1Text.style.display = "none";
  op2Text.style.display = "block";
  btnop1.style.color = "grey";
  btnop1.style.borderBottom = "3px solid grey";
  btnop2.style.borderBottom = "3px solid gold";
  btnop2.style.color = "gold";
});
