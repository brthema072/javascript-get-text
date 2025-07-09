const btn = document.getElementById('btn')
const result = document.getElementById('textareaResult')
let interval = null
let activeScan = false

btn.addEventListener('click', function getText() {
  console.log('test')
  activeScan = !activeScan

  if (!activeScan) {
    result.value = 'Parado'
    clearInterval(interval)
  } else {
    result.value = 'Processando...'
    interval = setInterval(startTrackingHoverText, 500)
  }
})

async function startTrackingHoverText() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

  chrome.tabs.sendMessage(tab.id, { action: 'getHoveredText' }, (response) => {
    if (chrome.runtime.lastError) {
      result.value = 'Erro: ' + chrome.runtime.lastError.message
      return
    }

    result.value = response?.text || 'Passe o mouse sobre um texto'
  })
}
