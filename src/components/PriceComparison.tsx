import PropTypes from "prop-types";
import styles from "./PriceComparison.module.css";

const PriceComparison = ({ className = "" }) => {
  return (
    <section className={[styles.priceComparison, className].join(" ")}>
      <div className={styles.div}>
        <div className={styles.div1}>
          <div className={styles.comparisonItems}>
            <div className={styles.comparisonContent}>
              <div className={styles.comparisonCards}>
                <div className={styles.div2}>
                  <img
                    className={styles.comparisonHeadersIcon}
                    loading="lazy"
                    alt=""
                    src="/frame-8.svg"
                  />
                </div>
              </div>
              <b className={styles.compareMedicationPrices}>
                Compare Medication Prices
              </b>
            </div>
          </div>
          <div className={styles.findTheBest}>
            Find the best prices for your prescriptions across pharmacies
          </div>
        </div>
        <div className={styles.div3}>
          <div className={styles.divInner}>
            <div className={styles.comparisonContent}>
              <div className={styles.divWrapper}>
                <div className={styles.div2}>
                  <img
                    className={styles.frameIcon}
                    loading="lazy"
                    alt=""
                    src="/frame-9.svg"
                  />
                </div>
              </div>
              <b className={styles.compareMedicationPrices}>
                Healthcare Services
              </b>
            </div>
          </div>
          <div className={styles.findTheBest}>
            Compare costs for procedures and medical services
          </div>
        </div>
        <div className={styles.div5}>
          <div className={styles.divContainer}>
            <div className={styles.div2}>
              <img
                className={styles.frameIcon1}
                loading="lazy"
                alt=""
                src="/frame-10.svg"
              />
            </div>
          </div>
          <div className={styles.findProvidersWrapper}>
            <b className={styles.findProviders}>Find Providers</b>
          </div>
          <div className={styles.locateHealthcareProviders}>
            Locate healthcare providers in your area
          </div>
        </div>
      </div>
    </section>
  );
};

PriceComparison.propTypes = {
  className: PropTypes.string,
};

export default PriceComparison;
