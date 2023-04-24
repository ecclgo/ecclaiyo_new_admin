import { Table } from 'react-bootstrap'
import { tableStyles } from './TableStyles'
import { activeMenu } from '../Constants'
import styled from 'styled-components'
import { ChangeActiveStatus } from '../../api/partner/ChangeStatus'
import Select from 'react-select'
import moment from 'moment'

function ApprovedPartnerResult(props) {
  const StyledSelect = styled(Select)`
    width: 200px;
  `

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th style={tableStyles.listTitle}>NO</th>
            <th style={tableStyles.listTitle}>파트너ID</th>
            <th style={tableStyles.listTitle}>상태</th>
            <th style={tableStyles.listTitle}>파트너 이름</th>
            <th style={tableStyles.listTitle}>연락처</th>
            <th style={tableStyles.listTitle}>매너점수</th>
            <th style={tableStyles.listTitle}>서비스 횟수</th>
            <th style={tableStyles.listTitle}>평균 별점</th>
            <th style={tableStyles.listTitle}>비고</th>
            <th style={tableStyles.listTitle}>구독권</th>
            <th style={tableStyles.listTitle}>최근 접속</th>
            <th style={tableStyles.listTitle}>가입일</th>
          </tr>
        </thead>
        <tbody style={tableStyles.contentListBody}>
          {props.jsonList !== null
            ? props.jsonList?.map((item, i) => {
                return (
                  <GetApproved
                    key={i}
                    NO={i + 1}
                    id={item.id}
                    partnerActiveStatus={
                      item.partnerActiveStatus === 'ACTIVE'
                        ? '활동 가능'
                        : item.partnerActiveStatus === 'BLOCKED_TEMPORARY'
                        ? '활동 정지(30일)'
                        : item.partnerActiveStatus === 'BLOCKED_LIFETIME'
                        ? '활동 정지(무기한)'
                        : null
                    }
                    partnerName={item.partnerName}
                    phoneNumber={item.phoneNumber}
                    mannerPoint={item.mannerPoint}
                    countOfService={item.countOfService}
                    gpa={item.gpa}
                    additionalNote={item.additionalNote}
                    passInfo={
                      item.passInfo?.type === 'MONTHLY'
                        ? '월간 구독권 / ' +
                          item.passInfo?.remainDay +
                          '일 남음'
                        : item.passInfo?.type === 'YEARLY'
                        ? '연간 구독권 / ' +
                          item.passInfo?.remainDay +
                          '일 남음'
                        : item.passInfo?.type === 'FREE'
                        ? '자유 이용권'
                        : null
                    }
                    lastAccessDate={moment(item.lastAccessDate).format(
                      'YY.MM.DD' + ' - ' + 'HH:mm',
                    )}
                    dateOfAccession={moment(item.dateOfAccession).format(
                      'YY.MM.DD' + ' - ' + 'HH:mm',
                    )}
                    setOpenModal={props.setOpenModal}
                  />
                )
              })
            : null}
        </tbody>
      </Table>
    </>
  )

  function GetApproved(props) {
    const options = activeMenu
    const dropdownOptions = options.map((option) => {
      return { value: option.engStatus, label: option.korStatus }
    })

    const handleSelectChange = async (selectedOption) => {
      let data = {
        id: props.id,
        status: selectedOption.value,
      }
      await ChangeActiveStatus(data)
    }

    const handleModal = () => {
      props.setOpenModal(true)
    }

    const getPartnerId = (data) => {
      if (localStorage.getItem('partnerId') === '') {
        localStorage.setItem('partnerId', data)
      } else {
        localStorage.removeItem('partnerId')
        localStorage.setItem('partnerId', data)
      }
    }

    return (
      <>
        <tr>
          <td>{props.NO}</td>
          <td>
            <a
              style={{
                cursor: 'pointer',
                textDecorationLine: 'underline',
                color: 'blue',
              }}
              onClick={() => {
                handleModal()
                getPartnerId(props.id)
              }}
            >
              {props.id}
            </a>
          </td>
          <td>
            <StyledSelect
              options={dropdownOptions}
              defaultValue={props.partnerActiveStatus}
              placeholder={props.partnerActiveStatus}
              onChange={handleSelectChange}
            />
          </td>
          <td>{props.partnerName}</td>
          <td>{props.phoneNumber}</td>
          <td>{props.mannerPoint}</td>
          <td>{props.countOfService}</td>
          <td>{props.gpa}</td>
          <td>{props.additionalNote}</td>
          <td>{props.passInfo}</td>
          <td>{props.lastAccessDate}</td>
          <td>{props.dateOfAccession}</td>
        </tr>
      </>
    )
  }
}

export default ApprovedPartnerResult
