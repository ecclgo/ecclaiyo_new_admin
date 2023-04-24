import styled from 'styled-components'
import { ModalCloseBtn, ModalOverlay } from './PartnerCommonModal'
import close from '../../img/close.png'
import { useState } from 'react'
import { ChangeStatus } from '../../../api/partner/ChangeStatus'

const MessageContainer = styled.div`
  position: fixed;
  top: 200px;
  left: 800px;
  z-index: 999;
  background-color: #ffffff;
  width: 1000px;
  height: 280px;
  display: ${(props) => (props.show ? 'block' : 'none')};
  border-radius: 10px;
  animation: modal-bg-show 0.3s;
  border: black;
`

const MsgText = styled.span`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 100px;
  height: 30px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`

const SubText = styled.span`
  position: absolute;
  top: 60px;
  left: 30px;
  width: 300px;
  height: 30px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #333333;
  opacity: 0.5;
`

const MsgBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 100px;
  left: 30px;
  width: 940px;
  height: 100px;

  border: 1px solid #eff2f8;
`

const InnerText = styled.span`
  position: absolute;
  width: 940px;
  height: 50px;
  background: #f8f9fd;
`

const Text = styled.span`
  position: absolute;
  left: 20px;
  top: 15px;
`

const InputText = styled.input`
  position: absolute;
  top: 50px;
  width: 933px;
  height: 45px;
  background-color: #ffffff;
  border: 1px solid #eff2f8;
`

const BtnContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 60px;
  top: 210px;
  left: 330px;
  border: none;
`

const ConfirmBtn = styled.button`
  position: absolute;
  width: 150px;
  height: 50px;
  top: 1px;
  left: 20px;
  border: 1px solid #bbbbbb;
  cursor: pointer;
  background-color: #0e9f56;
  font-size: large;
  color: #ffffff;
  font-weight: 600;
  border-radius: 10px;
`

const CancelBtn = styled.button`
  position: absolute;
  width: 150px;
  height: 50px;
  top: 1px;
  left: 200px;
  border: 1px solid #bbbbbb;
  cursor: pointer;
  background-color: #ffffff;
  border-radius: 10px;
  font-size: large;
  font-weight: 600;
`

function Message(props) {
  const handleMsg = (e) => {
    const newText = e.target.value
    props.setMsg(newText)
  }

  const closeModal = () => {
    props.setMsgModal(false)
  }

  const handleModi = async (data) => {
    let result
    result = await ChangeStatus(props.newData)
  }

  return (
    <>
      <ModalOverlay show={props.msgModal}>
        <MessageContainer show={props.msgModal}>
          <MsgText>수정 요청</MsgText>
          <SubText>Ecclayou 파트너에게 수정요청을 보냅니다.</SubText>
          <MsgBox>
            <InnerText>
              <Text>메세지</Text>
              <InputText
                type="text"
                placeholder="파트너에게 전달할 메세지를 입력해주세요"
                onChange={handleMsg}
              />
            </InnerText>
          </MsgBox>
          <BtnContainer>
            <ConfirmBtn
              onClick={() => {
                handleModi()
                closeModal()
              }}
            >
              확인
            </ConfirmBtn>
            <CancelBtn onClick={closeModal}>취소</CancelBtn>
          </BtnContainer>
          <ModalCloseBtn onClick={closeModal}>
            <img src={close} style={{ width: '20px', cursor: 'pointer' }} />
          </ModalCloseBtn>
        </MessageContainer>
      </ModalOverlay>
    </>
  )
}

export default Message
