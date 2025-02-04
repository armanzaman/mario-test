import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Div.module.css";

const Div = ({
  className = "",
  iLeft,
  iHeight,
  specialtyCards,
  primaryCare,
  primaryCareMinWidth,
}) => {
  const iStyle = useMemo(() => {
    return {
      left: iLeft,
      height: iHeight,
    };
  }, [iLeft, iHeight]);

  const primaryCareStyle = useMemo(() => {
    return {
      minWidth: primaryCareMinWidth,
    };
  }, [primaryCareMinWidth]);

  return (
    <div className={[styles.div, className].join(" ")}>
      <div className={styles.div1}>
        <div className={styles.i} style={iStyle} />
        <img
          className={styles.specialtyCardsIcon}
          loading="lazy"
          alt=""
          src={specialtyCards}
        />
      </div>
      <div className={styles.specialtyNames}>
        <div className={styles.primaryCare} style={primaryCareStyle}>
          {primaryCare}
        </div>
      </div>
    </div>
  );
};

Div.propTypes = {
  className: PropTypes.string,
  specialtyCards: PropTypes.string,
  primaryCare: PropTypes.string,

  /** Style props */
  iLeft: PropTypes.string,
  iHeight: PropTypes.string,
  primaryCareMinWidth: PropTypes.string,
};

export default Div;
