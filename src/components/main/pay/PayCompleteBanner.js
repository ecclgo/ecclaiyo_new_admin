import { useEffect, useState } from "react";
import { GetInvoices } from "../../../api/pay/GetInvoices";
import { PostNumber, ResultBox, ResultList, ResultNumber } from "./BannerStyle";
import Paging from "../../searchResult/Paging";
import DepositListResult from "../../searchResult/pay/DepositListResult";

function PayCompleteBanner({clickedTab}) {
  const [posts, setPosts] = useState([]);                   //  post 받아오기
  const [currentPage, setCurrentPage] = useState(1);        //  현재 페이지
  const [postPerPage, setPostPerPage] = useState(5);        //  페이지별 보여줄 post 갯수.

  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts?.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  useEffect(() => {
    const fetchData = async() => {
      if(clickedTab === 'payment') {
        let result = await GetInvoices();
        setPosts(result);
        currentPosts(posts);
      }
    }
    fetchData();
  }, [clickedTab]);

  return (
    <>
      <ResultBox>
        <ResultNumber>
          목록 (총 <PostNumber number={posts?.length}>{posts?.length}</PostNumber>개)
        </ResultNumber>
        <ResultList>
          <DepositListResult jsonList={currentPosts(posts)} />
        </ResultList>
        <Paging totalPosts={posts?.length} paginate={setCurrentPage} />
      </ResultBox>
    </>
  )
};

export default PayCompleteBanner;