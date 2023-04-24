import styled from 'styled-components'

const SFormError = styled.span`
  color: blue;
  font-weight: 600;
  font-size: 12;
  margin: 5px 0px 10px 0px;
  margin-left: -100px;
`

const FormError = ({ message }) => {
  return message === '' || !message ? null : <SFormError>{message}</SFormError>
}

export default FormError
