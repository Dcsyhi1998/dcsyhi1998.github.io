(() => {
  const root = document.documentElement;
  const saved = localStorage.getItem("airaw-homepage-lang");
  root.lang = saved === "ja" ? "ja" : "en";

  document.querySelectorAll(".lang [data-set]").forEach((btn) => {
    btn.addEventListener("click", () => {
      root.lang = btn.getAttribute("data-set") === "ja" ? "ja" : "en";
      localStorage.setItem("airaw-homepage-lang", root.lang);
    });
  });

  const copy = document.querySelector("[data-copy-repo]");
  if (copy) {
    copy.addEventListener("click", async () => {
      const url = "https://dcsyhi1998.github.io";
      try {
        await navigator.clipboard.writeText(url);
        copy.setAttribute("data-copied", "1");
        setTimeout(() => copy.removeAttribute("data-copied"), 1600);
      } catch (_) {
        window.prompt(root.lang === "ja" ? "リポジトリ URL" : "Repo URL", url);
      }
    });
  }

  const filters = document.querySelectorAll(".filters [data-filter]");
  if (!filters.length) return;

  const cards = document.querySelectorAll("[data-cat]");
  const sections = document.querySelectorAll("[data-section]");

  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      filters.forEach((other) => other.classList.toggle("is-on", other === btn));
      cards.forEach((card) => {
        card.hidden = filter !== "all" && card.getAttribute("data-cat") !== filter;
      });
      sections.forEach((section) => {
        const visible = [...section.querySelectorAll("[data-cat]")].some((card) => !card.hidden);
        section.hidden = !visible;
      });
    });
  });
})();
