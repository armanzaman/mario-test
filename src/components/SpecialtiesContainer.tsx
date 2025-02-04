import PropTypes from "prop-types";
import styles from "./SpecialtiesContainer.module.css";

const SpecialtiesContainer = ({ className = "" }) => {
  return (
    <div className={[styles.specialtiesContainer, className].join(" ")}>
      <div className={styles.div}>
        <div className={styles.div1}>
          <div className={styles.div2}>
            <div className={styles.i} />
            <img
              className={styles.specialtyCardsIcon}
              loading="lazy"
              alt=""
              src="/frame-3.svg"
            />
          </div>
          <div className={styles.specialtyNames}>
            <div className={styles.primaryCare}>Primary Care</div>
          </div>
        </div>
        <div className={styles.div1}>
          <div className={styles.div2}>
            <div className={styles.i1} />
            <img
              className={styles.frameIcon}
              loading="lazy"
              alt=""
              src="/frame-4.svg"
            />
          </div>
          <div className={styles.ctScanWrapper}>
            <div className={styles.ctScan}>CT Scan</div>
          </div>
        </div>
        <div className={styles.div1}>
          <div className={styles.div2}>
            <img
              className={styles.frameIcon1}
              loading="lazy"
              alt=""
              src="/frame-5.svg"
            />
          </div>
          <div className={styles.mriWrapper}>
            <div className={styles.mri}>MRI</div>
          </div>
        </div>
        <div className={styles.div7}>
          <div className={styles.div2}>
            <img
              className={styles.frameIcon2}
              loading="lazy"
              alt=""
              src="/frame-6.svg"
            />
          </div>
          <div className={styles.xRayWrapper}>
            <div className={styles.xRay}>X-Ray</div>
          </div>
        </div>
        <div className={styles.div1}>
          <div className={styles.div2}>
            <img
              className={styles.frameIcon3}
              loading="lazy"
              alt=""
              src="/frame-7.svg"
            />
          </div>
          <div className={styles.ctScanWrapper}>
            <div className={styles.ctScan}>OB-GYN</div>
          </div>
        </div>
      </div>
    </div>
  );
};

SpecialtiesContainer.propTypes = {
  className: PropTypes.string,
};

export default SpecialtiesContainer;
