import { motion } from "framer-motion";
import WhyChooseSection from "../components/accueil/PourquoiChoisirSection";
import SecuritySection from "../components/accueil/SecuritySection";
import ServicesOverview from "../components/accueil/ServicesOverview";
import { useLocation } from "react-router-dom";
import Confiance from "../components/accueil/Confiance";
export default function Accueil() {
const location = useLocation();
let title = location.state?.title;
console.log(title)

  return (
    <>
   <section style={{ width: "100vw", height: "50vh", overflow: "hidden" }}>
  <img
    src="/images/pexels-asphotograpy-101808.webp"
    alt="Serrurerie"
    loading="eager" decoding="async"
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
</section>
    
    <section style={{ padding: "2rem",textAlign:"center" }}>
      {/* <h1>Bienvenue chez S Services</h1> */}
      <motion.h1
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  Bienvenue chez S Services 
</motion.h1>

      <p>Intervention rapide 24h/24 – 7j/7, serrurerie à Paris et IDF.</p>
      <p
  style={{
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "white",
    marginTop: "0.5rem",
    backgroundColor: "#FF6B00",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    display: "inline-block",
    boxShadow: "0 2px 4px rgba(0,0,0,0.15)"
  }}
>
   07 60 96 16 55
</p>


    </section>
     {/* <ServicesSection /> */}
    <ServicesOverview/>
     <SecuritySection/>
     <WhyChooseSection />
     <Confiance/>

    </>

  );
}
