(() => {
  const menuPBtnRef = document.querySelector("[portfolio-data-menu-button]");
  const mobilePMenuRef = document.querySelector("[portfolio-data-menu]");

  menuPBtnRef.addEventListener("click", () => {
    const expanded =
      menuPBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuPBtnRef.classList.toggle("is-open");
    menuPBtnRef.setAttribute("aria-expanded", !expanded);

    mobilePMenuRef.classList.toggle("is-open");
  });
})();