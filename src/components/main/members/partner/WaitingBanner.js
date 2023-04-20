import { ResultBox, ResultNumber, ResultList, PostNumber } from "./BannerStyle";
import WaitingPartnerResult from "../../../searchResult/WaitingPartnerResult";
import Paging from "../../../searchResult/Paging";
import { useEffect, useState } from "react";
import { WaitingPartnerSearch } from "../../../../api/partner/WaitingPartnerSearch";
import WaitingPartnerModal from "../../../modal/partner/WaitingPartnerModal";
import Message from "../../../modal/partner/Message";


function WaitingBanner({clickedTab}) {
  const [data, setData] = useState({
    keyword: null,
    profileStatus: "ALL",
    dateOfAccessionType: "ALL",
    page: 10,
    size: 5
  });

  const [posts, setPosts] = useState([]);                   //  post 받아오기
  const [currentPage, setCurrentPage] = useState(1);        //  현재 페이지
  const [postPerPage, setPostPerPage] = useState(5);        //  페이지별 보여줄 post 갯수.
  const [openModal, setOpenModal] = useState(false);        //  상세정보창 오픈 Modal
  const [msgModal, setMsgModal] = useState(false);
  const [Msg, setMsg] = useState("");
  const [statusData, setStatusData] = useState({
    id: 1,
    profileStatus: ""
  });

  const newData = {
    ...statusData,
    message: Msg
  }

  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;

  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts?.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };


  useEffect(() => {
    const fetchData = async(data) => {
      if(clickedTab === 'waiting') {
        let result = await WaitingPartnerSearch(data);
        setPosts(result.data);
        currentPosts(posts);
      }
    }
    fetchData();
  }, [clickedTab, Msg]);

  console.log(newData);

  return (
    <>
      <ResultBox>
        <ResultNumber>
          가입 대기 목록 (총 <PostNumber number={posts?.length}>{posts?.length}</PostNumber>개)
        </ResultNumber>
        <ResultList>
          <WaitingPartnerResult jsonList={currentPosts(posts)} setOpenModal={setOpenModal} msgModal={msgModal} setMsgModal={setMsgModal} Msg={Msg} setStatusData={setStatusData} />
        </ResultList>
        <WaitingPartnerModal openModal={openModal} setOpenModal={setOpenModal} />
        <Message openModal={openModal} setOpenModal={setOpenModal} msgModal={msgModal} setMsgModal={setMsgModal} setMsg={setMsg} statusData={statusData} newData={newData} />
        <Paging paginate={setCurrentPage} totalPosts={posts?.length} />
      </ResultBox>
    </>
  );
};

export default WaitingBanner;