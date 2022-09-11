import React from 'react';
import { Form, Formik } from 'formik';
import FormInput from '../FormInput/FormInput';
import CONSTANTS from '../../../constants';
import validationSchems from '../../../validators/validationSchems';
import styles from './ChatInputForm.module.scss';

const ChatInputForm = (props) => {
  const { submitHandler } = props;
  return (
    <Formik
      onSubmit={submitHandler}
      initialValues={{ message: '' }}
      validationSchema={validationSchems.MessageSchema}
    >
      <Form className={styles.form}>
        <FormInput
          name="message"
          type="text"
          label="message"
          classes={{
            container: styles.container,
            input: styles.input,
            notValid: styles.notValid,
          }}
        />
        <button type="submit">
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}send.png`}
            alt="send Message"
          />
        </button>
      </Form>
    </Formik>
  );
};

export default ChatInputForm;
