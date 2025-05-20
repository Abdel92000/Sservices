import styles from '../../assets/css/SecuritySection.module.css';
import lockImage from "../../../public/images/png-transparent-lock-3d-icon-thumbnail-removebg-preview.png" 

export default function SecuritySection() {
  return (
    <section className={styles.security}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Améliorez votre sécurité avec nous</h2>
          <p>
            S Services propose des solutions de pointe pour améliorer la sécurité de vos biens.
            Notre équipe vous aide à sécuriser efficacement vos locaux, garantissant ainsi votre tranquillité d'esprit et celle de vos proches.
          </p>
          <a href="#services" className={styles.link}>📘 En savoir plus</a>
        </div>
        <div className={styles.image}>
          <img src={lockImage} alt="Clé et serrure" />
        </div>
      </div>
    </section>
  );
}
