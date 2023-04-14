import ApprovedPartnerResult from "../../searchResult/ApprovedPartnerResult";
import { ResultBox, ResultList, ResultNumber } from "./BannerStyle";

function ApprovedBanner(props) {
  return (
    <>
      <ResultBox>
        <ResultNumber>
          파트너 목록(총 {props.jsonList?.length}개)
        </ResultNumber>
        <ResultList>
          <ApprovedPartnerResult jsonList={props.jsonList} />
        </ResultList>
      </ResultBox>
    </>
  )
};

export default ApprovedBanner;