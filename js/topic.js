window.addEventListener("DOMContentLoaded", () => {
  const optionModal = document.querySelectorAll(".option-modal"),
    topicOptionIcon = document.querySelectorAll(".topic-option-icon");

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
    topicOptionIcon[index].src = "../icons/close-line.svg";
  }

  function hideOptionModal(index) {
    optionModal[index].classList.remove("show");
    optionModal[index].classList.add("hide");
    topicOptionIcon[index].src = "../icons/options.svg";
  }

  topicOptionIcon.forEach((item, index) => {
    item.addEventListener("click", () => toggleOptionModal(index));
  });
});
