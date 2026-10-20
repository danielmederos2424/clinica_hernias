import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { wa } from '../content';

const links = [
  ['/hernias', 'Hernias'],
  ['/varices', 'Varices'],
  ['/about', 'El doctor'],
  ['/contact', 'Contacto'],
];

const Navbar = () => {
  const { pathname } = useLocation();
  // Menu belongs to the page it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState(null);
  const open = openOn === pathname;
  const close = () => setOpenOn(null);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <nav className={`nav${open ? ' open' : ''}`} aria-label="Principal">
      <div className="nav-bar">
        <Link to="/" className="nav-logo" onClick={close}>Dr. Boris Mederos</Link>
        <ul className="nav-links" id="nav-menu">
          {links.map(([to, label]) => (
            <li key={to}><NavLink to={to} onClick={close}>{label}</NavLink></li>
          ))}
        </ul>
        <a href={wa()} className="btn small nav-cta" target="_blank" rel="noopener noreferrer">Agendar</a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpenOn(open ? null : pathname)}
        >
          <span /><span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
