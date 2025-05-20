import { useLocation } from "react-router-dom";
import styles from "../../assets/css/FomulaireContact.module.css"
import { useEffect } from "react";
function FormulaireContact() {

const location = useLocation();
let title = location.state?.title;

useEffect(()=>{

},[])
  return <>
  

<section className={styles.contactFormSection}>
  <p>Remplissez ce formulaire et nous vous répondrons rapidement.</p>

  <form className={styles.contactForm}>
    <input type="text" placeholder="Votre nom" name="userName" id="userName" />

    <input
      type="tel"
      placeholder="Votre numéro de téléphone *"
      name="userPhone"
      id="userPhone"
      required
    />

    <input
      type="email"
      placeholder="Votre adresse e-mail"
      name="userEmail"
      id="userEmail"
    />

   

    <select name="requestSubject" id="requestSubject" required defaultValue={title}>
  <option value="">Quel est le sujet de votre demande ?</option>

  <option value="Ouverture de porte">Ouverture de porte</option>
  <option value="Remplacement de serrure">Remplacement de serrure</option>
  <option value="Porte blindée">Pose de porte blindée</option>

  <option value="Serrure électronique">Serrure électronique</option>
  <option value="Digicode">Digicode</option>

  <option value="Vitrerie (simple/double vitrage)">Vitrerie (simple/double vitrage)</option>
  <option value="Volet électrique / manuel">Volet électrique / manuel</option>

  <option value="Caméra de surveillance">Caméra de surveillance</option>
  <option value="Sécurisation après effraction">Sécurisation après effraction</option>

  <option value="autre">Autre</option>
</select>

    <textarea
      placeholder="Votre message *"
      name="userMessage"
      id="userMessage"
      required
    ></textarea>

    <button type="submit"> Envoyer ma demande</button>
  </form>
</section>

  </>
}

export default FormulaireContact