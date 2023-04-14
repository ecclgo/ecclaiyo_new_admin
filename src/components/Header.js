import styled from "styled-components";
import bell from "../components/img/bell.png";
import logo from "../components/img/logo.svg";
import { useRef } from "react";
import Authentication from "../Authentication";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import routes from "../screen/Routes";

const SHeader = styled.header`
  width: 100%;
  height: 80px;
  left: 0px;
  margin-top: 0px;
  background-color: #2D3039;
`;

const RWrapper = styled.div`
  width: 15%;
  height: 10px;
  margin-left: 85%;
  margin-top: 15px;
  align-items: center;
`;

const LWrapper = styled.div`
  width: 40%;
  height: 25px;
  margin-left: 20px;
  margin-top: -25px;
`;

const Column = styled.div`
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  margin-left: 15px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 17px;
  color: #FFFFFF;
`;

const SButton = styled.input`
  color: #FFFFFF;
  border: none;
  font-size: 18px;
  background-color: #2D3039;
  font-weight: 700;
  font-family: "Inter";
  font-style: normal;
  line-height: 17px;
  cursor: pointer;
`;

function Header() {
  const history = useHistory();
  const userRef = useRef({});

  const handleLogOut = () => {
    userRef.current.logUserOut();
    history.push(routes.home);
    window.location.reload();
  }

  return (
    <>
      <SHeader>
        <LWrapper>
        </LWrapper>
        <RWrapper>
          <Column>
            <IconContainer>
              <Icon>
                {localStorage.getItem("adminId")}님
              </Icon>
              <Icon>
                내정보
              </Icon>
              <Icon>
                <img src={bell} />
              </Icon>
              <Icon> 
                <SButton type="submit" value="로그아웃" onClick={handleLogOut}></SButton>
              </Icon>
            </IconContainer>
          </Column>
        </RWrapper>
        <LWrapper>
          <Column>
            <IconContainer>
              <Icon>
                <img src={logo} />
              </Icon>
              <Icon>
                관리자
              </Icon>
            </IconContainer>
          </Column>
        </LWrapper>
      </SHeader>
      <Authentication ref={userRef}/>
    </>
  )
};

export default Header;