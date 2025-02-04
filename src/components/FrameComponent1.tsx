import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.divWrapper, className].join(" ")}>
      <div className={styles.div}>
        <div className={styles.joinTitle}>
          <h2 className={styles.readyToSave}>Ready to Save on Healthcare?</h2>
        </div>
        <div className={styles.joinDescription}>
          <div className={styles.joinThousandsOf}>
            Join thousands of people who are saving money on their healthcare
            expenses with
          </div>
          <div className={styles.marioHealth}>
            <div className={styles.marioHealth1}>Mario Health</div>
          </div>
        </div>
        <button className={styles.buttonWrapper}>
          <div className={styles.button}>
            <div className={styles.getStarted}>Get Started</div>
          </div>
        </button>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
