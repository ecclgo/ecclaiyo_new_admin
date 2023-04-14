import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Content = styled.main`
  margin-top: 45px;
  max-width: 930px;
  width: 100%;
  margin: 0 auto;
`;

function Layout({children}) {
  return (
    <>
      <Header />
      <Sidebar />
      <Content>
        {children}
      </Content>
    </>
  )
};

export default Layout;