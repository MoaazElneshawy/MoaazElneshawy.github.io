(function () {
  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // Contact email assembled at runtime so it is not scrapable from the HTML source.
  var el = document.getElementById("contact-email");
  if (el) {
    var addr = ["m", "elneshawy"].join(".") + "@" + "gmail" + "." + "com";
    el.textContent = addr;
    el.setAttribute("href", "mailto:" + addr);
  }
})();
