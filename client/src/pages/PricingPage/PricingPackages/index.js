import React from 'react';
import data from './pricing.json';
import cx from 'classnames';
import styles from './PricingPackages.module.scss';

const PricingPackages = () => {
  return (
    <section className={styles.section}>
      <h1>Select a Package for your Managed Branding Contest</h1>
      <div style={{ backgroundColor: '#f8f8f8', paddingTop: '25px' }}>
        {data.map(({ id, colorName, description, heading, option, price }) => (
          <article
            key={id}
            className={styles['managed-contest']}
            style={{ borderColor: `${colorName}` }}
          >
            <div className={styles.flex}>
              <h2>{heading}</h2>
              <p style={{ color: `${colorName}` }}>{description}</p>
              <span style={{ color: `${colorName}` }}>
                {price.currency}
                {price.amount}
              </span>
            </div>
            <ul>
              {option.map((value, i) => (
                <li key={i}>{value}</li>
              ))}{' '}
              <button
                className={styles.button}
                style={{ backgroundColor: `${colorName}` }}
              >
                start
              </button>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PricingPackages;
