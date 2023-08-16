(() => {
  const refs = {
    openModalBtn: document.querySelector(".open-modal"),
    closeModalBtn: document.querySelector(".close-button"),
    modalBackdrop: document.querySelector("#backdrop"),
    modalBackdropBlur: document.querySelector("#backdrop-blur"),
    modal: document.querySelector(".modal"),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modalBackdropBlur.addEventListener("click", handleBackdropClick);

  function toggleModal() {
    console.log('refs.body :>> ', refs.body);
    refs.modal.classList.toggle("hidden");
    refs.modalBackdrop.classList.toggle("hidden");
    refs.body.classList.toggle("no-scroll");
  }

  function handleBackdropClick(e) {
    console.log("event :>> ", e);
    e.preventDefault();
    if (e.target === refs.modalBackdropBlur) {
      console.log("event.target :>> ", e.target === refs.modalBackdropBlur);
      toggleModal();
    }
  }
})();
