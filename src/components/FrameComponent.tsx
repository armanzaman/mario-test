import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.sectionWrapper, className].join(" ")}>
      <div className={styles.section}>
        <div className={styles.servicesDescription}>
          <h3 className={styles.findServicesAnd}>
            Find services and providers for over 1,000 insurance plans
          </h3>
        </div>
        <div className={styles.insuranceActions}>
          <div className={styles.button}>
            <img
              className={styles.image1Icon}
              loading="lazy"
              alt=""
              src="/image-1@2x.png"
            />
          </div>
          <div className={styles.insuranceButtons}>
            <div className={styles.addInsurance}>
              <div className={styles.insuranceOptions}>
                <div className={styles.button1}>
                  <img
                    className={styles.image2Icon}
                    loading="lazy"
                    alt=""
                    src="/image-2@2x.png"
                  />
                </div>
                <div className={styles.button1}>
                  <img
                    className={styles.image3Icon}
                    loading="lazy"
                    alt=""
                    src="/image-3@2x.png"
                  />
                </div>
              </div>
              <div className={styles.buttonWrapper}>
                <div className={styles.button3}>
                  <button className={styles.button4}>
                    <div className={styles.addYourInsurance}>
                      Add your insurance coverage
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.button}>
              <img
                className={styles.image4Icon}
                loading="lazy"
                alt=""
                src="/image-4@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
