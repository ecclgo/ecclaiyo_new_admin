import { useState } from "react";
import { BannerText, PartnerPayBtn, PartnerPayBtnLine, PayBanner, PayBtn, PayBtnLine, PayCompleteBtn, SBanner, SearchBox, SearchText } from "./BannerStyle";
import PayCompleteBanner from "./PayCompleteBanner";
import PartnerPayBanner from "./PartnerPayBanner";

function PayCommonBanner() {
  const [clickedTab, setClickedTab] = useState('payment');
  const [btnActive, setBtnActive] = useState('active4');

  return (
    <>
      <SBanner>
        <BannerText>
          정산관리
        </BannerText>
      </SBanner>
      <PayBanner>
        <PayBtn>
          <PayCompleteBtn value="payment" className={(btnActive === 'active4' ? "active" : null)} onClick={() => {setBtnActive('active4'); setClickedTab('payment');}}>
            입금 처리
            <PayBtnLine className={(btnActive === 'active4' ? null : "notActive")} />
          </PayCompleteBtn>
          <PartnerPayBtn value="partner" className={(btnActive === 'active5' ? "active" : null)} onClick={() => {setBtnActive('active5'); setClickedTab('partner');}}>
            파트너 결제
            <PartnerPayBtnLine className={(btnActive === 'active5' ? null : "notActive")} />
          </PartnerPayBtn>
        </PayBtn>
      </PayBanner>
      <SearchBox>
        <SearchText>
          기본 검색
        </SearchText>
      </SearchBox>
      {
        clickedTab === 'payment' ? (
          <PayCompleteBanner clickedTab={clickedTab} />
        )
        :
        clickedTab === 'partner' ? (
          <PartnerPayBanner clickedTab={clickedTab} />
        )
        :
        null
      }
    </>
  )
};

export default PayCommonBanner;