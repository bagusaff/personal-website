import styled from "styled-components";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <ContentWrapper>{children}</ContentWrapper>
      <FooterArea>
        <FooterText>
          Copyright @ 2021 Created with ❤️ by Bagus Amrullah
        </FooterText>
      </FooterArea>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  background-color: #e2e8f0;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ContentWrapper = styled.div`
  align-self: center;
  width: auto;
  max-width: 800px;
  max-height: 600px;
  overflow: auto;
  margin: 0 1rem;
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.25);
`;

const FooterArea = styled.div`
  margin: 0 1rem;
  padding: 1rem 0;
  @media (max-width: 576px) {
    padding: 2rem 0;
  }
`;

const FooterText = styled.p`
  text-align: center;
  color: #64748b;
  font-weight: 600;
  font-size: 12px;
`;
