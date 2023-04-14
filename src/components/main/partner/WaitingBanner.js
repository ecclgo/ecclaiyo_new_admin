import { ResultBox, ResultNumber, ResultList } from "./BannerStyle";
import WaitingPartnerResult from "../../searchResult/WaitingPartnerResult";
import Paging from "../../searchResult/Paging";


function WaitingBanner(props) {
  return (
    <>
      <ResultBox>
        <ResultNumber>
          가입 대기 목록 (총 {props.jsonList?.length}개)
        </ResultNumber>
        <ResultList>
          <WaitingPartnerResult jsonList={props.jsonList} />
          <Paging jsonList={props.jsonList} />
        </ResultList>
      </ResultBox>
    </>
  );
};

export default WaitingBanner;