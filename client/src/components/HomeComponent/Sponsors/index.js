import React from 'react';
import CONSTANTS from '../../../constants';
import styles from './Sponsors.module.scss';
import images from './sponsorsImages.json';
import data from './sponsors.json';

const Sponsors = () => {
  return (
    <div className={styles.greyContainer}>
      <div className={styles.adv}>
        {images.map(({ id, imgInactive, imgActive, alt }) => (
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
        {data.map(({ id, amount, text }) => (
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
