import { useState } from "react";
import { SBanner, BannerText, RegiBanner, RegiBtn, WaitingBtn, ApprovedBtn, DroppedBtn, SearchBox, SearchText, WaitingBox, WatingList, WaitingNumber, WaitingBtnLine, ApproveBtnLine, DroppedBtnLine } from "./BannerStyle";
import { WaitingPartnerSearch } from "../../../api/partner/WaitingPartnerSearch";
import WaitingBanner from "./WaitingBanner";
import ApprovedBanner from "./ApprovedBanner";
import DroppedBanner from "./DroppedBanner";
import { ApprovedPartnerSearch } from "../../../api/partner/ApprovedPartnerSearch";

function CommonBanner() {

  const [clickedTab, setClickedTab] = useState('waiting');
  const [btnActive, setBtnActive] = useState('active1');
  const [jsonList, setJsonList] = useState(null);
  const [appList, setAppList] = useState(null);

  const [post, setPost] = useState({
    keyword: null,
    profileStatus: "ALL",
    dateOfAccessionType: "ALL",
    page: 10,
    size: 5
  });

  const CallSearchList = async() => {
    let result;
    if(clickedTab === 'waiting') {
      result = await WaitingPartnerSearch(post);
      setJsonList(result.data);
    } else if(clickedTab === 'approved') {
      result = await ApprovedPartnerSearch();
      setAppList(result.data);
    };
  };


  return (
    <>
      <SBanner>
        <BannerText type="text" value="파트너 관리" readOnly/>
      </SBanner>
      <RegiBanner>
        <RegiBtn>
          <WaitingBtn value='waiting' className={(btnActive === 'active1' ? " active" : null)} onClick={(e) => {setBtnActive('active1'); setClickedTab('waiting'); CallSearchList();}}>
            가입 대기
            <WaitingBtnLine className={(btnActive === 'active1' ? null : "notActive")} />
          </WaitingBtn>
          <ApprovedBtn value='approved' className={(btnActive === 'active2' ? " active" : null)} onClick={(e) => {setBtnActive('active2'); setClickedTab('approved'); CallSearchList();}}>
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
      </SearchBox>
      {
        clickedTab === 'waiting' ? (
          <WaitingBanner jsonList={jsonList} />
        )
        :
        clickedTab === 'approved' ? (
          <ApprovedBanner jsonList={appList} />
        )
        :
        clickedTab === 'dropped' ? (
          <DroppedBanner jsonList={jsonList} />
        )
        :
        null
      }
    </>
  )
};

export default CommonBanner;