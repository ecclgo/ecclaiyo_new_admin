import { useState } from "react";
import { SBanner, BannerText, RegiBanner, RegiBtn, WaitingBtn, ApprovedBtn, DroppedBtn, SearchBox, SearchText, WaitingBox, WatingList, WaitingNumber, WaitingBtnLine, ApproveBtnLine, DroppedBtnLine } from "./BannerStyle";
import WaitingBanner from "./WaitingBanner";
import ApprovedBanner from "./ApprovedBanner";
import DroppedBanner from "./DroppedBanner";
import GlobalStyles from "../../../../GlobalStyles";
import { SearchBanner } from "./WaitingSearchBanner";
import { WaitingPartnerSearch, getSpecificPartner } from "../../../../api/partner/WaitingPartnerSearch";
import ApprovedSearchBanner from "./ApprovedSearchBanner";

function CommonBanner() {
  const [clickedTab, setClickedTab] = useState('waiting');
  const [btnActive, setBtnActive] = useState('active1');
  const [searchResult, setSearchResult] = useState(null);
  
  const [data, setData] = useState({
    profileStatus: "ALL",
    dateOfAccessionType: "ALL",
    page: 1,
    size: 50
  });

  const handleSearch = async(data) => {
    let result;
    result = await WaitingPartnerSearch(data);
    setSearchResult(result);
  };

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
          clickedTab === 'waiting' ?
          (<SearchBanner data={data} setData={setData} handleSearch={handleSearch} />)
          :
          clickedTab === 'approved' ?
          (<ApprovedSearchBanner data={data} setData={setData} handleSearch={handleSearch} />)
          :
          null
        }
      </SearchBox>
      {
        clickedTab === 'waiting' ? (
          <WaitingBanner clickedTab={clickedTab} searchResult={searchResult} />
        )
        :
        clickedTab === 'approved' ? (
          <ApprovedBanner clickedTab={clickedTab} />
        )
        :
        clickedTab === 'dropped' ? (
          <DroppedBanner clickedTab={clickedTab} />
        )
        :
        null
      }
    </GlobalStyles>
    </>
  )
};

export default CommonBanner;