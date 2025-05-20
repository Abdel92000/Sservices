import styles from '../../assets/css/Confiance.module.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
export default function Confiance() {

     const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });


  return (
    <section ref={ref}  className={styles.confiance}>
        <h2>Ils nous font confiance</h2>
        <div className={styles.containerlogo}>
<img src="/images/logoPizza.png" alt="Logo FratellinoPizza Nanterre" />
<p>“Intervention rapide et sans dégât. Très pro.”
– Fratellino Pizza 🍕</p>
        </div>

      <div className={styles.countClient}>
        {inView ?

        (
          <CountUp end={500} duration={4.75} prefix="+ " suffix=" Clients" />
        ) : (
          '+ 0 Clients'
        )}
      </div>
    </section>
  );
}
