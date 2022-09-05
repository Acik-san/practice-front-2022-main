import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = (props) => {
  const { name, path } = props;
  return (
    <div className={styles.button}>
      <Link className={styles.button__link} to={path}>
        {name}
      </Link>
    </div>
  );
};

export default Button;
