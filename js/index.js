window.addEventListener("DOMContentLoaded", () => {
  const optionIcon = document.querySelectorAll(".option-icon"),
    optionModal = document.querySelectorAll(".option-modal");

  /* Modal 🚩 */

  function toggleOptionModal(index) {
    const isOpen = optionModal[index].classList.contains("show");
    if (isOpen) {
      hideOptionModal(index);
    } else {
      showOptionModal(index);
    }
  }

  function showOptionModal(index) {
    optionModal[index].classList.remove("hide");
    optionModal[index].classList.add("show");
    optionIcon[index].src = "../icons/close-line.svg";
  }

  function hideOptionModal(index) {
    optionModal[index].classList.remove("show");
    optionModal[index].classList.add("hide");
    optionIcon[index].src = "../icons/options.svg";
  }

  optionIcon.forEach((item, index) => {
    item.addEventListener("click", () => toggleOptionModal(index));
  });

  /* Sidebar 🚩  */
  const ctgs = document.querySelectorAll(".ctg"),
    ctgSections = document.querySelectorAll(".ctg-sections"),
    category = document.querySelectorAll(".category"),
    ctgIcon = document.querySelectorAll(".ctg-closeIcon");

  function toggleCtgSection(index) {
    const isOpen = ctgSections[index].classList.contains("show");
    if (isOpen) {
      hideCtgSection(index);
    } else {
      showCtgSection(index);
    }
  }

  function showCtgSection(index) {
    ctgSections[index].classList.remove("hide");
    ctgSections[index].classList.add("show");
    ctgIcon[index].src = "../icons/arrow-up.svg";
    category.classList.add("category-active");
  }

  function hideCtgSection(index) {
    ctgSections[index].classList.remove("show");
    ctgSections[index].classList.add("hide");
    ctgIcon[index].src = "../icons/arrow-donw.svg";
    category.classList.remove("category-active");
  }

  ctgs.forEach((item, index) => {
    item.addEventListener("click", () => toggleCtgSection(index));
  });
});
