import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FAMILIES, LOGOS, type LogoStudy } from './data/logos'

const ALL = 'Todas'

export default function App() {
  const [filter, setFilter] = useState<string>(ALL)
  const [openId, setOpenId] = useState<string | null>(null)

  const visible = useMemo(
    () => (filter === ALL ? LOGOS : LOGOS.filter((logo) => logo.family === filter)),
    [filter],
  )

  const counts = useMemo(() => {
    const map = new Map<string, number>()
    for (const logo of LOGOS) map.set(logo.family, (map.get(logo.family) ?? 0) + 1)
    return map
  }, [])

  const openIndex = openId ? visible.findIndex((logo) => logo.id === openId) : -1
  const current: LogoStudy | null = openIndex >= 0 ? visible[openIndex] : null

  const close = useCallback(() => setOpenId(null), [])
  const step = useCallback(
    (delta: number) => {
      if (openIndex < 0 || visible.length === 0) return
      const next = (openIndex + delta + visible.length) % visible.length
      setOpenId(visible[next].id)
    },
    [openIndex, visible],
  )

  return (
    <div className="catalog">
      <header className="topbar">
        <a className="brand" href="#topo" aria-label="SBHCJ — voltar ao topo">
          <span className="brand__mark" aria-hidden="true">S</span>
          <span className="brand__name">SBHCJ</span>
        </a>
        <p className="topbar__meta">
          Sociedade Brasileira da História da Cultura Jurídica
          <span aria-hidden="true"> · </span>
          {visible.length} de {LOGOS.length} estudos
        </p>
      </header>

      <div className="hero" id="topo">
        <h1 className="hero__title">Galeria de estudos</h1>
        <p className="hero__sub">
          26 propostas de identidade visual — toque em uma peça para ampliar.
        </p>
      </div>

      <div className="body">
        <nav className="filters" aria-label="Filtrar por família">
          <ul>
            {[ALL, ...FAMILIES].map((family) => {
              const active = filter === family
              const count = family === ALL ? LOGOS.length : counts.get(family) ?? 0
              return (
                <li key={family}>
                  <button
                    type="button"
                    className={`filter${active ? ' is-active' : ''}`}
                    aria-pressed={active}
                    onClick={() => { setFilter(family); setOpenId(null) }}
                  >
                    <span className="filter__label">{family}</span>
                    <span className="filter__count">{String(count).padStart(2, '0')}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        <main className="grid" aria-live="polite">
          {visible.map((logo) => (
            <button
              key={logo.id}
              type="button"
              className="card"
              onClick={() => setOpenId(logo.id)}
              aria-haspopup="dialog"
              aria-label={`${logo.title} — ${logo.family}. Ampliar estudo`}
            >
              <span className="card__media">
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </span>
              <span className="card__meta">
                <span className="card__code">{logo.code}</span>
                <span className="card__title">{logo.title}</span>
                <span className="card__family">{logo.family}</span>
              </span>
            </button>
          ))}
        </main>
      </div>

      <footer className="foot">
        <span>SBHCJ · Galeria de propostas · 2026</span>
        <span>{LOGOS.length} estudos catalogados</span>
      </footer>

      {current && (
        <Lightbox
          logo={current}
          index={openIndex}
          total={visible.length}
          onClose={close}
          onStep={step}
        />
      )}
    </div>
  )
}

interface LightboxProps {
  logo: LogoStudy
  index: number
  total: number
  onClose: () => void
  onStep: (delta: number) => void
}

function Lightbox({ logo, index, total, onClose, onStep }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onStep(1)
      if (event.key === 'ArrowLeft') onStep(-1)
    }
    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose, onStep])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${logo.title} ampliado`}>
      <button type="button" className="lightbox__backdrop" onClick={onClose} aria-label="Fechar" tabIndex={-1} />
      <figure className="lightbox__frame">
        <div className="lightbox__media">
          <img src={logo.src} alt={logo.alt} />
        </div>
        <figcaption className="lightbox__panel">
          <p className="lightbox__index">
            {logo.code} <span aria-hidden="true">/</span> {String(index + 1).padStart(2, '0')}–{String(total).padStart(2, '0')}
          </p>
          <h2 className="lightbox__title">{logo.title}</h2>
          <p className="lightbox__family">{logo.family}</p>
          <p className="lightbox__note">{logo.note}</p>
          <div className="lightbox__actions">
            <button type="button" onClick={() => onStep(-1)} aria-label="Estudo anterior">← Ant.</button>
            <button type="button" onClick={() => onStep(1)} aria-label="Próximo estudo">Próx. →</button>
            <button type="button" ref={closeRef} onClick={onClose} aria-label="Fechar estudo ampliado">Fechar ×</button>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}
