import { createRoot } from 'react-dom/client';
import ProjectFlipCards from './ProjectFlipCards.jsx';

const container = document.getElementById('projetos-flip');
if (container) createRoot(container).render(<ProjectFlipCards />);
