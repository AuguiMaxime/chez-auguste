import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#ardoise', label: "L'ardoise" },
    { href: '#histoire', label: 'La maison' },
    { href: '#galerie', label: 'Galerie' },
    { href: '#reservation', label: 'Réserver' },
  ]

  return (
    <header className="header">
      <div className="wrap header-inner">
        <a href="#top" className="brand">
          <span className="brand-name">Chez Auguste</span>
          <span className="brand-tag">Bistrot de saison</span>
        </a>

        <nav className={`nav ${open ? 'nav-open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className={`burger ${open ? 'burger-open' : ''}`}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <style>{`
        .header{
          position: sticky; top: 0; z-index: 50;
          background: var(--cream);
          border-bottom: 1px solid rgba(28,26,21,0.1);
        }
        .header-inner{
          display:flex; align-items:center; justify-content:space-between;
          height: 84px;
        }
        .brand{ display:flex; flex-direction:column; }
        .brand-name{
          font-family: var(--font-display);
          font-style: italic;
          font-size: 1.5rem;
          color: var(--ink);
        }
        .brand-tag{
          font-family: var(--font-script);
          font-size: 1rem;
          color: var(--sage);
          margin-top: -4px;
        }
        .nav{ display:none; gap: 32px; }
        .nav a{
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--ink);
          position: relative;
          padding-bottom: 3px;
        }
        .nav a::after{
          content:'';
          position:absolute; left:0; bottom:0;
          width:100%; height:2px;
          background: var(--mustard);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .nav a:hover::after{ transform: scaleX(1); }
        @media (min-width: 860px){
          .nav{ display:flex; }
        }

        .burger{
          width: 42px; height: 42px;
          border:none; background:none; cursor:pointer;
          display:flex; flex-direction:column; align-items:center; justify-content:center; gap:6px;
        }
        .burger span{
          width: 24px; height: 2px; background: var(--ink);
          transition: transform 0.25s ease, opacity 0.25s ease;
        }
        .burger-open span:nth-child(1){ transform: translateY(8px) rotate(45deg); }
        .burger-open span:nth-child(2){ opacity: 0; }
        .burger-open span:nth-child(3){ transform: translateY(-8px) rotate(-45deg); }
        @media (min-width: 860px){ .burger{ display:none; } }

        .nav-open{
          display:flex;
          flex-direction:column;
          position:absolute; top:84px; left:0; right:0;
          background:var(--cream);
          border-bottom:1px solid rgba(28,26,21,0.1);
          padding: 8px 28px 20px;
        }
        .nav-open a{ padding: 12px 0; border-top:1px solid rgba(28,26,21,0.08); }
      `}</style>
    </header>
  )
}
