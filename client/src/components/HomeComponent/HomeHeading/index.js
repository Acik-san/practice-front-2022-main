import React from 'react';
import CONSTANTS from '../../../constants';
import Button from '../../Button';
import styles from './HomeHeading.module.scss';

const HomeHeading = (props) => {
  const { text } = props;
  return (
    <div className={styles.headerBar}>
      <div className={styles.headline}>
        <span>{CONSTANTS.HEADER_TEXT.HEADING}</span>
        <span className={styles.headline__static}>{text}</span>
      </div>
      <p>{CONSTANTS.HEADER_TEXT.TEXT}</p>
      <Button
        name={CONSTANTS.BUTTON_NAME.DASHBOARD}
        path={CONSTANTS.PATH.DASHBOARD}
      />
    </div>
  );
};

export default HomeHeading;
