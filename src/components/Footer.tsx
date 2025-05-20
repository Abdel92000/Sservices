
import styles from "../assets/css/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.localisation}>📍 Basé à Paris et en Île-de-France</p>
        <p>
          📞 <a href="tel:0760961655">07 60 96 16 55</a>
        </p>
        <a
  href="https://www.instagram.com/sservices92/"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.socialLink}
  aria-label="Instagram"
> <img src="/images/sm_5b37de3263964__1_-removebg-preview.png" alt="" className={styles.logoFooter} /></a>
        <p>© {new Date().getFullYear()} S Services. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
