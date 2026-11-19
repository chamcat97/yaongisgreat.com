// yaongisgreat.com — language toggle + screenshot lightbox
(function () {
  var root = document.documentElement;

  function setLang(lang) {
    root.classList.remove("lang-en", "lang-ko");
    root.classList.add("lang-" + lang);
    root.lang = lang;
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  document.querySelectorAll("[data-lang-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(root.classList.contains("lang-ko") ? "en" : "ko");
    });
  });

  // Screenshot lightbox
  var box = document.querySelector(".lightbox");
  if (box) {
    var big = box.querySelector("img");
    document.querySelectorAll(".shots a").forEach(function (a) {
      a.addEventListener("click", function (ev) {
        ev.preventDefault();
        var visible = Array.prototype.find.call(a.querySelectorAll("img"), function (i) {
          return i.offsetParent !== null;
        });
        big.src = a.getAttribute("href");
        big.alt = visible ? visible.alt : "";
        box.classList.add("open");
      });
    });
    function close() { box.classList.remove("open"); big.removeAttribute("src"); }
    box.addEventListener("click", close);
    document.addEventListener("keydown", function (ev) { if (ev.key === "Escape") close(); });
  }

  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
