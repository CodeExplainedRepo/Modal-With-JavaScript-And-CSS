function modal(
  openModalSelector,
  modalWrapperSelector,
  modalContentSelector,
  closeModal = false
) {
  // select elements
  const openModalBtn = document.querySelector(openModalSelector);
  const modalWrapperElement = document.querySelector(modalWrapperSelector);
  const modalContentElement = document.querySelector(modalContentSelector);

  // style the modal elements
  openModalBtn.classList.add("open-modal");
  modalWrapperElement.classList.add("modal-wrapper");
  modalContentElement.classList.add("modal-content");

  // open modal onclick
  openModalBtn.addEventListener("click", () => {
    modalWrapperElement.style.display = "block";
  });

  // close modal using the X button
  if (closeModal) {
    modalContentElement.innerHTML += "<span class='close-modal'>&times;</span>";

    const closeModalBtn = modalContentElement.querySelector(".close-modal");

    closeModalBtn.addEventListener("click", () => {
      modalWrapperElement.style.display = "none";
    });
  }

  // close modal when click outside
  modalWrapperElement.addEventListener("click", (event) => {
    if (event.target === modalWrapperElement) {
      modalWrapperElement.style.display = "none";
    }
  });
}
