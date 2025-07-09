# Get text – Extensão Chrome

Extensão que extrai texto da aba atual usando o DOM ou OCR.

## 🔹 Funcionalidades

- Extrai texto visível da página.
- Pode usar OCR para ler texto de imagens.
- Interface simples via popup.

## 🔧 Instalação

1. Baixe ou clone este repositório.
2. Acesse `chrome://extensions/` no Chrome.
3. Ative o **Modo do desenvolvedor**.
4. Clique em **Carregar sem compactação** e selecione a pasta do projeto.

## 📁 Estrutura
```
get-text/
├── icons/
│ ├── icon16.png
│ ├── icon48.png
│ └── icon128.png
├── src/
│ ├── content.js
│ └── popup/
│ └── popup.html
├── manifest.json
└── README.md
```

## 📄 Manifest.json

```json
{
  "manifest_version": 3,
  "name": "Get text",
  "version": "1.0",
  "description": "Extrai texto da aba via DOM ou OCR.",
  "icons": {
    "16": "icons/icon16.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png"
  },
  "action": {
    "default_popup": "src/popup/popup.html"
  },
  "permissions": ["activeTab", "scripting", "tabs", "storage", "clipboardWrite"],
  "host_permissions": ["<all_urls>"],
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["src/content.js"]
    }
  ]
}
