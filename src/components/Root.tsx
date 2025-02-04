import { Select } from "@chakra-ui/react";
import {
  Select as MuiSelect,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import Div from "./Div";
import PropTypes from "prop-types";
import styles from "./Root.module.css";

const Root = ({ className = "" }) => {
  return (
    <div className={[styles.root, className].join(" ")}>
      <section className={styles.div}>
        <div className={styles.heroContainer}>
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
                  <div className={styles.div1}>
                    <div className={styles.div2}>
                      <div className={styles.div3}>
                        <input
                          className={styles.input}
                          placeholder="Drug, condition, procedure, doctor…"
                          type="text"
                        />
                      </div>
                      <div className={styles.locationInput}>
                        <div className={styles.div4}>
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
                          <b className={styles.chooseInsurance}>
                            Choose insurance
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionWrapper}>
          <div className={styles.section}>
            <div className={styles.servicesDescription}>
              <h3 className={styles.findServicesAnd}>
                Find services and providers for over 1,000 insurance plans
              </h3>
            </div>
            <div className={styles.insuranceActions}>
              <div className={styles.button1}>
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
                    <div className={styles.button2}>
                      <img
                        className={styles.image2Icon}
                        loading="lazy"
                        alt=""
                        src="/image-2@2x.png"
                      />
                    </div>
                    <div className={styles.button2}>
                      <img
                        className={styles.image3Icon}
                        loading="lazy"
                        alt=""
                        src="/image-3@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.buttonWrapper}>
                    <div className={styles.button4}>
                      <button className={styles.button5}>
                        <div className={styles.addYourInsurance}>
                          Add your insurance coverage
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.button1}>
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
        <div className={styles.divWrapper}>
          <div className={styles.div5}>
            <div className={styles.joinTitle}>
              <h2 className={styles.readyToSave}>
                Ready to Save on Healthcare?
              </h2>
            </div>
            <div className={styles.joinDescription}>
              <div className={styles.joinThousandsOf}>
                Join thousands of people who are saving money on their
                healthcare expenses with
              </div>
              <div className={styles.marioHealth}>
                <div className={styles.mri}>Mario Health</div>
              </div>
            </div>
            <button className={styles.buttonContainer}>
              <div className={styles.button7}>
                <div className={styles.getStarted}>Get Started</div>
              </div>
            </button>
          </div>
        </div>
        <h1 className={styles.browseTheMost}>
          Browse the most common specialties
        </h1>
        <div className={styles.specialtiesContainer}>
          <div className={styles.div6}>
            <Div specialtyCards="/frame-3.svg" primaryCare="Primary Care" />
            <Div
              iLeft="16px"
              iHeight="29px"
              specialtyCards="/frame-4.svg"
              primaryCare="CT Scan"
              primaryCareMinWidth="58px"
            />
            <div className={styles.div7}>
              <div className={styles.div8}>
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-5.svg"
                />
              </div>
              <div className={styles.mriWrapper}>
                <div className={styles.mri}>MRI</div>
              </div>
            </div>
            <div className={styles.div9}>
              <div className={styles.div8}>
                <img
                  className={styles.frameIcon1}
                  loading="lazy"
                  alt=""
                  src="/frame-6.svg"
                />
              </div>
              <div className={styles.xRayWrapper}>
                <div className={styles.xRay}>X-Ray</div>
              </div>
            </div>
            <div className={styles.div7}>
              <div className={styles.div8}>
                <img
                  className={styles.frameIcon2}
                  loading="lazy"
                  alt=""
                  src="/frame-7.svg"
                />
              </div>
              <div className={styles.obGynWrapper}>
                <div className={styles.obGyn}>OB-GYN</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.priceComparison}>
        <div className={styles.div13}>
          <div className={styles.div14}>
            <div className={styles.comparisonItems}>
              <div className={styles.comparisonContent}>
                <div className={styles.comparisonCards}>
                  <div className={styles.div15}>
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
          <div className={styles.div16}>
            <div className={styles.divInner}>
              <div className={styles.comparisonContent}>
                <div className={styles.divContainer}>
                  <div className={styles.div15}>
                    <img
                      className={styles.frameIcon3}
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
          <div className={styles.div18}>
            <div className={styles.divFrame}>
              <div className={styles.div15}>
                <img
                  className={styles.frameIcon4}
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
    </div>
  );
};

Root.propTypes = {
  className: PropTypes.string,
};

export default Root;
