import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeIn,
  wrapper,
  text,
} from "../components/Animations/resume.animation";
import Layout from "../components/Layout";
import SuitcaseIcon from "../public/images/case.svg";
import SchoolIcon from "../public/images/ion_school.svg";
const Resume = () => {
  return (
    <>
      <Head>
        <title>My Resume</title>
        <meta title="description" content="Bagus Amrullah Resume" />
      </Head>
      <Layout>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <Title>Resume</Title>
          <Wrapper variants={wrapper}>
            <HeaderWrapper>
              <Image
                src={SchoolIcon}
                height={32}
                width={32}
                alt="school icon"
              />
              <Header>Education</Header>
            </HeaderWrapper>
            <ArticleWrapper>
              <Article variants={text}>
                <ArticleHeader>SD N Kloposawit</ArticleHeader>
                <ArticleDate>2004 - 2010</ArticleDate>
                <ArticleBody>
                  Entering Elementary School in 2004, I am able to complete all
                  classes and graduate with the highest score along my
                  classmate. This is the time where I started to know about
                  computer and stuff.
                </ArticleBody>
              </Article>
              <Article variants={text}>
                <ArticleHeader>SMP N 1 Turi</ArticleHeader>
                <ArticleDate>2010 - 2013</ArticleDate>
                <ArticleBody>
                  Competing against more classmate, I successfully graduated as
                  the top-10. Those time I started to dig more into computer
                  world.
                </ArticleBody>
              </Article>
              <Article variants={text}>
                <ArticleHeader>SMK N 2 Depok Sleman</ArticleHeader>
                <ArticleDate>2013 - 2017</ArticleDate>
                <ArticleBody>
                  Managed to get into the best vocational school in town, I
                  chose Computer & Network Engineering to help me develop my
                  skills and hobby. Here I also managed to find so many friends
                  with similar interests.
                </ArticleBody>
              </Article>
              <Article variants={text}>
                <ArticleHeader>Universitas AMIKOM Yogyakarta</ArticleHeader>
                <ArticleDate>2017 - 2021</ArticleDate>
                <ArticleBody>
                  Continued pursuing my interest in computers, I joined a
                  prestigious university known for its informatics degree that
                  helps me learn so much about programming and stuff. I
                  successfully got my bachelor's degree with a GPA of 3.61.
                </ArticleBody>
              </Article>
            </ArticleWrapper>
            {/* Work Experience */}
            <HeaderWrapper>
              <Image
                src={SuitcaseIcon}
                height={30}
                width={30}
                alt="workcase icon"
              />
              <Header>Experience</Header>
            </HeaderWrapper>
            <ArticleWrapper>
              <Article variants={text}>
                <ArticleHeader>
                  PIOS Technician at PT AINO Indonesia
                </ArticleHeader>
                <ArticleDate>2016 - 2017</ArticleDate>
                <ArticleBody>
                  Joining a advance company as an intern at the capital city of
                  jakarta helps me to build myself with the priceless experience
                  of 1 year works. I meet various type of person that made me
                  realize how the real world condition is.
                </ArticleBody>
              </Article>
              <Article variants={text}>
                <ArticleHeader>
                  Fullstack Developer at Rembux Softwarehouse
                </ArticleHeader>
                <ArticleDate>2019 - Now</ArticleDate>
                <ArticleBody>
                  Established a startup with my friends , as a Fullstack
                  Developer I gained a lot of experience about creating a
                  various type of Apps.
                </ArticleBody>
              </Article>
              <Article variants={text}>
                <ArticleHeader>
                  Freelance NodeJS Backend Developer at PT Atas Kiri Digital
                </ArticleHeader>
                <ArticleDate>2021 ( 2 Months )</ArticleDate>
                <ArticleBody>
                  I got the opportunity to join the backend team for a company.
                  Even though I only have the status as a freelancer, I get many
                  benefits regarding software development, especially as a fresh
                  graduate.
                </ArticleBody>
              </Article>
              <Article variants={text}>
                <ArticleHeader>
                  React Native Developer at Erloom / Codr
                </ArticleHeader>
                <ArticleDate>2021 - Now</ArticleDate>
                <ArticleBody>
                  To be a part of a fast growing company is an honor for me.
                  Here I joined the team that developed various kinds of
                  applications which taught me a lot along the way.
                </ArticleBody>
              </Article>
            </ArticleWrapper>
          </Wrapper>
        </motion.div>
      </Layout>
    </>
  );
};

export default Resume;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;

const Article = styled(motion.article)`
  display: grid;
  row-gap: 8px;
  border-left-color: #f0f0f6;
  border-left-width: 1px;
  border-left-style: solid;
  padding-bottom: 1.1875rem;
  padding-left: 1.375rem;
  position: relative;
  &::before {
    content: "";
    background-color: #9ee1ec;
    box-shadow: 0 0 0 0.1875rem rgba(158, 225, 236, 0.57);
    border-radius: 50%;
    position: absolute;
    top: 1.25rem;
    left: -0.3125rem;
    height: 0.625rem;
    width: 0.625rem;
  }
  @media (max-width: 576px) {
    padding-bottom: 0.75rem;
    &::before {
      top: 1.3rem;
      left: -0.335rem;
      height: 0.5rem;
      width: 0.5rem;
    }
  }
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  line-height: 29px;
  color: #1a202e;
  vertical-align: middle;
  margin-bottom: 1rem;
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const Header = styled.h2`
  font-weight: 600;
  font-size: 24px;
  padding-left: 10px;
  color: #64748b;
  @media (max-width: 576px) {
    font-size: 1.25rem;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ArticleWrapper = styled.div`
  padding-left: 1rem;
`;

const ArticleHeader = styled.h5`
  font-weight: 600;
  font-size: 1.25rem;
  padding-top: 1rem;
  color: #64748b;
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const ArticleDate = styled.span`
  font-weight: normal;
  font-size: 0.75rem;
  color: #64748b;
  @media (max-width: 576px) {
    font-size: 0.625rem;
  }
`;

const ArticleBody = styled.p`
  font-weight: normal;
  font-size: 12px;
  color: #64748b;
  line-height: 1rem;
  @media (max-width: 576px) {
    font-size: 0.75rem;
    text-align: justify;
  }
`;
