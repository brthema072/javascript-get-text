const btn = document.getElementById('btn')
const resultado = document.getElementById('resultado')

btn.addEventListener('click', function () {
  resultado.value = 'Processando...'

  chrome.tabs.captureVisibleTab(null, { format: 'png' }, async function (dataUrl) {
    resultado.value = 'Processando OCR...'

    if (chrome.runtime.lastError) {
      resultado.value = 'Erro ao capturar: ' + chrome.runtime.lastError.message
      return
    }
    resultado.value = 'Processando OCR...'

    // const { createWorker } = Tesseract

    // const worker = Tesseract.createWorker('eng', 1, {
    //   workerPath: chrome.runtime.getURL('tesseract/worker.min.js'),
    //   corePath: chrome.runtime.getURL('tesseract/tesseract-core.wasm.js'),
    //   logger: (m) => console.log(m),
    // })

    // const worker = Tesseract.createWorker({
    //   workerPath: chrome.runtime.getURL('tesseract/worker.min.js'),
    //   langPath: chrome.runtime.getURL('tesseract/'),
    //   corePath: chrome.runtime.getURL('tesseract/tesseract-core.wasm.js'),
    // })

    // await worker.load()
    // await worker.loadLanguage('eng')
    // await worker.initialize('eng')

    // const {
    //   data: { text },
    // } = await worker.recognize(dataUrl)

    // var test = await worker.recognize(dataUrl)

    // console.log(test)

    // resultado.value = text

    // await worker.terminate()
  })
})
