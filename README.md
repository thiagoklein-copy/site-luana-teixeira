# Luana Teixeira — Site Institucional

Site premium de conversão para Luana Teixeira, psicóloga clínica (percurso em Psicanálise) em São Leopoldo/RS.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (cores centralizadas em `tailwind.config.ts` + `@theme`)
- Framer Motion (fade-up leve)
- Deploy-ready na Vercel

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Fotos

Nenhuma foto da Ana Paula permanece no projeto. Hero/About usam slot “Foto em breve”; Approach usa fundo solid.

Quando a Luana enviar as fotos, colocar em `public/images/` e religar nos componentes (`Hero`, `About`, `Approach` + OG no `layout.tsx`).

## Contato / WhatsApp

Número: `(51) 99893-4691` → `wa.me/5551998934691`  
Mensagem padrão: *"Olá, Luana! Vi seu site e gostaria de agendar uma conversa."*

## Nota

**Sem preços** em nenhuma seção — requisito explícito do projeto.

**Monograma:** placeholder `LT` — confirmar com Luana antes do lançamento.
