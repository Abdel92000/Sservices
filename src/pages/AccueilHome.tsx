import HeroHome from "../components/accueilHome/HeroHome";
import ServicesHome from "../components/accueilHome/ServicesHome";

export default function AccueilHome() {


  return (
    <>
   {/* <section style={{ width: "100vw", height: "50vh", overflow: "hidden" }}>
  <img
    src="/images/pexels-asphotograpy-101808.webp"
    alt="Serrurerie"
    loading="eager" decoding="async"
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
</section> */}
  <HeroHome/>
  <ServicesHome/>

    </>

  );
}
