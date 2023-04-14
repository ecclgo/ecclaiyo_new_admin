import styled from "styled-components";

const Input = styled.input`
	width: 100%;
	border-radius: 3px;
	padding: 7px;
	background-color: #fafafa;
	margin-top: 5px;
  box-sizing: border-box;
	width: 250px;
	margin-right: 130px;
  &::placeholder {
    font-size: 12px;
  }
	&:last-child {
    border: none;
    margin-top: 12px;
    color: white;
    text-align: center;
    padding: 8px 0px;
    font-weight: 600;
  }
  &:focus {
    color: rgb(38, 38, 38);
  }
`;

export default Input;