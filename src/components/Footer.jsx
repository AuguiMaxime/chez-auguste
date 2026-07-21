export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <span className="footer-brand">Chez Auguste</span>
          <p>14 place du Marché, 46000 — entre Toulouse et le Lot</p>
        </div>
        <nav className="footer-nav">
          <a href="#mentions">Mentions légales</a>
          <a href="#confidentialite">Confidentialité</a>
          <a href="#top">Haut de page</a>
        </nav>
        <p className="footer-copy">© 2026 Chez Auguste — SIRET 798 456 231 00012</p>
      </div>

      <style>{`
        .footer{ background: var(--ink); color: rgba(251,246,238,0.6); padding: 44px 0; }
        .footer-inner{ display:flex; flex-wrap:wrap; gap:20px; align-items:center; justify-content:space-between; }
        .footer-brand{ font-family: var(--font-display); font-style: italic; font-size: 1.2rem; color: var(--cream); display:block; margin-bottom:4px; }
        .footer p{ font-size: 0.85rem; margin:0; }
        .footer-nav{ display:flex; gap: 22px; flex-wrap:wrap; }
        .footer-nav a{ font-size: 0.85rem; }
        .footer-nav a:hover{ color: var(--mustard); }
        .footer-copy{ width:100%; font-size: 0.72rem; opacity:0.6; margin-top: 14px; }
      `}</style>
    </footer>
  )
}
