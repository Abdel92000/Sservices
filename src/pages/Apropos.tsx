
import styles from "../assets/css/pages/Apropos.module.css";
import CardMethod from "../components/apropos/CardMethod";
export default function Apropos() {

 
  return (
    <section className={styles.section}>
      {/* <div className={styles.container}> */}
        <div className={styles.intro}>
          <h1>À propos de S Services</h1>
          <p>🔐 Votre sécurité, notre priorité depuis plus de 10 ans</p>
        </div>

        {/* <div className={styles.work}>
          
                <div className={styles.headercard}>
                  <img src="/public/images/quiImage.webp" alt="" />
                  <h2> Qui sommes-nous ? </h2>
                </div>

                <div className={styles.textCard}>
                  <p>
                    S Services est une entreprise de serrurerie basée en Île-de-France, spécialisée dans les dépannages, 
                    l’ouverture de portes, le remplacement de serrures et l’installation de systèmes de sécurité. 
                    Nous intervenons rapidement, efficacement, et à prix justes.
                  </p>
                </div>

        </div> */}

         <div className={styles.work}>
          {/* titre de la carte avec icone */}
         <div className={styles.headercard}>
          <img src="/images/mainTravail-removebg-preview.webp" alt="" />
          <h2>SÉCURITÉ & FIABILITÉ </h2>
         </div>

          {/* Text de la carte */}
        <div className={styles.textCard}>
          <p>
            S Services est une entreprise de serrurerie basée en Île-de-France, spécialisée dans les dépannages, 
            l’ouverture de portes, le remplacement de serrures et l’installation de systèmes de sécurité. 
            Nous intervenons rapidement, efficacement, et à prix justes.
          </p>
        </div>

        </div>

         <div className={styles.work}>
          {/* titre de la carte avec icone */}
         <div className={styles.headercard}>
          <img src="/images/localisation.webp" alt="" />
          <h2> Nous intervenons sur quel secteur ? </h2>
         </div>

          {/* Text de la carte */}
        <div className={styles.textCard}>
          <p>
            S Services est une entreprise de serrurerie basée en Île-de-France, spécialisée dans les dépannages, 
            l’ouverture de portes, le remplacement de serrures et l’installation de systèmes de sécurité. 
            Nous intervenons rapidement, efficacement, et à prix justes.
          </p>
        </div>

        </div>

<div className={styles.containerCardmethod}>
<CardMethod
  title="Vous nous contactez"
  text="Un simple appel ou une demande via notre formulaire, et on vous propose un devis gratuit."
  img="/images/3250.webp"
  alt="Contact"
/>

<CardMethod
  title="Intervention sur place"
  text="Un serrurier arrive en 30 minutes avec tout le matériel nécessaire pour agir immédiatement."
  img="/images/portrait-man-room-opening-door-with-hands-gloves.webp"
  alt="Intervention"
/>

<CardMethod
  title="Suivi & tranquillité"
  text="Vous recevez votre facture, vos garanties, et nous restons disponibles pour toute question."
  img="/images/personne-payant-la-facture-dans-un-restaurant-utilisant-la-technologie-nfc.webp"
  alt="Suivi"
/>

</div>
       {/* </div> */}
    </section>
  );
}
