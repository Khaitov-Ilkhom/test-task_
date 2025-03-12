const modalOverlay = document.getElementById('modalOverlay');
const confirmationState = document.getElementById('confirmationState');
const successState = document.getElementById('successState');

function openModal() {
  modalOverlay.style.display = 'block';
  confirmationState.style.display = 'block';
  successState.style.display = 'none';
}

function closeModal() {
  modalOverlay.style.display = 'none';
}

function showSuccessState() {
  confirmationState.style.display = 'none';
  successState.style.display = 'block';
}

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});