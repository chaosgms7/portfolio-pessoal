import { useEffect, useRef, useState } from 'react';
import { InteractiveGridPattern } from '../components/InteractiveGridPattern/InteractiveGridPattern';

const SIZE = 40;

// Fundo fixo que cobre a tela inteira, atrás de todas as seções.
// 1) Calcula quantos quadrados são necessários para cobrir a janela.
// 2) Como o conteúdo da página fica por cima da grade, o hover é calculado pela posição do mouse
//    na janela e repassado ao quadrado correspondente (o componente em si não é alterado).
export default function PageGrid() {
  const ref = useRef(null);
  const [squares, setSquares] = useState([48, 27]);
  const squaresRef = useRef(squares);
  squaresRef.current = squares;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const { width, height } = el.getBoundingClientRect();
      setSquares([Math.max(1, Math.ceil(width / SIZE)), Math.max(1, Math.ceil(height / SIZE))]);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let current = -1;
    const rectAt = i => (i < 0 ? null : el.querySelector('svg')?.children[i] || null);

    const hover = next => {
      if (next === current) return;
      const prevEl = rectAt(current);
      const nextEl = rectAt(next);
      // O React calcula enter/leave a partir de mouseover/mouseout.
      if (prevEl) prevEl.dispatchEvent(new MouseEvent('mouseout', { bubbles: true, relatedTarget: nextEl }));
      else if (nextEl) nextEl.dispatchEvent(new MouseEvent('mouseover', { bubbles: true, relatedTarget: null }));
      current = nextEl ? next : -1;
    };

    const onMove = e => {
      const [cols, rows] = squaresRef.current;
      const col = Math.floor(e.clientX / SIZE);
      const row = Math.floor(e.clientY / SIZE);
      hover(col >= 0 && col < cols && row >= 0 && row < rows ? row * cols + col : -1);
    };
    const onLeave = () => hover(-1);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0 }}>
      <InteractiveGridPattern width={SIZE} height={SIZE} squares={squares} />
    </div>
  );
}
