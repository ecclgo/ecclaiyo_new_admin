import styled from 'styled-components'
import Loading_Spinner from './components/img/Loading_Spinner.gif'

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LoadingText = styled.div`
  font: 1rem 'Noto Sans KR';
  text-align: center;
`

function Loading() {
  return (
    <>
      <Background>
        <LoadingText>검색 중 입니다.</LoadingText>
        <img src={Loading_Spinner} />
      </Background>
    </>
  )
}

export default Loading
