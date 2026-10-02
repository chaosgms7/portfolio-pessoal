# Portfólio — chaos (Tiago)

HTML + CSS + JavaScript, com React + Motion apenas nos cards de projetos (Flip Card do React Bits).

## Como rodar (Windows)
1. Instale o Node.js (versão LTS): https://nodejs.org
2. Extraia o ZIP inteiro e dê dois cliques em `iniciar.bat`.
   Na primeira vez ele instala as dependências e abre o site no navegador.

Ou pelo terminal, dentro da pasta:
    npm install
    npm run dev

Não abra o `index.html` com dois cliques: os módulos do React não carregam a partir de um arquivo local.

## Publicar
    npm run build      gera a pasta dist/ (é ela que vai para a hospedagem)
    npm run preview    testa o resultado do build

## Estrutura
    index.html                          estrutura da página
    css/                                estilos (base, layout, components, responsive)
    js/theme.js                         troca de tema claro/escuro
    components/FlipCard/                Flip Card oficial do React Bits (não editado)
    components/DotPattern/              DotPattern (fundo de pontos da página)
    components/InteractiveGridPattern/  grade interativa (guardada, sem uso no momento)
    src/main.jsx                        monta os cards de Projetos e o fundo da página
    src/PageBackground.jsx              escolhe o fundo (DotPattern; opção glow disponível)
    src/PageGrid.jsx                    fundo alternativo com a grade interativa (sem uso)
    src/ProjectFlipCards.jsx            dados dos projetos (troque os textos aqui)
    assets/images/                      imagens
    package.json, vite.config.js        configuração do projeto

Sem JavaScript, a seção Projetos mostra os cards originais que estão no HTML.
