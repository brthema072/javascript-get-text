const btn = document.getElementById('btn')
const resultado = document.getElementById('resultado')

btn.addEventListener('click', function () {
  resultado.value = 'Processando...'

  chrome.tabs.captureVisibleTab(null, { format: 'png' }, function (dataUrl) {
    resultado.value = 'Processando OCR...'

    if (chrome.runtime.lastError) {
      resultado.value = 'Erro ao capturar: ' + chrome.runtime.lastError.message
      return
    }

    Tesseract.recognize(
      dataUrl,
      'eng', // ou 'eng' para inglês
      {
        logger: (m) => {
          alert(m)
        },
      },
    )
      .then(function ({ data: { text } }) {
        resultado.value = 'olá'
      })
      .catch(function (err) {
        resultado.value = 'Erro no OCR: ' + err
      })
      .finally(function () {
        resultado.value = 'fim'
      })
  })
})
