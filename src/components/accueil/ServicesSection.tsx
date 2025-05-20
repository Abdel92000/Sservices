import { motion } from 'framer-motion';
import styles from '../../assets/css/ServicesSection.module.css';
export default function ServicesSection() {
  return (
    <section className={styles.services}>
      <h2>Nos services</h2>
      <div className={styles.grid}>

        <motion.div
  className={styles.card}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.3 }}
>
  <h3>🔓 Ouverture de porte</h3>
  <p>Intervention rapide pour toute porte claquée, fermée ou blindée.</p>
  <img src="/images/portrait-man-room-opening-door-with-hands-gloves.webp" alt="" />
</motion.div>

<motion.div
  className={styles.card}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  viewport={{ once: true, amount: 0.3 }}
>
  <h3>🔑 Remplacement de serrure</h3>
  <p>Remplacement de serrures après perte de clé ou effraction.</p>
  <img src="/images/metallic-key-door-lock (1).webp" alt="" />
</motion.div>

<motion.div
  className={styles.card}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true, amount: 0.3 }}
>
  <h3>🔒 Pose de serrure 3 points</h3>
  <p>Installation sécurisée pour renforcer la protection de votre logement.</p>
  <img src="/images/serrure-3-point.webp" alt="" />
</motion.div>

<motion.div
  className={styles.card}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ once: true, amount: 0.3 }}
>
  <h3>🛡️ Sécurisation après effraction</h3>
  <p>Réparation et sécurisation de porte après cambriolage.</p>
  <img src="/images/securite-porte-entreprise-1500x1000.webp" alt="" />
</motion.div>

      </div>
    </section>
  );
}
