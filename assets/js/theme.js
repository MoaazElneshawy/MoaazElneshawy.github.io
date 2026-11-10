// Applied before first paint (loaded synchronously in <head>) to avoid a theme flash.
(function () {
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  var theme = saved === "light" || saved === "dark"
    ? saved
    : (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  document.documentElement.setAttribute("data-theme", theme);
})();
