export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">depuis 2016, entre Toulouse et le Lot</p>
          <h1>
            Une cuisine qui suit <em>le marché</em>,<br />
            pas la carte.
          </h1>
          <p className="hero-lead">
            Chez Auguste, l'ardoise change chaque semaine au rythme des
            producteurs locaux. Pas de congélateur, pas de carte figée : ce
            qui est bon aujourd'hui est sur la table ce soir.
          </p>
          <div className="hero-actions">
            <a href="#reservation" className="btn btn-ink">Réserver une table</a>
            <a href="#ardoise" className="btn btn-line">Voir l'ardoise</a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <svg viewBox="0 0 420 420" width="100%" height="100%">
            <path d="M210 20C300 20 380 90 390 190C398 270 340 360 250 390C160 400 60 360 30 270C0 180 40 90 120 50C150 30 180 20 210 20Z"
                  fill="var(--cream-deep)" />
            <g transform="translate(120,110)" fill="none" stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="90" cy="150" rx="88" ry="14" />
              <path d="M10 150 Q20 60 90 45 Q160 60 170 150" />
              <path d="M55 60 Q60 20 45 5" />
              <path d="M90 45 Q95 10 90 -2" />
              <path d="M125 60 Q120 20 138 5" />
              <circle cx="45" cy="8" r="3" fill="var(--sage)" stroke="none" />
              <circle cx="90" cy="0" r="3" fill="var(--sage)" stroke="none" />
              <circle cx="138" cy="8" r="3" fill="var(--sage)" stroke="none" />
            </g>
            <text x="210" y="205" textAnchor="middle" fontFamily="var(--font-script)" fontSize="26" fill="var(--bordeaux)">
              frais du jour
            </text>
          </svg>
        </div>
      </div>

      <style>{`
        .hero{ padding: 64px 0 88px; }
        .hero-grid{
          display:grid; gap: 48px; align-items:center;
        }
        @media (min-width: 900px){
          .hero-grid{ grid-template-columns: 1.1fr 0.9fr; }
        }
        .hero-copy h1{
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          margin-bottom: 22px;
        }
        .hero-copy h1 em{
          font-style: italic;
          color: var(--bordeaux);
        }
        .hero-lead{
          max-width: 46ch;
          color: #4a473d;
          font-size: 1.05rem;
          margin-bottom: 34px;
        }
        .hero-actions{ display:flex; flex-wrap:wrap; gap: 14px; }
        .btn{
          display:inline-block;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.92rem;
          padding: 14px 26px;
          border-radius: 999px;
          transition: transform 0.15s ease, background 0.2s ease, color 0.2s ease;
        }
        .btn:hover{ transform: translateY(-2px); }
        .btn-ink{ background: var(--ink); color: var(--cream); }
        .btn-ink:hover{ background: var(--bordeaux); }
        .btn-line{ border: 1.5px solid var(--ink); color: var(--ink); }
        .btn-line:hover{ border-color: var(--bordeaux); color: var(--bordeaux); }

        .hero-art{ display:flex; justify-content:center; }
        .hero-art svg{ max-width: 380px; }
      `}</style>
    </section>
  )
}
