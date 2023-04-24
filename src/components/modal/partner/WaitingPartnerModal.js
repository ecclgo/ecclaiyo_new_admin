import close from '../../img/close.png'
import { useEffect, useState } from 'react'
import { GetWaitingPartnerDetail } from '../../../api/partner/detail/GetWaitingPartnerDetail'
import {
  LayoutText,
  ModalCloseBtn,
  ModalLayout,
  ModalOverlay,
  NavTab,
  StyledSelect,
  Text,
  Underline,
} from './PartnerCommonModal'
import styled from 'styled-components'
import { statusMenu } from '../../Constants'
import { Table } from 'react-bootstrap'
import { ModalTableStyle } from '../../searchResult/TableStyles'
import moment from 'moment'
import picture from '../../img/picture.png'
import { ChangeStatus } from '../../../api/partner/ChangeStatus'

const NavText1 = styled(Text)`
  left: 43px;
  color: green;
`

const InnerBox = styled.div`
  position: absolute;
  top: 140px;
  height: 50px;
  left: 55px;
  width: 1000px;
  display: inline-flex;
`

const InnerText = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 19px;
`

const InnerTextImg = styled(InnerText)`
  position: absolute;
  left: 580px;
`

const ProfileBox = styled.div`
  position: absolute;
  width: 500px;
  height: 449px;
  left: 57px;
  top: 200px;
  background-color: lightgray;
`

const DocBox = styled.div`
  position: absolute;
  width: 430px;
  height: 449px;
  left: 630px;
  top: 200px;
  background-color: lightgray;
`

function WaitingPartnerModal({
  openModal,
  setOpenModal,
  Msg,
  setMsgModal,
  setStatusData,
}) {
  const [jsonList, setJsonList] = useState(null)
  const options = statusMenu

  const dropdownOptions = options.map((option) => {
    return { value: option.engStatus, label: option.korStatus }
  })

  const closeModal = () => {
    setOpenModal(false)
  }

  useEffect(() => {
    const getDetail = async (data) => {
      if (openModal === true) {
        let result
        result = await GetWaitingPartnerDetail(data)
        setJsonList(result)
      }
    }
    getDetail(parseInt(localStorage.getItem('partnerId')))
  }, [openModal])

  const handleStatus = () => {
    switch (jsonList?.status) {
      case 'IN_REVIEW':
        return '승인대기'
      case 'IN_MODIFICATION':
        return '수정요청'
      case 'READY_FOR_CONTRACT':
        return '계약대기'
      case 'APPROVED':
        return '가입완료'
      case 'DENIED':
        return '가입거부'
        break
    }
  }

  const handleSelectChange = async (selectedOption) => {
    if (selectedOption.value === 'IN_MODIFICATION') {
      setMsgModal(true)
      setStatusData((prevState) => {
        return {
          ...prevState,
          id: jsonList?.partnerId,
          profileStatus: selectedOption.value,
        }
      })
    } else {
      let data = {
        id: jsonList?.partnerId,
        profileStatus: selectedOption.value,
        message: null,
      }

      let result
      result = await ChangeStatus(data)
    }
  }

  return (
    <>
      <ModalOverlay show={openModal}>
        <ModalLayout show={openModal}>
          <LayoutText>파트너 가입정보</LayoutText>
          <NavTab>
            <NavText1>기본정보</NavText1>
            <Underline />
          </NavTab>
          <InnerBox>
            <InnerText>기본정보</InnerText>
            <StyledSelect
              options={dropdownOptions}
              placeholder={handleStatus(jsonList?.status)}
              onChange={handleSelectChange}
            />
            <InnerTextImg>파트너 서류</InnerTextImg>
          </InnerBox>
          <ProfileBox>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th style={ModalTableStyle.title1}>프로필 사진</th>
                  <td style={ModalTableStyle.contentListBody1}>
                    {jsonList?.profilePic === null ? (
                      <img src={picture} style={{ width: '50px' }} />
                    ) : (
                      <img src={jsonList?.profilePic} />
                    )}
                  </td>
                </tr>
                <tr>
                  <th style={ModalTableStyle.title2}>이름</th>
                  <td style={ModalTableStyle.contentListBody2}>
                    {jsonList?.partnerUsername}
                  </td>
                </tr>
                <tr>
                  <th style={ModalTableStyle.title2}>Id</th>
                  <td style={ModalTableStyle.contentListBody2}>
                    {jsonList?.partnerId}
                  </td>
                </tr>
                <tr>
                  <th style={ModalTableStyle.title2}>가입 신청일</th>
                  <td style={ModalTableStyle.contentListBody2}>
                    {moment(jsonList?.dateOfRegistration).format('YYYY.MM.DD')}
                  </td>
                </tr>
                <tr>
                  <th style={ModalTableStyle.title2}>생년월일</th>
                  <td style={ModalTableStyle.contentListBody2}>
                    {moment(jsonList?.birth).format('YYYY.MM.DD')}
                  </td>
                </tr>
                <tr>
                  <th style={ModalTableStyle.title2}>사업자 등록번호</th>
                  <td style={ModalTableStyle.contentListBody2}>
                    {jsonList?.businessRegistrationNumber}
                  </td>
                </tr>
                <tr>
                  <th style={ModalTableStyle.title3}>보유차량</th>
                  <td style={ModalTableStyle.contentListBody2}>
                    {jsonList?.ownVehicle}
                  </td>
                </tr>
                <tr>
                  <th style={ModalTableStyle.title2}>활동지역</th>
                  <td style={ModalTableStyle.contentListBody2}>
                    {jsonList?.partnerBusinessArea}
                  </td>
                </tr>
              </thead>
            </Table>
          </ProfileBox>
          <DocBox>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th style={ModalTableStyle.title4}>1.사업자 등록증</th>
                  <td style={ModalTableStyle.contentListBody3}>
                    {jsonList?.documents[1]?.url === null ? (
                      <img src={picture} />
                    ) : (
                      <img
                        style={{ width: '270px', height: '105px' }}
                        src={jsonList?.documents[1]?.url}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <th style={ModalTableStyle.title4}>2.화물운송자격증</th>
                  <td style={ModalTableStyle.contentListBody3}>
                    {jsonList?.documents[0]?.url === null ? (
                      <img src={picture} />
                    ) : (
                      <img
                        style={{ width: '270px', height: '105px' }}
                        src={jsonList?.documents[0]?.url}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <th style={ModalTableStyle.title4}>3.운전면허증</th>
                  <td style={ModalTableStyle.contentListBody3}>
                    {jsonList?.documents[3]?.url === null ? (
                      <img src={picture} />
                    ) : (
                      <img
                        style={{ width: '270px', height: '105px' }}
                        src={jsonList?.documents[3]?.url}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <th style={ModalTableStyle.title4}>4.통장사본</th>
                  <td style={ModalTableStyle.contentListBody3}>
                    {jsonList?.documents[2]?.url === null ? (
                      <img src={picture} />
                    ) : (
                      <img
                        style={{ width: '270px', height: '105px' }}
                        src={jsonList?.documents[2]?.url}
                      />
                    )}
                  </td>
                </tr>
              </thead>
            </Table>
          </DocBox>
          <ModalCloseBtn onClick={closeModal}>
            <img src={close} style={{ width: '20px', cursor: 'pointer' }} />
          </ModalCloseBtn>
        </ModalLayout>
      </ModalOverlay>
    </>
  )
}

export default WaitingPartnerModal
