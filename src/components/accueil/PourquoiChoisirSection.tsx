import styles from '../../assets/css/PourquoiChoisirSection.module.css';

export default function WhyChooseSection() {
  return (
    <section className={styles.why}>
      <h2>Pourquoi choisir S Services ?</h2>
      <div className={styles.grid}>
        <div className={styles.item}>
          <img src="/images/png-transparent-lock-3d-icon-thumbnail-removebg-preview.png" alt="Rapidité" />

          <h3>Sécurité maximale</h3>
          <p>Des installations sûres et fiables, pour vous protéger vous et vos biens.</p>
        </div>
        <div className={styles.item}>
          <img src="/images/reveil-rouge-fleche-jaune-pointant-droite_56104-2545-removebg-preview.png" alt="Sécurité" />

          <h3>Intervention rapide</h3>
          <p>Disponible 24h/24 – 7j/7 dans toute l'Île-de-France.</p>
        </div>
        <div className={styles.item}>
          <img src="/images/Customer_Experience_3D_Icon_transparent_emp_800.webp" alt="Expertise" />
          <h3>Expertise reconnue</h3>
          <p>Plus de 10 ans d’expérience dans le domaine de la serrurerie.</p>
        </div>
      </div>
    </section>
  );
}
