import { Table } from "react-bootstrap";
import { tableStyles } from "./TableStyles";
import { activeMenu } from "../Constants";
import styled from "styled-components";
import { ChangeActiveStatus } from "../../api/partner/ChangeStatus";
import Select from "react-select";

function ApprovedPartnerResult(props) {
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
          {
            (props.jsonList !== null) ? props.jsonList?.map((item, i) => {
              return (
                <GetApproved 
                  key={i}
                  No={i + 1}
                  id={item.id}
                  partnerActiveStatus={item.partnerActiveStatus}
                  partnerName={item.partnerName}
                  phoneNumber={item.phoneNumber}
                  mannerPoint={item.mannerPoint}
                  countOfService={item.countOfService}
                  gpa={item.gpa}
                  additionalNote={item.additionalNote}
                  passInfo={item.passInfo?.type + "/" + item.passInfo?.remainDay}
                  lastAccessDate={item.lastAccessDate}
                  dateOfAccession={item.dateOfAccession}
                />
              )
            }) : null
          }
        </tbody>
      </Table>
    </>
  )

  function GetApproved(props) {
    const options = activeMenu;


    const dropdownOptions = options.map((option) => {
      return {value: option.engStatus, label: option.korStatus}
    });

    const handleSelectChange = async(selectedOption) => {
      let data = 
      {
        id: props.id,
        status: selectedOption.value,
      };
      await ChangeActiveStatus(data);
    };

    const ButtonZip = styled.button`
      color: black;
      border: none;
      background-color: #EFF2F8;
      font-weight: 400;
      font-family: "Inter";
      font-style: normal;
      font-size: 16px;
      line-height: 16px;
    `;

    const StyledSelect = styled(Select)`
      width: 250px;
    `;

    return (
      <>
        <tr>
          <td>{props.No}</td>
          <td>{props.id}</td>
          <td>
            <StyledSelect options={dropdownOptions} defaultValue={props.partnerActiveStatus} placeholder={props.partnerActiveStatus} onChange={handleSelectChange} />
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
};

export default ApprovedPartnerResult;