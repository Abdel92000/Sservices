
import styles from "../assets/css/pages/Apropos.module.css";
import CardMethod from "../components/apropos/CardMethod";
export default function Apropos() {

 
  return (
//     <section className={styles.section}>
//       {/* <div className={styles.container}> */}
//         <div className={styles.intro}>
//           <h1>À propos de S Services</h1>
//           <p>🔐 Votre sécurité, notre priorité depuis plus de 10 ans</p>
//         </div>

//         {/* <div className={styles.work}>
          
//                 <div className={styles.headercard}>
//                   <img src="/public/images/quiImage.webp" alt="" />
//                   <h2> Qui sommes-nous ? </h2>
//                 </div>

//                 <div className={styles.textCard}>
//                   <p>
//                     S Services est une entreprise de serrurerie basée en Île-de-France, spécialisée dans les dépannages, 
//                     l’ouverture de portes, le remplacement de serrures et l’installation de systèmes de sécurité. 
//                     Nous intervenons rapidement, efficacement, et à prix justes.
//                   </p>
//                 </div>

//         </div> */}

//          <div className={styles.work}>
//           {/* titre de la carte avec icone */}
//          <div className={styles.headercard}>
//           <img src="/images/mainTravail-removebg-preview.webp" alt="" />
//           <h2>SÉCURITÉ & FIABILITÉ </h2>
//          </div>

//           {/* Text de la carte */}
//         <div className={styles.textCard}>
//           <p>
//             S Services est une entreprise de serrurerie basée en Île-de-France, spécialisée dans les dépannages, 
//             l’ouverture de portes, le remplacement de serrures et l’installation de systèmes de sécurité. 
//             Nous intervenons rapidement, efficacement, et à prix justes.
//           </p>
//         </div>

//         </div>

//          <div className={styles.work}>
//           {/* titre de la carte avec icone */}
//          <div className={styles.headercard}>
//           <img src="/images/localisation.webp" alt="" />
//           <h2> Nous intervenons sur quel secteur ? </h2>
//          </div>

//           {/* Text de la carte */}
//         <div className={styles.textCard}>
//           <p>
//             S Services est une entreprise de serrurerie basée en Île-de-France, spécialisée dans les dépannages, 
//             l’ouverture de portes, le remplacement de serrures et l’installation de systèmes de sécurité. 
//             Nous intervenons rapidement, efficacement, et à prix justes.
//           </p>
//         </div>

//         </div>

// <div className={styles.containerCardmethod}>
// <CardMethod
//   title="Vous nous contactez"
//   text="Un simple appel ou une demande via notre formulaire, et on vous propose un devis gratuit."
//   img="/images/3250.webp"
//   alt="Contact"
// />

// <CardMethod
//   title="Intervention sur place"
//   text="Un serrurier arrive en 30 minutes avec tout le matériel nécessaire pour agir immédiatement."
//   img="/images/portrait-man-room-opening-door-with-hands-gloves.webp"
//   alt="Intervention"
// />

// <CardMethod
//   title="Suivi & tranquillité"
//   text="Vous recevez votre facture, vos garanties, et nous restons disponibles pour toute question."
//   img="/images/personne-payant-la-facture-dans-un-restaurant-utilisant-la-technologie-nfc.webp"
//   alt="Suivi"
// />

// </div>
//        {/* </div> */}
//     </section>


    <section className={styles.section}>
      <div className={styles.hero}>
        <h1>À propos de S Services</h1>
        <p>
          Depuis plus de 10 ans, notre mission est simple : garantir votre sécurité
          avec une réactivité maximale, une transparence totale et un savoir-faire éprouvé.
        </p>
      </div>

      <div className={styles.story}>
        <h2>Notre parcours</h2>
        <p>
          Fondée en 2014, S Services est née de la volonté d’offrir des interventions de serrurerie
          rapides, fiables et humaines. Aujourd’hui, nous sommes présents dans toute l’Île-de-France,
          avec une équipe disponible 24h/24 et 7j/7.
        </p>
      </div>

      <div className={styles.commitmentsSection}>
        <h2>Nos engagements</h2>
        <div className={styles.commitments}> 
          <div className={styles.commitment}>
            <img src="images/technicienCertifié.webp" alt="Techniciens certifiés" />
            <h3>Techniciens certifiés</h3>
            <p>Chaque intervenant est formé, assuré, et engagé dans une démarche qualité.</p>
          </div>

          <div className={styles.commitment}>
            <img src="/images/calculatrice.webp" alt="Tarifs transparents" />
            <h3>Tarifs transparents</h3>
            <p>Aucun frais caché. Vous recevez un devis clair avant toute intervention.</p>
          </div>

          <div className={styles.commitment}>
            <img src="/images/assitanteClient.webp" alt="Suivi humain" />
            <h3>Suivi humain</h3>
            <p>Une question ? Une demande après intervention ? On vous répond rapidement.</p>
          </div>
        </div>
      </div>

      <div className={styles.team}>
        <h2>Notre équipe</h2>
        <p>
          Une équipe soudée, disponible 24h/24, composée de serruriers expérimentés,
          de conseillers à l’écoute et de coordinateurs d’intervention dédiés à votre tranquillité.
        </p>
      </div>
    </section>
  );
}
