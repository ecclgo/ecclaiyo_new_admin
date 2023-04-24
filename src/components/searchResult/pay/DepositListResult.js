import { Table } from 'react-bootstrap'
import { PayTableStyles } from '../TableStyles'
import styled from 'styled-components'

function DepositListResult({ jsonList }) {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th style={PayTableStyles.listTitle}>NO</th>
            <th style={PayTableStyles.listTitle}>파트너 ID</th>
            <th style={PayTableStyles.listTitle}>파트너 이름</th>
            <th style={PayTableStyles.listTitle}>은행명</th>
            <th style={PayTableStyles.listTitle}>계좌번호</th>
            <th style={PayTableStyles.listTitle}>총 입금금액</th>
            <th style={PayTableStyles.listTitle}>입금금액(현금)</th>
            <th style={PayTableStyles.listTitle}>현금 수수료</th>
            <th style={PayTableStyles.listTitle}>입금금액(카드)</th>
            <th style={PayTableStyles.listTitle}>카드 수수료</th>
            <th style={PayTableStyles.listTitle}>이번주 입금 금액</th>
            <th style={PayTableStyles.listTitle}>미정산 금액</th>
            <th style={PayTableStyles.listTitle}>입금 금액</th>
            <th style={PayTableStyles.listTitle}>입금된 금액</th>
            <th style={PayTableStyles.listTitle}>이관금액</th>
            <th style={PayTableStyles.listTitle}>비고</th>
          </tr>
        </thead>
        <tbody style={PayTableStyles.contentListBody}>
          {jsonList?.map((item, i) => {
            return (
              <GetDepositArr
                key={i}
                No={i + 1}
                partnerId={item.partnerId}
                partnerName={item.partnerName}
                bankName={item.bankName}
                accountNumber={item.accountNumber}
                totalPaymentsAmount={item.totalPaymentsAmount}
                tototalCashPaymentstal={item.totalCashPayments}
                cashPaymentsServiceFee={item.cashPaymentsServiceFee}
                totalCardPayments={item.totalCardPayments}
                cardPaymentsServiceFee={item.cardPaymentsServiceFee}
                thisWeekDeposit={item.thisWeekDeposit}
                carryOverFromLastWeek={item.carryOverFromLastWeek}
                totalDeposit={item.totalDeposit}
                depositedAmount={item.depositedAmount}
                leftForNextWeek={item.leftForNextWeek}
                needToComplete={item.needToComplete}
              />
            )
          })}
        </tbody>
      </Table>
    </>
  )

  function GetDepositArr(props) {
    const Container = styled.div`
      display: flex;
    `

    const CompleteBtn = styled.button`
      margin-left: 20px;
      width: 100px;
      height: 30px;
      display: inline-block;
      background-color: green;
      color: #ffffff;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      font-weight: 600;
    `

    const DirectBtn = styled.button`
      margin-left: 30px;
      width: 100px;
      height: 30px;
      display: inline-block;
      background-color: #ffffff;
      color: #333333;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      font-weight: 600;
      border-color: grey;
    `

    return (
      <>
        <tr>
          <td>{props.No}</td>
          <td>{props.partnerId}</td>
          <td>{props.partnerName}</td>
          <td>{props.bankName}</td>
          <td>{props.accountNumber}</td>
          <td>{props.totalPaymentsAmount}</td>
          <td>{props.tototalCashPaymentstal}</td>
          <td>{props.cashPaymentsServiceFee}</td>
          <td>{props.totalCardPayments}</td>
          <td>{props.cardPaymentsServiceFee}</td>
          <td>{props.thisWeekDeposit}</td>
          <td>{props.leftForNextWeek}</td>
          <td>{props.totalDeposit}</td>
          <td>{props.depositedAmount}</td>
          <td>{props.leftForNextWeek}</td>
          <td>
            {!props.needToComplete ? (
              <>
                <Container>
                  <DirectBtn>직접 입력</DirectBtn>
                  <CompleteBtn>완료 처리</CompleteBtn>
                </Container>
              </>
            ) : (
              '입금 처리 완료'
            )}
          </td>
        </tr>
      </>
    )
  }
}

export default DepositListResult
