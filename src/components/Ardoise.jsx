import { useReveal } from '../useReveal'

const menu = {
  entrees: [
    { name: 'Velouté de courge, noisettes torréfiées', price: '9' },
    { name: 'Tartare de betteraves, fromage frais de chèvre', price: '11' },
    { name: 'Terrine de campagne maison, pickles du moment', price: '10' },
  ],
  plats: [
    { name: 'Joue de bœuf braisée, purée de céleri', price: '21' },
    { name: 'Truite de l\u2019Aveyron, beurre blanc à l\u2019oseille', price: '22' },
    { name: 'Risotto crémeux aux champignons de saison', price: '18' },
  ],
  desserts: [
    { name: 'Tarte fine aux pommes, crème fraîche épaisse', price: '8' },
    { name: 'Fondant au chocolat, glace au caramel beurre salé', price: '9' },
  ],
}

function ChalkUnderline({ delay }) {
  return (
    <svg className="chalk-underline" viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M2 6 Q 50 2, 100 6 T 198 5"
        style={{ animationDelay: `${delay}ms` }}
      />
    </svg>
  )
}

function MenuColumn({ title, items, startDelay }) {
  return (
    <div className="menu-col">
      <h3>{title}</h3>
      <ul>
        {items.map((item, i) => (
          <li key={item.name} style={{ transitionDelay: `${startDelay + i * 90}ms` }}>
            <div className="item-row">
              <span className="item-name">{item.name}</span>
              <span className="item-price">{item.price}\u20ac</span>
            </div>
            <ChalkUnderline delay={startDelay + i * 90 + 250} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Ardoise() {
  const [ref, inView] = useReveal(0.2)

  return (
    <section className="ardoise-section" id="ardoise">
      <div className="wrap">
        <p className="eyebrow" style={{ color: 'var(--mustard)' }}>chaque semaine, une nouvelle ardoise</p>
        <h2 className="ardoise-title">Ce qu'il y a de bon cette semaine</h2>

        <div ref={ref} className={`ardoise-board ${inView ? 'in-view' : ''}`}>
          <MenuColumn title="Entrées" items={menu.entrees} startDelay={0} />
          <MenuColumn title="Plats" items={menu.plats} startDelay={120} />
          <MenuColumn title="Desserts" items={menu.desserts} startDelay={240} />
        </div>
        <p className="ardoise-note">
          Formule déjeuner du mardi au vendredi : entrée + plat ou plat + dessert, 18€.
        </p>
      </div>

      <style>{`
        .ardoise-section{ padding: 96px 0; background: var(--cream-deep); }
        .ardoise-title{
          font-size: clamp(1.8rem, 3.4vw, 2.4rem);
          margin: 6px 0 44px;
        }
        .ardoise-board{
          background: #263329;
          border-radius: 10px;
          padding: 44px 36px;
          display: grid;
          gap: 36px;
          box-shadow: 0 20px 50px rgba(28,26,21,0.18);
        }
        @media (min-width: 780px){
          .ardoise-board{ grid-template-columns: repeat(3, 1fr); }
        }
        .menu-col h3{
          font-family: var(--font-script);
          font-size: 1.6rem;
          color: var(--mustard);
          margin-bottom: 18px;
        }
        .menu-col ul{ list-style:none; margin:0; padding:0; }
        .menu-col li{
          margin-bottom: 22px;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .ardoise-board.in-view .menu-col li{ opacity: 1; transform: translateY(0); }

        .item-row{
          display:flex; justify-content:space-between; gap: 12px;
          font-family: var(--font-body);
          color: #F3EFE4;
          font-size: 0.96rem;
        }
        .item-price{
          font-family: var(--font-script);
          color: var(--mustard);
          font-size: 1.15rem;
          flex-shrink:0;
        }
        .chalk-underline{ width: 100%; height: 8px; display:block; margin-top: 3px; }
        .chalk-underline path{
          fill:none;
          stroke: rgba(243,239,228,0.4);
          stroke-width: 2;
          stroke-linecap: round;
          stroke-dasharray: 210;
          stroke-dashoffset: 210;
        }
        .ardoise-board.in-view .chalk-underline path{
          animation: draw-chalk 0.7s ease forwards;
        }
        @keyframes draw-chalk{
          to{ stroke-dashoffset: 0; }
        }

        .ardoise-note{
          margin-top: 26px;
          font-family: var(--font-script);
          font-size: 1.2rem;
          color: var(--bordeaux);
        }
      `}</style>
    </section>
  )
}
