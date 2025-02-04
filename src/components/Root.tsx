import HeroContainer from "./HeroContainer";
import FrameComponent from "./FrameComponent";
import FrameComponent1 from "./FrameComponent1";
import SpecialtiesContainer from "./SpecialtiesContainer";
import PriceComparison from "./PriceComparison";
import PropTypes from "prop-types";
import styles from "./Root.module.css";

const Root = ({ className = "" }) => {
  return (
    <div className={[styles.root, className].join(" ")}>
      <section className={styles.div}>
        <HeroContainer />
        <FrameComponent />
        <FrameComponent1 />
        <h1 className={styles.browseTheMost}>
          Browse the most common specialties
        </h1>
        <SpecialtiesContainer />
      </section>
      <PriceComparison />
    </div>
  );
};

Root.propTypes = {
  className: PropTypes.string,
};

export default Root;
