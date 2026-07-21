import { useReveal } from '../useReveal'

const dishes = [
  {
    label: 'Légumes du maraîcher',
    bg: 'var(--sage)',
    blob: '62% 38% 55% 45% / 45% 55% 45% 55%',
    icon: (
      <g fill="none" stroke="#FBF6EE" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 65 Q35 30 60 25 Q85 30 90 65" />
        <path d="M60 25 Q62 12 55 4" />
        <ellipse cx="60" cy="68" rx="34" ry="8" />
      </g>
    ),
  },
  {
    label: 'Pain au levain maison',
    bg: 'var(--mustard)',
    blob: '45% 55% 62% 38% / 55% 45% 55% 45%',
    icon: (
      <g fill="none" stroke="#1C1A15" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M25 55 Q20 30 45 22 Q70 15 90 32 Q100 45 88 58 Q60 72 25 55Z" />
        <path d="M40 30 Q45 40 42 50" />
        <path d="M60 24 Q65 36 62 48" />
      </g>
    ),
  },
  {
    label: 'Vin nature, cave du village',
    bg: 'var(--bordeaux)',
    blob: '55% 45% 45% 55% / 45% 55% 45% 55%',
    icon: (
      <g fill="none" stroke="#FBF6EE" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M45 15 L48 45 Q30 55 30 72 Q60 82 90 72 Q90 55 72 45 L75 15Z" />
        <path d="M45 15 L75 15" />
      </g>
    ),
  },
  {
    label: 'Dessert du jour',
    bg: 'var(--ink)',
    blob: '38% 62% 50% 50% / 55% 45% 55% 45%',
    icon: (
      <g fill="none" stroke="#FBF6EE" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="60" cy="70" rx="36" ry="10" />
        <path d="M28 68 Q30 30 60 28 Q90 30 92 68" />
        <path d="M60 28 Q58 16 66 8" />
      </g>
    ),
  },
]

export default function Gallery() {
  const [ref, inView] = useReveal(0.15)

  return (
    <section className="gallery" id="galerie">
      <div className="wrap">
        <p className="eyebrow">en cuisine et à la cave</p>
        <h2>Un aperçu de la maison</h2>

        <div ref={ref} className={`gallery-grid ${inView ? 'in-view' : ''}`}>
          {dishes.map((d, i) => (
            <figure
              className="dish"
              key={d.label}
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              <div
                className="dish-blob"
                style={{ background: d.bg, borderRadius: d.blob }}
              >
                <svg viewBox="0 0 120 90" width="70%" height="70%">
                  {d.icon}
                </svg>
              </div>
              <figcaption>{d.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        .gallery{ padding: 96px 0; background: var(--cream-deep); }
        .gallery h2{ font-size: clamp(1.7rem, 3.2vw, 2.3rem); margin: 6px 0 44px; }
        .gallery-grid{
          display:grid; gap: 36px 28px;
          grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 720px){
          .gallery-grid{ grid-template-columns: repeat(4, 1fr); }
        }
        .dish{
          margin:0; text-align:center;
          opacity:0; transform: translateY(18px) scale(0.96);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .gallery-grid.in-view .dish{ opacity:1; transform: translateY(0) scale(1); }
        .dish-blob{
          aspect-ratio: 1;
          display:flex; align-items:center; justify-content:center;
          margin-bottom: 14px;
          transition: border-radius 0.6s ease;
        }
        .dish:hover .dish-blob{ border-radius: 50% !important; }
        .dish figcaption{
          font-family: var(--font-script);
          font-size: 1.15rem;
          color: var(--ink);
        }
      `}</style>
    </section>
  )
}
