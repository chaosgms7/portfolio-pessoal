import { createRoot } from 'react-dom/client';
import ProjectFlipCards from './ProjectFlipCards.jsx';
import PageBackground from './PageBackground.jsx';

const container = document.getElementById('projetos-flip');
if (container) createRoot(container).render(<ProjectFlipCards />);

const pageBg = document.getElementById('page-bg');
if (pageBg) createRoot(pageBg).render(<PageBackground />);
