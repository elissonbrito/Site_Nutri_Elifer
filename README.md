# 🌿 Site da Nutricionista Élifer Brito

Site profissional desenvolvido em **React + Vite**, totalmente responsivo e pronto para publicação.

---

## 📁 Estrutura do projeto

```
nutri-elifer/
├── src/
│   ├── assets/           ← Fotos da Élifer
│   ├── components/       ← Seções do site
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Sobre.jsx
│   │   ├── ComoFunciona.jsx
│   │   ├── Planos.jsx
│   │   ├── Artigos.jsx
│   │   ├── Dicas.jsx
│   │   ├── Contato.jsx
│   │   ├── Footer.jsx
│   │   └── FloatWA.jsx
│   ├── data.js           ← Textos, planos, links centralizados
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`

---

## 🏗️ Como fazer o build

```bash
npm run build
```

Os arquivos prontos ficam na pasta `dist/`.

---

## 🌐 Como publicar (Netlify — gratuito e mais fácil)

1. Acesse [netlify.com](https://netlify.com) e crie uma conta gratuita
2. Clique em **"Add new site" → "Deploy manually"**
3. Arraste a pasta `dist/` para a tela
4. Pronto! O site fica no ar em segundos com URL automática
5. Para domínio próprio (`nutrielifer.com.br`), configure em **Domain settings**

### Alternativa: GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos
3. Vá em **Settings → Pages → GitHub Actions**
4. O site fica disponível em `seu-usuario.github.io/nutri-elifer`

---

## ✏️ Como editar o conteúdo

Todo o conteúdo está centralizado em **`src/data.js`**:
- Links de WhatsApp e Instagram
- Planos de atendimento e itens inclusos
- Artigos e dicas
- Informações de contato

Para trocar fotos, substitua os arquivos em `src/assets/`.

---

## 📞 Contato do site

- WhatsApp: (21) 97151-6740
- Instagram: @nutri.elifer
- E-mail: eliferbrito@hotmail.com
- Local: Espaço Jéssica Cunha Fisioterapia e Pilates – Flamengo, Maricá/RJ
