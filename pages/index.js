import styled from "styled-components";
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
import Layout from "../components/layout";
import img from "../public/images/21342.jpg";
export default function Home() {
  return (
    <>
      <Layout>
        <Title>About Me</Title>
        <Wrapper>
          <Left>
            <Header>Howdy ! Welcome to my personal page.</Header>
            <Header>
              I’m Bagus Amrullah ,A Fullstack Javascript Developer based in
              Yogyakarta, Indonesia.
            </Header>
            <Body>
              With years of experience in building Web Apps, Mobile Apps and
              Landing Page.
            </Body>
            <Body>
              I enjoy create new things with{" "}
              <strong>
                React / React-Native , Redux, Express, NodeJs , MongoDB ,
                Firebase , MySql.
              </strong>
            </Body>
            <Body>
              <strong>Figma, Adobe XD, Adobe Illustrator </strong>are some of
              the design tools that helps me to create some of my works.
            </Body>
            <Body>
              I love learning something new ! my goal is to make the world a
              better place for everybody with the knowledge and skills that i
              have.
            </Body>

            <Header>Have any inquires or discussion ?</Header>
            <ButtonWrapper>
              <Button>Let's Talk!</Button>
            </ButtonWrapper>
          </Left>
          <Right>
            <Photos src={img} height={300} width={200} />
            <Label>Stay Connected With Me!</Label>
            <SocialWrapper>
              <Link
                href="https://www.linkedin.com/in/bagusamrullah/"
                target="_blank"
              >
                <AiFillLinkedin size={"1.5rem"} />
              </Link>
              <Link href="https://github.com/bagusaff/" target="_blank">
                <AiFillGithub size={"1.5rem"} />
              </Link>
              <Link href="https://twitter.com/bagusaff" target="_blank">
                <AiOutlineTwitter size={"1.5rem"} />
              </Link>
              <Link href="https://medium.com/@bagusamrullah" target="_blank">
                <AiFillMediumCircle size={"1.5rem"} />
              </Link>
              <Link
                href="https://www.instagram.com/amrullahjuve"
                target="_blank"
              >
                <AiFillInstagram size={"1.5rem"} />
              </Link>
              <Link
                href="https://steamcommunity.com/id/akaamrullah/"
                target="_blank"
              >
                <FaSteam size={"1.5rem"} />
              </Link>
            </SocialWrapper>
          </Right>
        </Wrapper>
      </Layout>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 1rem;
`;

const Left = styled.div`
  display: grid;
  flex: 1;
  gap: 1rem;
`;

const Right = styled.div`
  flex: 1;
  display: grid;
  flex-direction: column;
  width: 100%;
  /* grid-template-rows: 300px auto auto; */
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
`;

const Header = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.125rem;
  text-align: justify;
  color: #64748b;
`;

const Body = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 1rem;
  color: #64748b;
  strong {
    font-weight: 500;
  }
`;

const ButtonWrapper = styled.div`
  width: auto;
`;

const Button = styled.button`
  cursor: pointer;
  background: linear-gradient(180deg, #2fb8ff 0%, #9eecd9 100%);
  border-radius: 1.5rem;
  padding: 0.75rem 2rem;
  color: white;
  font-weight: 600;
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  transition: 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  :hover {
    transform: scale(1.05);
  }
`;

const Photos = styled(Image)`
  object-fit: cover;
  border-radius: 200px;
  border: 0.5px solid rgba(255, 255, 255, 0.6);
`;

const Label = styled.p`
  font-weight: 500;
  text-align: center;
  color: #64748b;
  font-size: 12px;
`;

const SocialWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
`;

const Link = styled.a`
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
