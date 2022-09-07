import React from 'react';
import CONSTANTS from '../../../constants';
import styles from './Sponsors.module.scss';
import data from './sponsors.json';

const Sponsors = () => {
  return (
    <div className={styles.greyContainer}>
      <div className={styles.adv}>
        {data[0].map(({ id, imgInactive, imgActive, alt }) => (
          <div className={styles.images} key={id}>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}${imgInactive}`}
              alt={alt}
            />
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}${imgActive}`}
              alt={alt}
            />
          </div>
        ))}
      </div>
      <div className={styles.stats}>
        {data[1].map(({ id, amount, text }) => (
          <div key={id}>
            <p>{amount}</p>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
