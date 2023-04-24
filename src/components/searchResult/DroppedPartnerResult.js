import { Table } from 'react-bootstrap'
import { tableStyles2 } from './TableStyles'
import moment from 'moment'

function DroppedPartnerResult(props) {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th style={tableStyles2.listTitle}>NO</th>
            <th style={tableStyles2.listTitle}>파트너ID</th>
            <th style={tableStyles2.listTitle}>파트너 이름</th>
            <th style={tableStyles2.listTitle}>연락처</th>
            <th style={tableStyles2.listTitle}>매너점수</th>
            <th style={tableStyles2.listTitle}>서비스 횟수</th>
            <th style={tableStyles2.listTitle}>평균 별점</th>
            <th style={tableStyles2.listTitle}>비고</th>
            <th style={tableStyles2.listTitle}>구독권</th>
            <th style={tableStyles2.listTitle}>탈퇴일</th>
            <th style={tableStyles2.listTitle}>가입일</th>
          </tr>
        </thead>
        <tbody style={tableStyles2.contentListBody}>
          {props.jsonList !== null
            ? props.jsonList?.map((item, i) => {
                return (
                  <GetDropped
                    key={i}
                    NO={i + 1}
                    id={item.id}
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
                    unregisterDate={moment(item.unregisterDate).format(
                      'YY.MM.DD',
                    )}
                    dateOfAccession={moment(item.dateOfAccession).format(
                      'YY.MM.DD',
                    )}
                  />
                )
              })
            : null}
        </tbody>
      </Table>
    </>
  )

  function GetDropped(props) {
    return (
      <>
        <tr>
          <td>{props.NO}</td>
          <td>{props.id}</td>
          <td>{props.partnerName}</td>
          <td>{props.phoneNumber}</td>
          <td>{props.mannerPoint}</td>
          <td>{props.countOfService}</td>
          <td>{props.gpa}</td>
          <td>{props.additionalNote}</td>
          <td>{props.passInfo}</td>
          <td>{props.unregisterDate}</td>
          <td>{props.dateOfAccession}</td>
        </tr>
      </>
    )
  }
}

export default DroppedPartnerResult
