import { Select } from "@chakra-ui/react";
import {
  Select as MuiSelect,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import styles from "./HeroContainer.module.css";

const HeroContainer = ({ className = "" }) => {
  return (
    <div className={[styles.heroContainer, className].join(" ")}>
      <div className={styles.heroLeft}>
        <header className={styles.heroCenter}>
          <div className={styles.heroRight}>
            <div className={styles.menu}>
              <div className={styles.login}>
                <a className={styles.mario}>mario</a>
              </div>
              <Select className={styles.browseMenu} w="78.4px" />
              <FormControl
                className={styles.savings}
                variant="standard"
                sx={{
                  borderRadius: "0px 0px 0px 0px",
                  width: "154px",
                  height: "21px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "21px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "21px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "21px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "21px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <MuiSelect color="primary" disableUnderline displayEmpty />
                <FormHelperText />
              </FormControl>
            </div>
          </div>
          <div className={styles.userActions}>
            <div className={styles.signInButton}>
              <a className={styles.signIn}>Sign in</a>
            </div>
            <button className={styles.button}>
              <a className={styles.signUp}>Sign up</a>
            </button>
          </div>
        </header>
        <div className={styles.searchContainerWrapper}>
          <div className={styles.searchContainer}>
            <h1 className={styles.knowWhatYoureContainer}>
              <b>{`Know what you’re paying `}</b>
              <i className={styles.before}>before</i>
              <b> you go in</b>
            </h1>
            <div className={styles.searchBar}>
              <div className={styles.div}>
                <div className={styles.div1}>
                  <div className={styles.div2}>
                    <input
                      className={styles.input}
                      placeholder="Drug, condition, procedure, doctor…"
                      type="text"
                    />
                  </div>
                  <div className={styles.locationInput}>
                    <div className={styles.div3}>
                      <div className={styles.locationIcon}>
                        <img
                          className={styles.locationPinIcon}
                          alt=""
                          src="/frame-1.svg"
                        />
                      </div>
                      <input
                        className={styles.input1}
                        placeholder="Location"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className={styles.insuranceIcon}>
                    <img
                      className={styles.insuranceDropdownIcon}
                      loading="lazy"
                      alt=""
                      src="/frame-2.svg"
                    />
                  </div>
                  <div className={styles.insuranceInput}>
                    <div className={styles.input2}>
                      <b className={styles.chooseInsurance}>Choose insurance</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroContainer.propTypes = {
  className: PropTypes.string,
};

export default HeroContainer;
