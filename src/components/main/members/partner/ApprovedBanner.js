import ApprovedPartnerResult from '../../../searchResult/ApprovedPartnerResult'
import { PostNumber, ResultBox, ResultList, ResultNumber } from './BannerStyle'
import Paging from '../../../searchResult/Paging'
import { useEffect, useState } from 'react'
import { ApprovedPartnerSearch } from '../../../../api/partner/ApprovedPartnerSearch'
import ApprovedPartnerModal from '../../../modal/partner/ApprovedPartnerModal'

function ApprovedBanner({ clickedTab }) {
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
      if (clickedTab === 'approved') {
        let result = await ApprovedPartnerSearch()
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
          파트너 목록(총{' '}
          <PostNumber number={posts?.length}>{posts?.length}</PostNumber>개)
        </ResultNumber>
        <ResultList>
          <ApprovedPartnerResult
            jsonList={currentPosts(posts)}
            setOpenModal={setOpenModal}
          />
        </ResultList>
        <ApprovedPartnerModal
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
        <Paging totalPosts={posts?.length} paginate={setCurrentPage} />
      </ResultBox>
    </>
  )
}

export default ApprovedBanner
