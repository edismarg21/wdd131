window.onload = function() {
  const elementoData = document.getElementById("dataModificacao");
  if (elementoData) {
    elementoData.textContent = document.lastModified;
  }
}
