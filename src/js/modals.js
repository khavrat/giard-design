(() => {
  const body = document.querySelector("body");

  const modalData = [
    {
      modal: document.getElementById("modal-oferta"),
      openBtn: document.getElementById("open-modal-oferta"),
      closeBtn: document.getElementById("close-modal-oferta"),
      backdrop: document.getElementById("backdrop-modal-oferta"),
      backdropBlur: document.getElementById("backdropBlur-modal-oferta"),
    },
    {
      modal: document.getElementById("modal-search"),
      openBtn: document.querySelectorAll(".open-modal-search"),
      closeBtn: document.getElementById("close-modal-search"),
      backdrop: document.getElementById("backdrop-modal-search"),
      backdropBlur: document.getElementById("backdropBlur-modal-search"),
    },
  ];

  modalData.forEach((data) => {
    if (data.openBtn instanceof NodeList) {
      data.openBtn.forEach((btn) => {
        btn.addEventListener("click", () => toggleModal(data));
      });
    } else {
      data.openBtn.addEventListener("click", () => toggleModal(data));
    }
    data.closeBtn.addEventListener("click", () => toggleModal(data));
    data.backdropBlur.addEventListener("click", (e) =>
      handleBackdropClick(e, data)
    );

    function toggleModal(data) {
      data.modal.classList.toggle("hidden");
      data.backdrop.classList.toggle("hidden");
      body.classList.toggle("overflow-hidden");
    }

    function handleBackdropClick(e, data) {
      e.preventDefault();
      if (e.target === data.backdropBlur) {
        toggleModal(data);
      }
    }

    //for modal search
    const searchResults = document.getElementById("searchResults");

    searchResults.addEventListener("click", () => closeSearchModal());

    function closeSearchModal() {
      modalData[1].modal.classList.add("hidden");
      modalData[1].backdrop.classList.add("hidden");
      body.classList.remove("overflow-hidden");
    }
  });
})();
