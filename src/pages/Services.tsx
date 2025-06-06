// import { motion } from "framer-motion";
// import ServiceCard from "../components/services/ServicesCard";
// import styles from "../assets/css/pages/Services.module.css"
// export default function Services() {

//   return (
//     <>
//    <section style={{ width: "100vw", height: "50vh", overflow: "hidden" }}>
//       <img
//         src="/images/chris-liverani-9cd8qOgeNIY-unsplash.jpg"
//         alt="Serrurerie"
//         style={{ width: "100%", height: "100%", objectFit: "cover" }}
//       />
//    </section>
    
//     <section style={{ padding: "2rem",textAlign:"center" }}>
//       {/* <h1>Bienvenue chez S Services</h1> */}
//       <motion.h1
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//           Nos Services 
//       </motion.h1>
//     </section>

// {/* première ligne de serivces  */}

// <h3 className={styles.groupTitle}>🔐 Serrurerie</h3>
// <motion.div className={styles.servicesRow}
//  initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }} >
//   <ServiceCard
//     icon="🔓"
//     title="Ouverture de porte"
//     description="Porte claquée ou bloquée ? Nous intervenons rapidement sans dégâts, 24h/24."
//     image="/images/portrait-man-room-opening-door-with-hands-gloves.webp"
    
//   />
//   <ServiceCard
//     icon="🛠️"
//     title="Remplacement de serrure"
//     description="Remplacement sécurisé après perte de clés ou tentative d'effraction."
//     image="/images/remplacement-serrure-porte-poignee-loquet-par-neuve_351981-2526.webp"

//   />
//   <ServiceCard
//     icon="🚪"
//     title="Porte blindée"
//     description="Pose de porte blindée pour une sécurité renforcée."
//     image="/images/portes-sont-vendues-dans-magasin-quincaillerie_255667-69209.webp"
//   />
// </motion.div>

// {/* deuxieme ligne de serivces  */}

// <h3 className={styles.groupTitle}>💡 Électronique</h3>
// <div className={styles.servicesRow}
//  >
//   <ServiceCard
//     icon="🔢"
//     title="Serrure électronique"
//     description="Contrôle d'accès moderne avec clavier, badge ou application."
//     image="/images/serrureElec.webp"
//   />
//   <ServiceCard
//     icon="🎛️"
//     title="Digicode"
//     description="Accès simplifié par code numérique sécurisé."
//     image="/images/digicode.webp"
//   />
// </div>

// {/* troisième ligne de serivces  */}

// <h3 className={styles.groupTitle}>🪟 Vitrerie & Menuiserie</h3>
// <div className={styles.servicesRow} >
//   <ServiceCard
//     icon="🪞"
//     title="Vitrerie (simple/double vitrage)"
//     description="Installation ou remplacement de vitrages simples et doubles."
//     image="/images/coup-moyen-homme-tenant-la-perceuse.webp"
//   />
//   <ServiceCard
//     icon="🪟"
//     title="Volet électrique / manuel"
//     description="Pose et réparation de volets manuels ou motorisés."
//     image="/images/9167205_2786-removebg-preview.webp"
//   />
// </div>

// {/* quatrième ligne de serivces  */}

// <h3 className={styles.groupTitle}>🎥 Sécurité</h3>
// <div className={styles.servicesRow}
// >
//   <ServiceCard
//     icon="📷"
//     title="Caméra de surveillance"
//     description="Installation de caméras de sécurité intérieures et extérieures."
//     image="/images/camera.webp"
//   />
 
// </div>
//     </>

//   );
// }

// Services.tsx

import { motion } from "framer-motion";
import ServiceCard from "../components/services/ServicesCard";
import styles from "../assets/css/pages/Services.module.css";

export default function Services() {
  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <img
          src="/images/chris-liverani-9cd8qOgeNIY-unsplash.jpg"
          alt="Serrurerie"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={styles.heroTitle}
          >
            Nos Services Professionnels
          </motion.h1>
          <p className={styles.heroSubtitle}>
            Des solutions modernes pour renforcer la sécurité de vos locaux et logements
          </p>
        </div>
      </section>

      <section className={styles.servicesContainer}>
        <h3 className={styles.groupTitle}>🔐 Serrurerie</h3>
        <motion.div className={styles.servicesRow} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <ServiceCard
            icon="🔓"
            title="Ouverture de porte"
            description="Porte claquée ou bloquée ? Intervention rapide sans dégâts, 24h/24."
            image="/images/portrait-man-room-opening-door-with-hands-gloves.webp"
          />
          <ServiceCard
            icon="🛠️"
            title="Remplacement de serrure"
            description="Remplacement sécurisé après perte de clés ou tentative d'effraction."
            image="/images/remplacement-serrure-porte-poignee-loquet-par-neuve_351981-2526.webp"
          />
          <ServiceCard
            icon="🚪"
            title="Porte blindée"
            description="Pose de porte blindée pour une sécurité renforcée."
            image="/images/portes-sont-vendues-dans-magasin-quincaillerie_255667-69209.webp"
          />
        </motion.div>

        <h3 className={styles.groupTitle}>💡 Électronique</h3>
        <motion.div className={styles.servicesRow} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <ServiceCard
            icon="🔢"
            title="Serrure électronique"
            description="Contrôle d'accès moderne avec clavier, badge ou application."
            image="/images/serrureElec.webp"
          />
          <ServiceCard
            icon="🎛️"
            title="Digicode"
            description="Accès simplifié par code numérique sécurisé."
            image="/images/digicode.webp"
          />
        </motion.div>

        <h3 className={styles.groupTitle}>🪟 Vitrerie & Menuiserie</h3>
        <motion.div className={styles.servicesRow} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <ServiceCard
            icon="🪞"
            title="Vitrerie (simple/double vitrage)"
            description="Installation ou remplacement de vitrages simples et doubles."
            image="/images/coup-moyen-homme-tenant-la-perceuse.webp"
          />
          <ServiceCard
            icon="🪟"
            title="Volet électrique / manuel"
            description="Pose et réparation de volets manuels ou motorisés."
            image="/images/9167205_2786-removebg-preview.webp"
          />
        </motion.div>

        <h3 className={styles.groupTitle}>🎥 Sécurité</h3>
        <motion.div className={styles.servicesRow} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <ServiceCard
            icon="📷"
            title="Caméra de surveillance"
            description="Installation de caméras de sécurité intérieures et extérieures."
            image="/images/camera.webp"
          />
        </motion.div>
      </section>
    </div>
  );
}