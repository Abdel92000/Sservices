// src/components/Header.tsx
import { Link } from 'react-router-dom';
import styles from '../assets/css/Header.module.css';
import { useState } from 'react';

export default function Header() {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>S Services</h1>

        <button className={styles.burger} onClick={()=> setMenuOpen(!menuOpen)} aria-label="Menu">
=
        </button>
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/apropos" onClick={() => setMenuOpen(false)}>À propos</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Devis</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
