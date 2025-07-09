let hoveredElement = null

document.addEventListener('mouseover', (event) => {
  hoveredElement = event.target
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getHoveredText') {
    const text = hoveredElement?.innerText || hoveredElement?.textContent || ''
    sendResponse({ text: text.trim() })
  }
})
