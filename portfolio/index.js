const my_projects = document.querySelector(".my_projects");

my_projects.addEventListener("mouseover", function (e) {
  hovering(e, 0.5);
});

my_projects.addEventListener("mouseout", function (e) {
  hovering(e, 1);
});
function hovering(e, opp) {
  const link = e.target.closest(".content");
  if (link) {
    const siblings = link.parentElement.querySelectorAll(".content");
    siblings.forEach((el) => (el.style.opacity = el === link ? 1 : opp));
  }
}
