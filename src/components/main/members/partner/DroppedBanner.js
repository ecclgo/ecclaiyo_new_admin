import { useEffect, useState } from 'react'
import { PostNumber, ResultBox, ResultList, ResultNumber } from './BannerStyle'
import { DroppedPartnerSearch } from '../../../../api/partner/DroppedPartnerSearch'
import DroppedPartnerResult from '../../../searchResult/DroppedPartnerResult'
import Paging from '../../../searchResult/Paging'

function DroppedBanner({ clickedTab }) {
  const [posts, setPosts] = useState([]) //  post 받아오기
  const [currentPage, setCurrentPage] = useState(1) //  현재 페이지
  const [postPerPage, setPostPerPage] = useState(5) //  페이지별 보여줄 post 갯수.

  const [openModal, setOpenModal] = useState(false)

  const indexOfLast = currentPage * postPerPage
  const indexOfFirst = indexOfLast - postPerPage
  const currentPosts = (posts) => {
    let currentPosts = 0
    currentPosts = posts?.slice(indexOfFirst, indexOfLast)
    return currentPosts
  }

  useEffect(() => {
    const fetchData = async () => {
      if (clickedTab === 'dropped') {
        let result = await DroppedPartnerSearch()
        setPosts(result.data)
        currentPosts(posts)
      }
    }
    fetchData()
  }, [clickedTab])

  return (
    <>
      <ResultBox>
        <ResultNumber>
          탈퇴 인원(총{' '}
          <PostNumber number={posts?.length}>{posts?.length}</PostNumber>명)
        </ResultNumber>
        <ResultList>
          <DroppedPartnerResult jsonList={currentPosts(posts)} />
        </ResultList>
        <Paging totalPosts={posts?.length} paginate={setCurrentPage} />
      </ResultBox>
    </>
  )
}

export default DroppedBanner
