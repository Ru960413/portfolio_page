let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
    console.log("option clicked:", mode);
  });
}

let theme = localStorage.getItem("theme");

//if the user is a first time visitor, set the theme to light
if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "static/css/default.css";
  } else if (mode == "dark") {
    document.getElementById("theme-style").href = "static/css/dark.css";
  } else if (mode == "purple") {
    document.getElementById("theme-style").href = "static/css/purple.css";
  } else {
    document.getElementById("theme-style").href = "static/css/green.css";
  }

  // set up the theme in localStorage (to remember the theme)
  localStorage.setItem("theme", mode);
}
