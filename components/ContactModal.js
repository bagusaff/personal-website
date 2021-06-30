import React, { useState } from "react";
import Modal from "react-responsive-modal";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

import Spinner from "./Misc/Spinner";
import "react-responsive-modal/styles.css";
import "react-toastify/dist/ReactToastify.css";
const ContactModal = ({ open, onCloseModal }) => {
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        e.target,
        process.env.USER_ID
      )
      .then(
        (result) => {
          setLoading(false);
          setIsSuccess(true);
          notify();
          console.log(result.text);
        },
        (error) => {
          setLoading(false);
          notifyError();
          console.log(error.text);
        }
      );
  };

  const notify = () =>
    toast.success("Message has ben sent! I will reply to you ASAP 😊", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyError = () =>
    toast.error("Error, something happened! Please try again", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <Modal open={open} onClose={onCloseModal} center={true} styles={ModalStyle}>
      <Form onSubmit={sendEmail}>
        <ToastContainer />
        <Title>CONTACT ME</Title>
        <SecondTitle>
          I will contact you back via email as soon as possible!
        </SecondTitle>
        <Header type="Name:">
          <Input
            type="text"
            name="name"
            placeholder="So we can know one another"
          ></Input>
        </Header>
        <Header type="Email:">
          <Input
            type="email"
            name="email"
            placeholder="Let me know how to contact you back.."
          ></Input>
        </Header>
        <Header type="Message:">
          <Input
            type="text"
            name="message"
            placeholder="Write your message.."
          ></Input>
        </Header>
        {!loading ? (
          <ButtonSubmit type="submit" value="Send Message!" />
        ) : (
          <Spinner />
        )}
      </Form>
    </Modal>
  );
};

export default ContactModal;

const ModalStyle = {
  modal: {
    borderRadius: "10px",
    padding: "1.5rem",
  },
};

const Form = styled.form`
  width: 340px;
  height: auto;
  border-radius: 8px;
  padding: 20px 30px;
  max-width: calc(100vw - 40px);
  box-sizing: border-box;
  position: relative;
`;

const Title = styled.h2`
  margin: 10px 0;
  padding-bottom: 5px;
  width: 180px;
  color: #64748b;
  font-weight: 600;
  border-bottom: 1px solid #78788c;
`;

const SecondTitle = styled.h3`
  font-size: 10px;
  font-style: italic;
  color: #64748b;
`;

const Header = styled.p`
  ::before {
    content: attr(type);
    display: block;
    margin: 28px 0 0;
    font-size: 14px;
    color: #64748b;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: none;
  outline: none;
  resize: none;
  border: 0;
  transition: all 0.3s;
  border-bottom: 2px solid #bebed2;
`;

const ButtonSubmit = styled.input.attrs({
  type: "submit",
})`
  float: right;
  padding: 8px 12px;
  margin: 8px 0 0;
  border: 2px solid #78788c;
  background: 0;
  color: #64748b;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    background: #78788c;
    color: #fff;
  }
`;
