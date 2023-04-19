import styled from "styled-components";
import close from "../../img/close.png";
import { useEffect } from "react";
import { GetApprovedPartnerDetail } from "../../../api/partner/detail/GetApprovedPartnerDetail";
import { ModalOverlay, ModalLayout, LayoutText, ModalCloseBtn, Text, Underline, NavTab } from "./PartnerCommonModal";

const NavText1 = styled(Text)`
  left: 41px;
`;

const NavText2 = styled(Text)`
  left: 200px;
`;

const NavText3 = styled(Text)`
  left: 360px;
`;

const NavText4 = styled(Text)`
  left: 520px;
`;

function ApprovedPartnerModal({openModal, setOpenModal}) {
  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const getDetail = async(data) => {
      if(openModal === true) {
        let result;
        result = await GetApprovedPartnerDetail(data);
        console.log(result);
      }
    }
    getDetail(parseInt(localStorage.getItem("partnerId")));
  }, [openModal]);

  return(
    <>
      <ModalOverlay show={openModal}>
        <ModalLayout show={openModal}>
          <LayoutText>
            파트너 상세정보
          </LayoutText>
          <NavTab>
            <NavText1>
              기본정보
            </NavText1>
            <NavText2>
              이용내역
            </NavText2>
            <NavText3>
              리뷰
            </NavText3>
            <NavText4>
              정산
            </NavText4>
            <Underline />
          </NavTab>
          <ModalCloseBtn onClick={closeModal}>
            <img src={close} style={{width: "20px", cursor: "pointer"}}/>
          </ModalCloseBtn>
        </ModalLayout>
      </ModalOverlay>
    </>
  );
};

export default ApprovedPartnerModal;