import { Table } from "react-bootstrap";
import picture from "../img/picture.png";
import { downloadFile } from "../../api/partner/donwloadAll/DownloadAll";
import styled from "styled-components";
import Select from "react-select";
import { statusMenu } from "../Constants";
import { ChangeStatus } from "../../api/partner/ChangeStatus";
import { tableStyles } from "./TableStyles";
import moment from "moment";
import Message from "../modal/partner/Message";
import { useEffect, useState } from "react";

function WaitingPartnerResult(props) {

  return (
    <>
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th style={tableStyles.listTitle}>NO</th>
              <th style={tableStyles.listTitle}>진행상태</th>
              <th style={tableStyles.listTitle}>파트너ID</th>
              <th style={tableStyles.listTitle}>파트너 이름</th>
              <th style={tableStyles.listTitle}>연락처</th>
              <th style={tableStyles.listTitle}>사업자 등록번호</th>
              <th style={tableStyles.listTitle}>사업자 등록증</th>
              <th style={tableStyles.listTitle}>화물 자격증</th>
              <th style={tableStyles.listTitle}>운전 면허증</th>
              <th style={tableStyles.listTitle}>통장 사본</th>
              <th style={tableStyles.listTitle}>다운로드</th>
              <th style={tableStyles.listTitle}>파트너 활동지역</th>
              <th style={tableStyles.listTitle}>등록 일자</th>
              <th style={tableStyles.listTitle}>최근 수정</th>
            </tr>
          </thead>
          <tbody style={tableStyles.contentListBody}>
            {
              (props.jsonList !== null) ? props.jsonList?.map((item, i) => {
                return (
                  <GetPartner 
                    key={i}
                    Id={i + 1}
                    status={
                      item.status === 'IN_REVIEW' ? '승인대기'
                      : item.status === 'IN_MODIFICATION' ? '수정요청'
                      : item.status === 'READY_FOR_CONTRACT' ? '계약대기'
                      : item.status === 'APPROVED' ? '가입완료'
                      : item.status === 'DENIED' ? '가입거부'
                      : null
                    }
                    partnerId={item.partnerId}
                    partnerName={item.partnerName}
                    phoneNumber={item.phoneNumber}
                    partnerUsername={item.partnerUsername}
                    businessRegistrationNumber={item.businessRegistrationNumber}
                    BUSINESS_LICENSE={item.documents[1]?.url}
                    CARRIERS_CERT={item.documents[2]?.url}
                    DRIVER_LICENSE={item.documents[0]?.url}
                    BANKBOOK={item.documents[3]?.url}
                    partnerBusinessArea={item.partnerBusinessArea}
                    dateOfRegistration={
                      moment(item.dateOfRegistration).format('YY.MM.DD' + ' - ' + 'HH:mm')
                    }
                    lastModifiedDate={moment(item.lastModifiedDate).format('YY.MM.DD' + ' - ' + 'HH:mm')}
                    setOpenModal={props.setOpenModal}
                    setMsgModal={props.setMsgModal}
                    Msg={props.Msg}
                    setStatusData={props.setStatusData}
                    statusData={props.statusData}
                  />
                )
              }) : null
            }
          </tbody>
        </Table>
      </div>
    </>
  )
};

function GetPartner(props) {
  const options = statusMenu;

  const dropdownOptions = options.map((option) => {
    return {value: option.engStatus, label: option.korStatus}
  });

  const handleSelectChange = async(selectedOption) => {
      if(selectedOption?.value === "IN_MODIFICATION") {
        props.setMsgModal(true);
        props.setStatusData((prevState) => {
          return {
            ...prevState,
            id: props.partnerId,
            profileStatus: selectedOption.value,
          }
        });
      } else {
        let data = {
          id: props.partnerId,
          profileStatus: selectedOption.value,
          message: null
        }
        let result;
        result = await ChangeStatus(data);
      }
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
    cursor: pointer;
  `;

  const StyledSelect = styled(Select)`
    width: 160px;
    cursor: pointer;
  `;

  const handleModal = () => {
    props.setOpenModal(true);
  };

  const getPartnerId = (data) => {
    if(localStorage.getItem("partnerId") === '') {
      localStorage.setItem("partnerId", data);
    } else {
      localStorage.removeItem("partnerId");
      localStorage.setItem("partnerId", data);
    }
  }

  return (
    <tr>
      <td>{props.Id}</td>
      <td>
        <StyledSelect options={dropdownOptions} defaultValue={props.status} placeholder={props.status} onChange={handleSelectChange} />
      </td>
      <td>
        <a style={{cursor: "pointer", textDecorationLine:"underline", color: "blue"}} onClick={() => {handleModal(); getPartnerId(props.partnerId);}} >
          {props.partnerId}
        </a>
      </td>
      <td>{props.partnerName}</td>
      <td>{props.phoneNumber}</td>
      <td>{props.businessRegistrationNumber}</td>
      <td><a href={props.BUSINESS_LICENSE} download={props.BUSINESS_LICENSE} ><img src={picture} /></a></td>
      <td><a href={props.CARRIERS_CERT} download={props.CARRIERS_CERT}><img src={picture} /></a></td>
      <td><a href={props.DRIVER_LICENSE} download={props.DRIVER_LICENSE}><img src={picture} /></a></td>
      <td><a href={props.BANKBOOK} download={props.BANKBOOK}><img src={picture} /></a></td>
      <td><ButtonZip onClick={() => {downloadFile(props.partnerId)}}>[전체 다운로드]</ButtonZip></td>
      <td>{props.partnerBusinessArea}</td>
      <td>{props.dateOfRegistration}</td>
      <td>{props.lastModifiedDate}</td>
    </tr>
  )
}

export default WaitingPartnerResult;