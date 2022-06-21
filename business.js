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