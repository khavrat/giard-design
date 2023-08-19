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
      openBtn: document.querySelector(".open-modal-search"),
      closeBtn: document.getElementById("close-modal-search"),
      backdrop: document.getElementById("backdrop-modal-search"),
      backdropBlur: document.getElementById("backdropBlur-modal-search"),
    },
  ];

  modalData.forEach((data) => {
    data.openBtn.addEventListener("click", () => toggleModal(data));
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
    const tags = document.querySelectorAll(".searchtag");

    tags.forEach((tag) => {
      console.log('tag :>> ', tag);
      tag.addEventListener("click", () => {
        console.log('click :>> ', 'click');
        console.log(" modalData[2] :>> ", modalData[2]);
      });
    });
  });

})();
