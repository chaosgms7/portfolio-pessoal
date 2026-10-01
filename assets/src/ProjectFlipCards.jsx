import FlipCard from '../components/FlipCard/FlipCard.jsx';

// Conteúdo provisório (mesmo texto dos cards originais). Troque pelos projetos reais depois.
const projects = [
  { title: 'Nome do projeto 1', tags: 'Tecnologia A, Tecnologia B' },
  { title: 'Nome do projeto 2', tags: 'Tecnologia A, Tecnologia C' },
  { title: 'Nome do projeto 3', tags: 'Tecnologia B, Tecnologia D' }
].map(p => ({
  ...p,
  description: 'Uma frase sobre o que é o projeto, o problema que resolveu e o seu papel.'
}));

export default function ProjectFlipCards() {
  return (
    <div className="flip-grid">
      {projects.map((p, i) => (
        <FlipCard
          key={p.title}
          width={300}
          height={340}
          radius={12}
          shadowOpacity={0.25}
          background="var(--card)"
          color="var(--fg)"
          ariaLabel={`${p.title}. Clique para virar o cartão`}
          front={
            <div className="pf-front">
              <div className={`pf-thumb pf-thumb--${i + 1}`} role="img" aria-label="Imagem do projeto" />
              <div>
                <h3>{p.title}</h3>
                <p className="pf-tags">{p.tags}</p>
              </div>
            </div>
          }
          back={
            <div className="pf-back">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <p className="pf-tags">{p.tags}</p>
            </div>
          }
        />
      ))}
    </div>
  );
}
