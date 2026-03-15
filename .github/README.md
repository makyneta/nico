# Nicholas Simões — Website Pessoal

Site profissional de Nicholas Simões, Fotógrafo & Jornalista formado pela PUC‑Rio.  
Desenvolvido por **[Makyneta Unipessoal, Lda](https://makyneta.github.io)**.

---

## Estrutura de ficheiros

```
/
├── index.html
├── README.md
└── assets/
    ├── styles/
    │   └── index.css
    ├── scripts/
    │   └── index.js
    └── images/
        ├── ui/
        │   └── favicon.jpg
        ├── person/
        │   ├── nicholas-hero.jpg       ← foto da hero section
        │   └── nicholas-about.jpg      ← foto da secção sobre
        └── projects/
            ├── proj-01.jpg
            ├── proj-02.jpg
            ├── proj-03.jpg
            ├── proj-04.jpg
            ├── proj-05.jpg
            └── proj-06.jpg
```

> A pasta `assets/images/` não está incluída no repositório — ver secção **Imagens** abaixo.

---

## Secções

| Secção | ID | Descrição |
|---|---|---|
| Navegação | `#nav` | Menu fixo com logo, links e hambúrguer mobile |
| Hero | `#hero` | Apresentação principal com foto e CTA |
| Manifesto | `#manifesto` | Faixa animada com palavras-chave |
| Sobre | `#sobre` | Biografia e formação |
| Filosofia | `#filosofia` | 3 pilares do trabalho |
| Projetos | `#projetos` | Galeria com 6 trabalhos |
| Depoimento | `#depoimento` | Citação de cliente |
| Contato | `#contato` | Links e formulário |
| Footer | `footer` | Copyright e redes sociais |

---

## Paleta de cores

Extraída da fotografia de apresentação — tons naturais e quentes.

| Token | Hex | Uso |
|---|---|---|
| `--warm-white` | `#FAF7F2` | Fundo principal |
| `--cream` | `#F5F0E8` | Fundo alternativo (filosofia) |
| `--sand` | `#D9C9A8` | Bordas, tags, detalhes |
| `--caramel` | `#B88B5A` | Citações, hover secundário |
| `--accent` | `#C47E3A` | Cor de destaque principal |
| `--wood` | `#8C6239` | Estados de sucesso |
| `--smoke` | `#7A736A` | Texto secundário |
| `--charcoal` | `#2E2820` | Texto de corpo |
| `--dark` | `#1E1A15` | Fundo escuro, botões |

---

## Tipografia

| Variável | Família | Uso |
|---|---|---|
| `--font-display` | Playfair Display | Títulos, hero, logo |
| `--font-serif` | DM Serif Display | Subtítulos itálicos, citações |
| `--font-body` | DM Sans | Texto corrido, labels |

Carregadas via Google Fonts — requer ligação à internet.

---

## Como adicionar imagens

### Fotos pessoais (hero e sobre)

Coloca as imagens em `assets/images/person/` e garante que os nomes correspondem:

```html
<!-- Hero -->
<img src="assets/images/person/nicholas-hero.jpg" alt="Nicholas Simões" />

<!-- Sobre -->
<img src="assets/images/person/nicholas-about.jpg" alt="Nicholas Simões com câmera Nikon" />
```

### Fotos dos projetos

Cada item de projeto tem um comentário indicativo no HTML. Para adicionar uma imagem, **substitui** o `<div class="proj-img-bg">` pela tag `<img>`:

```html
<!-- ANTES (placeholder colorido) -->
<div class="proj-img">
  <div class="proj-img-bg" style="background:#C9B99A;"></div>
</div>

<!-- DEPOIS (imagem real) -->
<div class="proj-img">
  <img src="assets/images/projects/proj-01.jpg" alt="Rio de Janeiro, 2024" />
</div>
```

As imagens são exibidas com `object-fit: cover` e proporção 3:4 (retrato). Resolução recomendada: **800 × 1067 px** ou superior.

### Favicon

Coloca o ficheiro em `assets/images/ui/favicon.jpg`. Formatos recomendados: `.ico`, `.png`, ou `.svg`.

---

## Como editar os projetos

Cada bloco de projeto no HTML segue esta estrutura:

```html
<div class="proj-item reveal">
  <div class="proj-img">
    <img src="assets/images/projects/proj-XX.jpg" alt="Nome do Projeto, Ano" />
  </div>
  <div class="proj-info">
    <span class="proj-name">Nome do Projeto</span>
    <span class="proj-year">Ano</span>
  </div>
</div>
```

Para **adicionar** um projeto, duplica o bloco e actualiza a imagem, nome e ano.  
Para **remover**, apaga o bloco inteiro.  
O grid ajusta-se automaticamente.

---

## Formulário de contato

O formulário presente na secção `#contato` é apenas frontend — não envia emails por si só.  
Para activar o envio real, integra um dos seguintes serviços:

- **[Formspree](https://formspree.io)** — gratuito, sem backend
- **[EmailJS](https://www.emailjs.com)** — envio directo via JS
- Backend próprio em Node.js / PHP

### Exemplo com Formspree

```html
<form class="contato-form" action="https://formspree.io/f/SEU_ID" method="POST">
```

---

## Informações de contato

Para actualizar os dados de contato, edita as seguintes secções no `index.html`:

| Campo | Localização |
|---|---|
| Email | `href="mailto:..."` na secção `#contato` e no menu mobile |
| Instagram | `href="https://instagram.com/..."` |
| Telefone / WhatsApp | `href="tel:..."` |

---

## Responsivo

| Breakpoint | Layout |
|---|---|
| `> 1200px` | Desktop completo |
| `900px – 1200px` | Tablet — padding reduzido |
| `< 900px` | Mobile — menu hambúrguer, colunas empilhadas, grid 2 col |
| `< 480px` | Mobile pequeno — grid 1 coluna |

---

## Dependências externas

Todas carregadas via CDN — não requer instalação.

| Recurso | URL |
|---|---|
| Google Fonts | `fonts.googleapis.com` |

Não há frameworks JS ou CSS. O projecto é HTML + CSS + JS vanilla.

---

## Créditos

**Design & Desenvolvimento**  
[Makyneta Unipessoal, Lda](https://makyneta.github.io)

**Conteúdo & Fotografia**  
Nicholas Simões — [nico.pas.fotografia@gmail.com](mailto:nico.pas.fotografia@gmail.com)

---

Copyright © Makyneta Unipessoal, Lda · Todos os direitos reservados