import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMediumCircle,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaSteam } from "react-icons/fa";
import Head from "next/head";
import Image from "next/image";

import {
  wrapper,
  item,
  text,
  social,
  icon,
} from "../components/Animations/index.animation";
import Layout from "../components/Layout";
import img from "../public/images/243232.jpeg";
import ContactModal from "../components/ContactModal";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  return (
    <motion.div>
      <Head>
        <title>Welcome to Bagus' Hall Of Creation !</title>
        <meta
          title="description"
          content="Bagus Amrullah Personal Portfolio Website"
        />
      </Head>
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title>About Me</Title>
          <ContactModal open={openModal} onCloseModal={onCloseModal} />
          <Wrapper initial="hidden" animate="show" variants={wrapper}>
            <Left variants={item}>
              <Header variants={text}>
                Howdy ! Welcome to my personal page 😊
              </Header>
              <Header variants={text}>
                I’m Bagus Amrullah, A Fullstack Javascript Developer based in
                Yogyakarta, Indonesia.
              </Header>
              <Body variants={text}>
                With years of experience in building Web Apps, Mobile Apps and
                Landing Page.
              </Body>
              <Body variants={text}>
                I enjoy creating new things with{" "}
                <strong>
                  React / React-Native, Redux, Express, NodeJs, MongoDB,
                  Firebase, MySql.
                </strong>
              </Body>
              <Body variants={text}>
                <strong>Figma, Adobe XD, Adobe Illustrator </strong>are some of
                the design tools that help me to create some of my works.
              </Body>
              <Body variants={text}>
                I love learning something new ! My goal is to make the world a
                better place for everybody with the knowledge and skills that I
                have.
              </Body>

              <Header variants={text}>Have any inquires or discussion ?</Header>
              <ButtonWrapper variants={text}>
                <Button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onOpenModal}
                >
                  Let's Talk!
                </Button>
              </ButtonWrapper>
            </Left>
            <Right variants={item}>
              <Photos src={img} height={300} width={200} />
              <Label>Stay Connected With Me!</Label>
              <SocialWrapper variants={social}>
                <Link
                  variants={icon}
                  whileHover={{ scale: 1.05 }}
                  href="https://www.linkedin.com/in/bagusamrullah/"
                  target="_blank"
                >
                  <AiFillLinkedin size={"1.5rem"} />
                </Link>
                <Link
                  variants={icon}
                  whileHover={{ scale: 1.05 }}
                  href="https://github.com/bagusaff/"
                  target="_blank"
                >
                  <AiFillGithub size={"1.5rem"} />
                </Link>
                <Link
                  variants={icon}
                  whileHover={{ scale: 1.05 }}
                  href="https://twitter.com/bagusaff"
                  target="_blank"
                >
                  <AiOutlineTwitter size={"1.5rem"} />
                </Link>
                <Link
                  variants={icon}
                  whileHover={{ scale: 1.05 }}
                  href="https://medium.com/@bagusamrullah"
                  target="_blank"
                >
                  <AiFillMediumCircle size={"1.5rem"} />
                </Link>
                <Link
                  variants={icon}
                  whileHover={{ scale: 1.05 }}
                  href="https://www.instagram.com/amrullahjuve"
                  target="_blank"
                >
                  <AiFillInstagram size={"1.5rem"} />
                </Link>
                <Link
                  variants={icon}
                  whileHover={{ scale: 1.05 }}
                  href="https://steamcommunity.com/id/akaamrullah/"
                  target="_blank"
                >
                  <FaSteam size={"1.5rem"} />
                </Link>
              </SocialWrapper>
            </Right>
          </Wrapper>
        </motion.div>
      </Layout>
    </motion.div>
  );
}

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  padding-bottom: 1rem;
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1.125rem;
  }
`;

const Left = styled(motion.div)`
  display: grid;
  flex: 1;
  gap: 1rem;
`;

const Right = styled(motion.div)`
  flex: 1;
  display: grid;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  grid-auto-rows: min-content;
  row-gap: 10px;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  line-height: 29px;
  color: #1a202e;
  margin-bottom: 1rem;
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const Header = styled(motion.h2)`
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.125rem;
  text-align: justify;
  color: #64748b;
  @media (max-width: 576px) {
    font-size: 0.875rem;
    line-height: 1rem;
  }
`;

const Body = styled(motion.p)`
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1rem;
  color: #64748b;
  strong {
    font-weight: 500;
  }
  @media (max-width: 576px) {
    font-size: 0.75rem;
    text-align: justify;
  }
`;

const ButtonWrapper = styled(motion.div)`
  width: auto;
`;

const Button = styled(motion.button)`
  cursor: pointer;
  background: linear-gradient(180deg, #2fb8ff 0%, #9eecd9 100%);
  border-radius: 1.5rem;
  padding: 0.75rem 2rem;
  color: white;
  font-weight: 600;
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  @media (max-width: 576px) {
    padding: 0.5rem 1.5rem;
    font-size: 0.875rem;
  }
`;

const Photos = styled(Image)`
  object-fit: cover;
  border-radius: 20px;
  border: 10px red;
`;

const Label = styled.p`
  font-weight: 500;
  text-align: center;
  color: #64748b;
  font-size: 12px;
`;

const SocialWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, auto);
`;

const Link = styled(motion.a)`
  color: #64748b;
  cursor: pointer;
  transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    :nth-child(1) {
      color: #0e76a8;
    }
    :nth-child(2) {
      color: #4078c0;
    }
    :nth-child(3) {
      color: #1da1f2;
    }
    :nth-child(4) {
      color: #000000;
    }
    :nth-child(5) {
      color: #bc1888;
    }
    :nth-child(6) {
      color: #171a21;
    }
  }
`;
