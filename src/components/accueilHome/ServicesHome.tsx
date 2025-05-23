import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDoorClosed,
  faLock,
  faVideo,
  faWindowMaximize,
  faTools,
  faKey,
  faShieldAlt,
  faKeyboard
} from '@fortawesome/free-solid-svg-icons';

import style from "../../assets/css/ServicesHome.module.css";

export default function ServicesHome() {
  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Nos services</h2>

      <section className={style.sectionServices}>

        <article className={style.card}>
          <FontAwesomeIcon icon={faDoorClosed} className={style.iconFontAwesome} />
          <h3>Porte blindée</h3>
          <p>Installation de portes blindées certifiées</p>
        </article>
        <article className={style.card}>
          <FontAwesomeIcon icon={faLock} className={style.iconFontAwesome} />
          <h3>Changement de serrure</h3>
          <p>Remplacement rapide après effraction ou perte</p>
        </article>

        <article className={style.card}>
          <FontAwesomeIcon icon={faVideo} className={style.iconFontAwesome} />
          <h3>Caméra de surveillance</h3>
          <p>Installation jour et nuit avec configuration à distance</p>
        </article>

        <article className={style.card}>
          <FontAwesomeIcon icon={faWindowMaximize} className={style.iconFontAwesome} />
          <h3>Volets roulants</h3>
          <p>Installation et dépannage rapide</p>
        </article>

        <article className={style.card}>
          <FontAwesomeIcon icon={faTools} className={style.iconFontAwesome} />
          <h3>Dépannage urgence</h3>
          <p>Intervention 24h/24 – 7j/7 sur Paris & IDF</p>
        </article>

        <article className={style.card}>
          <FontAwesomeIcon icon={faKey} className={style.iconFontAwesome} />
          <h3>Remplacement de clés</h3>
          <p>En cas de perte ou de vol de clés</p>
        </article>

        <article className={style.card}>
          <FontAwesomeIcon icon={faShieldAlt} className={style.iconFontAwesome} />
          <h3>Sécurisation après cambriolage</h3>
          <p>Renforcement immédiat de votre logement</p>
        </article>

        <article className={style.card}>
          <FontAwesomeIcon icon={faKeyboard} className={style.iconFontAwesome} />
          <h3>Serrures électroniques & digicode</h3>
          <p>Mise en place de solutions modernes sans clé</p>
        </article>

      </section>
    </>
  );
}
