document.addEventListener('click', function (event) {
  const elementoClicado = event.target

  const texto = elementoClicado.innerText || elementoClicado.textContent

  console.log(texto)
})
