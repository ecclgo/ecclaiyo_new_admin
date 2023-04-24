import styled from 'styled-components'
import bell from '../components/img/bell.png'
import logo from '../components/img/logo.svg'
import { useRef } from 'react'
import Authentication from '../Authentication'
import {
  useHistory,
  useLocation,
} from 'react-router-dom/cjs/react-router-dom.min'
import routes from '../screen/Routes'

const SHeader = styled.header`
  position: absolute;
  height: 80px;
  left: 0px;
  width: 100%;
  background-color: #2d3039;
`

const RWrapper = styled.div`
  width: 15%;
  height: 10px;
  margin-left: 85%;
  margin-top: 15px;
  align-items: center;
`

const LWrapper = styled.div`
  width: 40%;
  height: 25px;
  margin-left: 20px;
  margin-top: -25px;
`

const Column = styled.div``

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`

const Icon = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 17px;
  color: #ffffff;
`

const Myname = styled(Icon)`
  position: absolute;
  top: 30px;
  right: 200px;
`

const MyInfo = styled(Icon)`
  position: absolute;
  top: 30px;
  right: 135px;
`

const Alarm = styled(Icon)`
  position: absolute;
  top: 26px;
  right: 103px;
`

const Logout = styled(Icon)`
  position: absolute;
  top: 30px;
  right: 20px;
`

const AdminText = styled(Icon)`
  position: absolute;
  top: 30px;
  left: 270px;
`

const SButton = styled.input`
  color: #ffffff;
  border: none;
  font-size: 18px;
  background-color: #2d3039;
  font-weight: 700;
  font-family: 'Inter';
  font-style: normal;
  line-height: 17px;
  cursor: pointer;
`

function Header() {
  const history = useHistory()
  const userRef = useRef({})

  const handleLogOut = () => {
    userRef.current.logUserOut()
    history.push(routes.home)
    window.location.reload()
  }

  return (
    <>
      <SHeader>
        <LWrapper></LWrapper>
        <RWrapper>
          <Column>
            <IconContainer>
              <Icon>
                <Myname>{localStorage.getItem('adminId')}님</Myname>
              </Icon>
              <Icon>
                <MyInfo>내정보</MyInfo>
              </Icon>
              <Icon>
                <Alarm>
                  <img src={bell} />
                </Alarm>
              </Icon>
              <Icon>
                <Logout>
                  <SButton
                    type="submit"
                    value="로그아웃"
                    onClick={handleLogOut}
                  ></SButton>
                </Logout>
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
                <AdminText>관리자</AdminText>
              </Icon>
            </IconContainer>
          </Column>
        </LWrapper>
      </SHeader>
      <Authentication ref={userRef} />
    </>
  )
}

export default Header
