import { Table } from "react-bootstrap";
import { tableStyles } from "../TableStyles";

function DepositListResult({jsonList}) {
  return (
    <>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th style={tableStyles.listTitle}>NO</th>
            <th style={tableStyles.listTitle}>상태구분</th>
            <th style={tableStyles.listTitle}>파트너 ID</th>
            <th style={tableStyles.listTitle}>이름</th>
            <th style={tableStyles.listTitle}>은행구분</th>
            <th style={tableStyles.listTitle}>계좌번호</th>
            <th style={tableStyles.listTitle}>입금필요 금액</th>
            <th style={tableStyles.listTitle}>현금/카드결제</th>
            <th style={tableStyles.listTitle}>수수료 총액</th>
            <th style={tableStyles.listTitle}>수수료 결제</th>
            <th style={tableStyles.listTitle}>이전 미정산 금액</th>
            <th style={tableStyles.listTitle}>비고</th>
          </tr>
        </thead>
        <tbody style={tableStyles.contentListBody}>
          {
            (jsonList?.map((item, i) => {
              <GetDepositArr
                key={i}
                No={i + 1}
                status={item}
              />
            }))
          }
        </tbody>
      </Table>
    </>
  )

  function GetDepositArr(props) {

  }
};

export default DepositListResult;