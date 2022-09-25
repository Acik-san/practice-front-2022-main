import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import CONSTANTS from '../../constants';
import SlideBar from '../../components/HomeComponent/SlideBar/SlideBar';
import Footer from '../../components/Footer/Footer';
import styles from './Home.module.sass';
import carouselConstants from '../../carouselConstants';
import Spinner from '../../components/Spinner/Spinner';
import WhySquadHelp from '../../components/HomeComponent/WhySquadHelp';
import Button from '../../components/Button';
import Sponsors from '../../components/HomeComponent/Sponsors';
import Steps from '../../components/HomeComponent/Steps';
import HomeHeading from '../../components/HomeComponent/HomeHeading';
import Headline from '../../components/HomeComponent/Headline';
import ManagedContests from '../../components/HomeComponent/ManagedContests';

const Home = (props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(timeout);
    };
  }, [index]);

  const { isFetching } = props;

  const text =
    CONSTANTS.HEADER_ANIMATION_TEXT[
      index % CONSTANTS.HEADER_ANIMATION_TEXT.length
    ];

  return (
    <>
      <Header />
      {isFetching ? (
        <Spinner mtop />
      ) : (
        <>
          <div className={styles.container}>
            <HomeHeading text={text} />
            <div className={styles.greyContainer}>
              <SlideBar
                images={carouselConstants.mainSliderImages}
                carouselType={carouselConstants.MAIN_SLIDER}
              />
            </div>
            <WhySquadHelp />
            <Sponsors />
            <Steps />
            <Headline classNames={[styles.headerBar, styles.blueUnderline]} />
            <SlideBar
              images={carouselConstants.exampleSliderImages}
              carouselType={carouselConstants.EXAMPLE_SLIDER}
            />
            <Button
              name={CONSTANTS.BUTTON_NAME.DASHBOARD}
              path={CONSTANTS.PATH.DASHBOARD}
            />
            <div className={styles.blueContainer}>
              <h2 className={styles.whiteUnderline}>What our customers say</h2>
              <SlideBar
                images={carouselConstants.feedbackSliderImages}
                carouselType={carouselConstants.FEEDBACK_SLIDER}
              />
            </div>
            <ManagedContests />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { isFetching } = state.userStore;
  return { isFetching };
};

export default connect(mapStateToProps, null)(Home);
