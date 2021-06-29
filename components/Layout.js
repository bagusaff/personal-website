import styled from "styled-components";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  background-color: #e2e8f0;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const ContentWrapper = styled.div`
  margin: auto;
  max-width: 800px;
  max-height: 600px;
  overflow: auto;
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.25);
`;
