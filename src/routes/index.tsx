import { createFileRoute } from "@tanstack/react-router";
import m01 from "@/assets/m01.webp.asset.json";
import m02 from "@/assets/m02.webp.asset.json";
import m03 from "@/assets/m03.webp.asset.json";
import m04 from "@/assets/m04.webp.asset.json";
import m05 from "@/assets/m05.webp.asset.json";
import m06 from "@/assets/m06.webp.asset.json";
import m07 from "@/assets/m07.webp.asset.json";
import m08 from "@/assets/m08.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BI Madeiras — Madeireira em Monte Mor, SP" },
      { name: "description", content: "Tábuas, pontaletes, madeirite, telhas e churrasqueiras em Monte Mor - SP. Peça seu orçamento pelo WhatsApp." },
      { property: "og:title", content: "BI Madeiras — Madeireira em Monte Mor, SP" },
      { property: "og:description", content: "Madeira para obra, telhado e acabamento com preço justo e entrega na região." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATS = "https://wa.me/5519993048787?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento.";
const TEL = "tel:+5519993048787";
const ADDRESS = "Rod. Jorn. Francisco Aguirre Proença, S/N - KM 101 - São Clemente, Monte Mor - SP, 13190-000";

const products = [
  { n: "01", t: "Tábuas e caibros", d: "Pinus e eucalipto em várias bitolas, brutos ou aparelhados.", img: m01.url },
  { n: "02", t: "Pontaletes", d: "Escoramento firme para laje, forma e obra pesada.", img: m07.url },
  { n: "03", t: "Madeirite", d: "Chapas resinadas e plastificadas para forma de concreto.", img: m06.url },
  { n: "04", t: "Telhas", d: "Telhas cerâmicas e acessórios para o seu telhado.", img: m02.url },
  { n: "05", t: "Ripas e sarrafos", d: "Peças leves para estrutura de telhado e acabamento.", img: m08.url },
  { n: "06", t: "Churrasqueiras", d: "Modelos pré-moldados em tijolinho, prontos para montar.", img: m04.url },
];

function Index() {
  return (
    <div className="bg-background font-sans text-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-baseline gap-1 font-display text-2xl tracking-tight">
            <span className="text-primary">BI</span>
            <span>MADEIRAS</span>
          </a>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#produtos" className="hover:text-primary">Produtos</a>
            <a href="#sobre" className="hover:text-primary">Sobre</a>
            <a href="#local" className="hover:text-primary">Onde estamos</a>
          </nav>
          <a href={WHATS} target="_blank" rel="noreferrer" className="rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90">
            (19) 99304-8787
          </a>
        </div>
      </header>

      {/* Hero: split */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.1fr_1fr] md:py-20">
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Monte Mor · SP · KM 101</p>
          <h1 className="font-display text-5xl leading-[0.95] md:text-7xl">
            Madeira certa,<br />
            <span className="bg-accent px-2">direto</span> do pátio.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Tábuas, pontaletes, madeirite e telhas para sua obra. Atendimento rápido e orçamento na hora pelo WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WHATS} target="_blank" rel="noreferrer" className="rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">Pedir orçamento</a>
            <a href="#produtos" className="rounded-sm border-2 border-foreground px-6 py-3 font-semibold hover:bg-foreground hover:text-background">Ver produtos</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img src={m05.url} alt="Pilhas de tábuas no pátio" className="row-span-2 h-full w-full rounded-sm object-cover" />
          <img src={m01.url} alt="Tábuas de pinus empilhadas" className="aspect-square w-full rounded-sm object-cover" />
          <img src={m07.url} alt="Pontaletes e tábuas" className="aspect-square w-full rounded-sm object-cover" />
        </div>
      </section>

      {/* Strip */}
      <div className="overflow-hidden bg-ink py-4 text-ink-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-10 gap-y-2 px-5 font-display text-lg uppercase">
          <span>Tábuas</span><span className="text-accent">✦</span><span>Madeirite</span><span className="text-accent">✦</span><span>Pontalete</span><span className="text-accent">✦</span><span>Telhas</span>
        </div>
      </div>

      {/* Products */}
      <section id="produtos" className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl md:text-5xl">O que você encontra</h2>
          <p className="max-w-sm text-muted-foreground">Estoque variado para construção, reforma e lazer. Não achou? Pergunte pra gente.</p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.n} className="group bg-card">
              <div className="overflow-hidden">
                <img src={p.img} alt={p.t} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="font-display text-sm text-primary">{p.n}</span>
                <h3 className="mt-1 font-display text-xl">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
          <img src={m03.url} alt="Placas: telhas, tábuas, madeirite, pontalete" loading="lazy" className="w-full rounded-sm object-cover" />
          <div>
            <h2 className="font-display text-4xl">Do pátio pra sua obra, sem enrolação.</h2>
            <p className="mt-5 text-muted-foreground">
              Somos uma madeireira de São Clemente, em Monte Mor, que atende quem constrói: pedreiros, construtoras e quem está reformando a própria casa.
              Madeira selecionada, preço honesto e gente que entende do assunto pra te ajudar a escolher.
            </p>
            <ul className="mt-8 space-y-3">
              {["Orçamento rápido pelo WhatsApp", "Madeira selecionada e bem armazenada", "Fácil acesso pela rodovia, KM 101"].map((i) => (
                <li key={i} className="flex items-center gap-3 font-medium">
                  <span className="h-2 w-2 bg-primary" /> {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src={m06.url} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="grain-overlay relative">
          <div className="mx-auto max-w-4xl px-5 py-24 text-center text-ink-foreground">
            <h2 className="font-display text-4xl md:text-6xl">Precisa de madeira hoje?</h2>
            <p className="mx-auto mt-4 max-w-lg opacity-90">Mande a lista de materiais e a gente responde com o orçamento.</p>
            <a href={WHATS} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-sm bg-accent px-8 py-4 font-display text-accent-foreground hover:opacity-90">
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="local" className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="font-display text-4xl">Onde estamos</h2>
          <dl className="mt-8 space-y-6">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-primary">Endereço</dt>
              <dd className="mt-1">{ADDRESS}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-primary">Telefone / WhatsApp</dt>
              <dd className="mt-1"><a href={TEL} className="font-display text-2xl hover:text-primary">(19) 99304-8787</a></dd>
            </div>
          </dl>
          <a href="https://www.google.com/maps/dir/?api=1&destination=-22.922753,-47.2515882" target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-sm border-2 border-foreground px-6 py-3 font-semibold hover:bg-foreground hover:text-background">
            Traçar rota
          </a>
        </div>
        <iframe
          title="Mapa BI Madeiras"
          src="https://www.google.com/maps?q=-22.922753,-47.2515882&z=16&output=embed"
          className="h-96 w-full rounded-sm border border-border"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <footer className="bg-ink py-8 text-center text-sm text-ink-foreground">
        © {new Date().getFullYear()} BI Madeiras · Monte Mor - SP
      </footer>
    </div>
  );
}
