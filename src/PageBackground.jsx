import { DotPattern } from '../components/DotPattern/DotPattern';

// Fundo fixo da página inteira (atrás de todas as seções).
// Para ativar o brilho animado nos pontos: <DotPattern ... glow />  (usa mais processamento)
// Para voltar à grade interativa, troque este arquivo por ./PageGrid.jsx em src/main.jsx.
export default function PageBackground() {
  return <DotPattern width={24} height={24} cr={1} />;
}
