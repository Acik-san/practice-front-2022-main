import React from 'react';
import CONSTANTS from '../../../../constants';

const Step = (props) => {
  const { className, data } = props;
  return (
    <div className={className[0]}>
      <div className={className[1]}>
        {data.map(({ id, heading, listItem, src, alt }) => (
          <>
            <div className={id === 2 ? className[2] : null}>
              <h3>{heading}</h3>
              {listItem.map((item) => (
                <p>
                  <i className="fas fa-check" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}${src}`} alt={alt} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Step;
