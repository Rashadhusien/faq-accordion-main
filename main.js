let btn = document.querySelectorAll("button");

btn.forEach((e) => {
  e.onclick = (l) => {
    if (l.target.classList[0] !== "minus") {
      l.target.classList.add("minus");
      e.parentElement.parentElement.children[1].style.display = "block";
    } else {
      l.target.classList.remove("minus");
      e.parentElement.parentElement.children[1].style.display = "none";
    }
  };
});
