import React from 'react';
import CONSTANTS from '../../../constants';
import styles from './WhySquadHelp.module.scss';
import data from './whySquadHelp.json';

const WhySquadHelp = () => {
  return (
    <div className={styles.container__description}>
      <h2 className={styles.blueUnderline}>Why Squadhelp?</h2>
      <div className={styles.cardContainer}>
        {data.map(({ id, img, alt, heading, content }) => (
          <div className={styles.card} key={id}>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}${img}`} alt={alt} />
            <h3>{heading}</h3>
            <p>{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySquadHelp;
