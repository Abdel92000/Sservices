import { Link } from "react-router-dom";
import styles from "../../assets/css/ServicesOverview.module.css";
export default function ServicesOverview() {
  return (
    <section className={styles.overview}>
      <div className={styles.image}>
        <img src="/images/key-4516169_640.webp" alt="Services de serrurerie" />
      </div>
      <div className={styles.text}>
        <h2>Des services complets pour votre sécurité</h2>
        <p>
          Chez <strong>S Services</strong>, nous intervenons 24h/24 et 7j/7 à Paris et en
          Île-de-France. Notre équipe de serruriers qualifiés est spécialisée dans :
        </p>
        <ul>
          <li>🔓 Ouverture de portes claquées ou bloquées</li>
          <li>🔑 Remplacement de serrures après perte ou effraction</li>
          <li>🔒 Pose de serrures 3 points ou multipoints</li>
          <li>🛡️ Sécurisation après cambriolage</li>
          <li>🚪 Installation de portes blindées</li>
          <li>📱 Mise en place de serrures électroniques et digicodes</li>
        </ul>
        {/* <a href="/services" className={styles.button}>
          👉 Voir tous les services
        </a> */}
        <Link to="/services" className={styles.button}>
          👉 Voir tous les services
        </Link>
      </div>
    </section>
  );
}
