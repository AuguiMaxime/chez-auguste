import { useReveal } from '../useReveal'

export default function About() {
  const [ref, inView] = useReveal(0.25)

  return (
    <section className="about" id="histoire">
      <div className="wrap about-grid" ref={ref}>
        <div className={`about-copy reveal ${inView ? 'in' : ''}`}>
          <p className="eyebrow">la maison</p>
          <h2>Une table tenue par deux personnes, pas un concept.</h2>
          <p>
            Auguste a repris cette ancienne épicerie de village en 2016 avec
            Lucie, sa compagne, après des années passées en cuisine à Toulouse.
            Ils travaillent avec une dizaine de producteurs des coteaux
            environnants — maraîchers, éleveurs, un pêcheur d'eau douce sur
            l'Aveyron — et composent leur carte selon ce qui arrive le matin
            même.
          </p>
          <p>
            Pas de mise en scène, pas de menu dégustation à rallonge : une
            cuisine directe, généreuse, qui change avec les saisons plutôt
            qu'avec les modes.
          </p>
        </div>

        <div className={`about-stats reveal ${inView ? 'in' : ''}`}>
          <div className="stat">
            <span className="stat-num">12</span>
            <span className="stat-label">producteurs partenaires</span>
          </div>
          <div className="stat">
            <span className="stat-num">28</span>
            <span className="stat-label">couverts en salle</span>
          </div>
          <div className="stat">
            <span className="stat-num">7j</span>
            <span className="stat-label">avant que l'ardoise change</span>
          </div>
        </div>
      </div>

      <style>{`
        .about{ padding: 96px 0; }
        .about-grid{ display:grid; gap: 48px; }
        @media (min-width: 900px){
          .about-grid{ grid-template-columns: 1.2fr 0.8fr; align-items:center; }
        }
        .about-copy h2{
          font-size: clamp(1.7rem, 3.2vw, 2.3rem);
          margin: 6px 0 22px;
        }
        .about-copy p{
          color: #4a473d;
          max-width: 52ch;
          margin-bottom: 16px;
        }
        .about-stats{
          display:grid; grid-template-columns: repeat(3,1fr);
          gap: 20px;
        }
        @media (min-width: 900px){
          .about-stats{ grid-template-columns: 1fr; }
        }
        .stat{
          background: var(--cream-deep);
          border-radius: var(--radius);
          padding: 22px 18px;
          text-align:center;
          border-left: 3px solid var(--sage);
        }
        @media (min-width: 900px){ .stat{ text-align:left; } }
        .stat-num{
          display:block;
          font-family: var(--font-display);
          font-style: italic;
          font-size: 2.1rem;
          color: var(--bordeaux);
        }
        .stat-label{
          font-size: 0.8rem;
          color: #5a5748;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
      `}</style>
    </section>
  )
}
