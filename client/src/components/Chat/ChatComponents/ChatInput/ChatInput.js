import React from 'react';
import { connect } from 'react-redux';
import { sendMessageAction } from '../../../../actions/actionCreator';
import styles from './ChatInput.module.sass';
import ChatInputForm from '../../../forms/ChatInputForm';

const ChatInput = (props) => {
  const submitHandler = (values, { resetForm }) => {
    props.sendMessage({
      messageBody: values.message,
      recipient: props.interlocutor.id,
      interlocutor: props.interlocutor,
    });
    resetForm();
  };

  return (
    <div className={styles.inputContainer}>
      <ChatInputForm submitHandler={submitHandler} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { interlocutor } = state.chatStore;
  const { data } = state.userStore;
  return { interlocutor, data };
};

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (data) => dispatch(sendMessageAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput);
