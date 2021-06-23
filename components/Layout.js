import styled from "styled-components";
const Layout = ({ children }) => {
  return (
    <Wrapper>
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
  height: 200px;
  width: 500px;
  padding: 1rem;
  background-color: white;
`;
