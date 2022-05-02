// Copiar ID da Sala
const copyButton = document.getElementById('room-id')

copyButton.addEventListener('click', () => {
  copyButton.select();
  document.execCommand('copy');
});