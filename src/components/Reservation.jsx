import { useState } from 'react'

const initialForm = { nom: '', email: '', telephone: '', date: '', couverts: '2' }

function validate(form) {
  const errors = {}
  if (form.nom.trim().length < 2) errors.nom = 'Merci d\u2019indiquer votre nom.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = 'Adresse email invalide.'
  if (!/^(\+33|0)[1-9](\s?\d{2}){4}$/.test(form.telephone.trim())) errors.telephone = 'Numéro invalide (ex: 06 12 34 56 78).'
  if (!form.date) errors.date = 'Merci de choisir une date.'
  return errors
}

export default function Reservation() {
  const [form, setForm] = useState(initialForm)
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    const next = { ...form, [name]: value }
    setForm(next)
    if (touched[name]) setErrors(validate(next))
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validate(form))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const allErrors = validate(form)
    setErrors(allErrors)
    setTouched({ nom: true, email: true, telephone: true, date: true })
    if (Object.keys(allErrors).length > 0) return

    // Démo de portfolio : aucune requête réelle n'est envoyée
    setSent(true)
    setForm(initialForm)
    setTouched({})
  }

  return (
    <section className="reservation" id="reservation">
      <div className="wrap reservation-grid">
        <div className="reservation-intro">
          <p className="eyebrow" style={{ color: 'var(--mustard)' }}>vous &amp; nous, autour d'une table</p>
          <h2>Réserver une table</h2>
          <p>Nous répondons personnellement à chaque demande sous 24h. Pour un groupe de plus de 8 personnes, appelez-nous directement.</p>
          <ul className="reservation-details">
            <li>05 61 22 00 00</li>
            <li>reservation@chez-auguste.fr</li>
            <li>Mardi – samedi, 12h–14h / 19h30–22h</li>
          </ul>
        </div>

        <form className="reservation-form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="nom">Nom</label>
            <input id="nom" name="nom" value={form.nom} onChange={handleChange} onBlur={handleBlur} />
            {touched.nom && errors.nom && <span className="error">{errors.nom}</span>}
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} onBlur={handleBlur} />
            {touched.email && errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="field">
            <label htmlFor="telephone">Téléphone</label>
            <input id="telephone" name="telephone" value={form.telephone} onChange={handleChange} onBlur={handleBlur} placeholder="06 12 34 56 78" />
            {touched.telephone && errors.telephone && <span className="error">{errors.telephone}</span>}
          </div>
          <div className="field">
            <label htmlFor="date">Date &amp; heure souhaitées</label>
            <input id="date" name="date" type="datetime-local" value={form.date} onChange={handleChange} onBlur={handleBlur} />
            {touched.date && errors.date && <span className="error">{errors.date}</span>}
          </div>
          <div className="field field-full">
            <label htmlFor="couverts">Nombre de couverts</label>
            <select id="couverts" name="couverts" value={form.couverts} onChange={handleChange}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>{n} {n > 1 ? 'personnes' : 'personne'}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn-submit field-full">Envoyer la demande</button>
          {sent && <p className="success field-full">Demande envoyée — nous confirmons votre table sous 24h.</p>}
        </form>
      </div>

      <style>{`
        .reservation{ padding: 96px 0; background: #263329; }
        .reservation-grid{ display:grid; gap: 48px; }
        @media (min-width: 900px){
          .reservation-grid{ grid-template-columns: 0.8fr 1.2fr; }
        }
        .reservation-intro h2{ color: #FBF6EE; font-size: clamp(1.7rem,3.2vw,2.3rem); margin: 6px 0 18px; }
        .reservation-intro p{ color: rgba(251,246,238,0.7); max-width: 40ch; margin-bottom: 22px; }
        .reservation-details{ list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:8px; color: rgba(251,246,238,0.75); font-size: 0.9rem; }

        .reservation-form{
          display:grid; grid-template-columns: 1fr 1fr; gap: 18px;
          background: var(--cream);
          padding: 30px;
          border-radius: 8px;
        }
        .field{ display:flex; flex-direction:column; gap:6px; }
        .field-full{ grid-column: 1 / -1; }
        .field label{ font-size: 0.8rem; color: #5a5748; font-weight: 600; }
        .field input, .field select{
          font-family: var(--font-body);
          padding: 12px 14px;
          border: 1px solid rgba(28,26,21,0.2);
          border-radius: 4px;
          background: #fff;
          font-size: 0.95rem;
        }
        .error{ color: var(--bordeaux); font-size: 0.78rem; }
        .btn-submit{
          background: var(--bordeaux); color: var(--cream);
          border: none; padding: 15px 20px; border-radius: 999px;
          font-weight: 600; cursor:pointer;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .btn-submit:hover{ background: #5e2222; transform: translateY(-2px); }
        .success{ color: var(--sage); font-weight: 600; font-size: 0.9rem; }
      `}</style>
    </section>
  )
}
