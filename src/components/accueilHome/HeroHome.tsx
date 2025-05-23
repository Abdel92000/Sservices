

import style from "../../assets/css/HeroHome.module.css" 
export default function HeroHome(){


  return (
   <section className={style.heroSection}>
    <h1>Des solutions de serrurerie rapides et fiables à Paris </h1>
    <p>Disponible 24h/24 - Intervention en moins de 30 minutes </p>
    <button>Demander une intervention </button>
   </section>
  
  );
}
