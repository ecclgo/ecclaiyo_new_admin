import { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import routes from "../screen/Routes";

const Container = styled.div`
  height: 300px;
  width: 230px;
  background-color: #404A5C;
`;

const ContainerOut = styled.div`
  width: 230px;
  height: 800px;
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
  padding: 10px;
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
  margin-left: 20px;
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

const StyledLink = styled(Link)`
  color: #BDC2CA;
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
                    <StyledLink className={btnClicked === 'active1' || location.pathname === '/Member/User' ? " active" : null} to={routes.UserMeber} onClick={() => {setBtnClicked('active1')}}>
                      회원
                    </StyledLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <StyledLink className={btnClicked === 'active2' || location.pathname === '/Member/Partner' ? " active" : null} to={routes.PartnerMember} onClick={() => {setBtnClicked('active2')}}>
                      파트너
                    </StyledLink>
                  </SubMenuItem>
                </Submenu>
              )
            }
            <SidebarItem>
              견적 관리
              <UnderLine />
            </SidebarItem>
            <SidebarItem>
              정산/수수료 관리
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