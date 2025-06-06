// import { useNavigate } from "react-router-dom";
// import styles from "../../assets/css/ServicesCard.module.css"
// export default function ServicesCard({ icon, title, description, image }: any) {
//   const navigate = useNavigate();
//   const handleDevis= (servicesTitle:string)=>{
//     console.log(servicesTitle)
//  navigate("/contact",{
//   state:{
//     title: servicesTitle
//   }
//  })

//   }
//   return (
//     <div className={styles.card}>

//       <img className={styles.image} src={image|| "/images/default-service.webp"} alt={title} />
//       <h2>{icon} {title}</h2>
//       <p>{description}</p>
//       <div className={styles.buttons}>
//         <a href="tel:0760961655">📞 Intervention immédiate</a>
//         <button onClick={()=>handleDevis(title)}> Devis</button>
//         <button onClick={()=>handleDevis(title)}> Tarif</button>
//       </div>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import styles from "../../assets/css/ServicesCard.module.css";

export default function ServicesCard({ icon, title, description, image }: any) {
  const navigate = useNavigate();

  const handleDevis = (servicesTitle: string) => {
    navigate("/contact", {
      state: { title: servicesTitle }
    });
  };

  return (
    <div className={styles.card}>
      <img className={styles.image} src={image || "/images/default-service.webp"} alt={`Service ${title}`} />
      
      <div className={styles.header}>
        <span className={styles.icon}>{icon}</span>
        <h2 className={styles.title}>{title}</h2>
      </div>

      <p className={styles.description}>{description}</p>

      <div className={styles.buttons}>
        <a href="tel:0760961655" className={styles.call}>📞 Intervention immédiate</a>
        <button onClick={() => handleDevis(title)}>Devis</button>
        <button onClick={() => handleDevis(title)}>Tarif</button>
      </div>
    </div>
  );
}
