import { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import routes from "../screen/Routes";

const Container = styled.div`
  position: absolute;
  top: 80px;
  height: 300px;
  width: 230px;
  background-color: #404A5C;
`;

const ContainerOut = styled.div`
  position: absolute;
  top: 350px;
  width: 230px;
  height: 775px;
  background-color: #455063;
  `;

const Content = styled.div`
  width: 200px;
  height: 200px;
  margin-left: -10px;
  margin-top: 0px;
`;

const MenuContainer = styled.div`
  width: 200px;
  height: 200px;
  background-color: #404A5C;
`;

const SidebarItem =styled.div`
  margin-bottom: 10px;
  margin-left: 20px;
  padding: 20px;
  border-radius: 5px;
  color: #FFFFFF;
  cursor: pointer;
  
  font-size: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
`;

const Submenu = styled.div`
  margin-left: 10px;
`;

const SubMenuItem = styled.div`
  padding: 5px;
  cursor: pointer;
  margin-left: 30px;
  font-size: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  color: #BDC2CA;

  &.active {
    background-color: green;
  }
`;

const UnderLine = styled.div`
  position: absolute;
  margin-top: 10px;
  width: 170px;
  height: 1px;
  background-color: #FFFFFF;
`;

const SStyledLink = styled(Link)`
  color: #BDC2CA;
  text-decoration-line: none;

  &.active {
    color: green;
  }
`;

const LStyledLink = styled(Link)`
color: #FFFFFF;
  text-decoration-line: none;
  
&.active {
  color: green;
}
`;

function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [btnClicked, setBtnClicked] = useState('');
  const location = useLocation();

  return (
    <>
      <Container>
        <Content>
          <MenuContainer>
            <SidebarItem onClick={handleToggleMenu}>
              회원 관리
              {
                showMenu ? "▲" : "▼"
              }
              <UnderLine />
            </SidebarItem>
            {
              showMenu && (
                <Submenu>
                  <SubMenuItem>
                    <SStyledLink className={location.pathname === routes.UserMember ? " active" : null} to={routes.UserMember} onClick={() => {setBtnClicked('active1')}}>
                      회원
                    </SStyledLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SStyledLink className={location.pathname === routes.PartnerMember ? " active" : null} to={routes.PartnerMember} onClick={() => {setBtnClicked('active2')}}>
                      파트너
                    </SStyledLink>
                  </SubMenuItem>
                </Submenu>
              )
            }
            <SidebarItem>
              견적 관리
              <UnderLine />
            </SidebarItem>
            <SidebarItem>
              <LStyledLink className={location.pathname === routes.PayManagement ? " active" : null} to={routes.PayManagement} onClick={() => {setBtnClicked('active4')}}>
                정산 관리
              </LStyledLink>
              <UnderLine />
            </SidebarItem>
          </MenuContainer>
        </Content>
      </Container>
      <ContainerOut />
    </>
  )
};

export default Sidebar;