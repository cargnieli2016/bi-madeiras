# BI Madeiras

Site institucional da **BI Madeiras**, madeireira localizada em Monte Mor, no
interior de São Paulo. O site apresenta os produtos e facilita o contato para
orçamentos e a localização da loja.

## O site

O site foi desenvolvido para apresentar a madeireira de forma clara e funcionar
em computadores e dispositivos móveis. Entre os recursos disponíveis estão:

- Apresentação dos produtos: tábuas e caibros, pontaletes, madeirite, telhas,
  ripas e sarrafos e churrasqueiras.
- Atalhos para solicitar orçamento pelo WhatsApp.
- Informações de endereço e mapa incorporado com acesso ao Google Maps.
- Fotografias e logotipo da própria madeireira.

## Tecnologias

- React e TypeScript
- TanStack Start e TanStack Router
- Vite
- Tailwind CSS

## Requisitos

- Node.js 20.19 ou superior (ou 22.12 ou superior)
- npm

## Executar localmente

```bash
npm install
npm run dev
```

O Vite informa no terminal o endereço local do site quando o servidor estiver
pronto.

## Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a build de produção |
| `npm run preview` | Abre uma prévia local da build |
| `npm test` | Executa os testes |
| `npm run lint` | Analisa o código com ESLint |
| `npm run format` | Formata os arquivos com Prettier |

Para gerar e visualizar a build de produção:

```bash
npm run build
npm run preview
```

## Publicação

O deploy é feito automaticamente no GitHub Pages quando há um push para a
branch `main`. O workflow gera o site estático e publica o conteúdo de
`dist/client`.

Para habilitar a publicação no repositório, em **Settings → Pages**, selecione
**GitHub Actions** como origem. O endereço do projeto será:

https://cargnieli2016.github.io/bi-madeiras/

Para hospedar futuramente no Cloudflare Pages, use `dist/client` como diretório
de saída e configure a variável de build `VITE_BASE_PATH` com o valor `/`.

## Estrutura do projeto

```text
src/
├── assets/           # Fotos e logotipo
├── components/ui/    # Componentes de interface
├── lib/              # Utilitários e tratamento de erros
├── routes/           # Rotas e páginas
└── styles.css        # Estilos globais
```
