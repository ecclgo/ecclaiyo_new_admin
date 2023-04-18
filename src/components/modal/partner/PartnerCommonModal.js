import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => props.show ? 'block' : 'none'};
  z-index: 100;
`;

export const ModalLayout = styled.div`
  position: fixed;
  top: 200px;
  left: 800px;
  z-index: 999;
  background-color: #FFFFFF;
  width: 1100px;
  height: 700px;
  display: ${props => props.show ? 'block' : 'none'};
  border-radius: 10px;
  animation: modal-bg-show 0.3s;
  border: black;
`;

export const LayoutText = styled.span`
  position: absolute;
  color: #333333;
  top: 20px;
  left: 50px;
  font-size: 25px;
  font-weight: 600;
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 30px;
  border: none;
  background-color: #FFFFFF;
`;

