import { useState } from "react";
import { SBanner, BannerText, RegiBanner, RegiBtn, WaitingBtn, ApprovedBtn, DroppedBtn, SearchBox, SearchText, WaitingBox, WatingList, WaitingNumber, WaitingBtnLine, ApproveBtnLine, DroppedBtnLine } from "./BannerStyle";
import WaitingBanner from "./WaitingBanner";
import ApprovedBanner from "./ApprovedBanner";
import DroppedBanner from "./DroppedBanner";
import GlobalStyles from "../../../../GlobalStyles";
import { SearchBanner } from "./SearchBanner";

function CommonBanner() {

  const [clickedTab, setClickedTab] = useState('waiting');
  const [btnActive, setBtnActive] = useState('active1');

  return (
    <>
    <GlobalStyles>
      <SBanner>
        <BannerText>
          파트너 관리
        </BannerText>
      </SBanner>
      <RegiBanner>
        <RegiBtn>
          <WaitingBtn value='waiting' className={(btnActive === 'active1' ? " active" : null)} onClick={() => {setBtnActive('active1'); setClickedTab('waiting');}}>
            가입 대기
            <WaitingBtnLine className={(btnActive === 'active1' ? null : "notActive")} />
          </WaitingBtn>
          <ApprovedBtn value='approved' className={(btnActive === 'active2' ? " active" : null)} onClick={() => {setBtnActive('active2'); setClickedTab('approved');}}>
            승인 파트너
            <ApproveBtnLine className={(btnActive === 'active2' ? null : "notActive")} />
          </ApprovedBtn>
          <DroppedBtn value='dropped' className={(btnActive === 'active3' ? " active" : null)} onClick={() => {setBtnActive('active3'); setClickedTab('dropped');}}>
            탈퇴 인원
            <DroppedBtnLine className={(btnActive === 'active3' ? null : "notActive")} />
          </DroppedBtn>
        </RegiBtn>
      </RegiBanner>
      <SearchBox>
        <SearchText>
          기본 검색
        </SearchText>
        {
          clickedTab === 'dropped' ? 
          null
          :
          (<SearchBanner />)
        }
      </SearchBox>
      {
        clickedTab === 'waiting' ? (
          <WaitingBanner clickedTab={clickedTab} />
        )
        :
        clickedTab === 'approved' ? (
          <ApprovedBanner clickedTab={clickedTab} />
        )
        :
        clickedTab === 'dropped' ? (
          <DroppedBanner />
        )
        :
        null
      }

    </GlobalStyles>
    </>
  )
};

export default CommonBanner;