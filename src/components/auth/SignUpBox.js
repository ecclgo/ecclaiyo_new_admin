import { Link } from 'react-router-dom/cjs/react-router-dom'
import styled from 'styled-components'

const SSignUpBox = styled.div`
  width: 52px;
  height: 17px;
  margin-top: -20px;
  margin-left: 330px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  a {
    font-weight: 600;
    color: #333333;
    opacity: 0.8;
  }
`

const SignUpBox = ({ link, linkText }) => {
  return (
    <SSignUpBox>
      <Link to={link}>{linkText}</Link>
    </SSignUpBox>
  )
}

export default SignUpBox
