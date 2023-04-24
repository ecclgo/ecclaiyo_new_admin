import styled from 'styled-components'

export const SBanner = styled.div`
  position: absolute;
  width: 2300px;
  height: 88px;
  left: 240px;
  top: 90px;
  border: 1px solid;

  background-color: #ffffff;
  border-radius: 10px;
`

export const BannerText = styled.span`
  position: absolute;
  width: 150px;
  height: 50px;
  left: 30px;
  top: 30px;
  text-align: center;
  background-color: #ffffff;
  border-color: #ffffff;
  border: none;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;

  color: #333333;
`

export const RegiBanner = styled.div`
  position: absolute;
  width: 2300px;
  height: 70px;
  left: 240px;
  top: 200px;
  border: 0.1px solid;
  border-radius: 10px;

  background: #ffffff;
`

export const RegiBtn = styled.div`
  position: absolute;
  width: 291px;
  height: 39px;
  left: 248px;
  top: 180px;
  display: flex;
`

export const WaitingBtn = styled.button`
  position: absolute;
  width: 80px;
  height: 17px;
  left: -200px;
  top: -150px;
  border: none;
  text-align: center;
  background-color: #ffffff;
  color: #333333;
  cursor: pointer;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 17px;

  &:hover {
    color: green;
  }
  &.active {
    color: green;
  }
`

export const WaitingBtnLine = styled.div`
  position: absolute;
  width: 67px;
  height: 1px;
  left: 6px;
  top: 25px;
  background-color: green;

  &.notActive {
    display: none;
  }
`

export const ApproveBtnLine = styled.div`
  position: absolute;
  width: 80px;
  height: 1px;
  left: 15px;
  top: 25px;
  background-color: green;

  &.notActive {
    display: none;
  }
`

export const DroppedBtnLine = styled.div`
  position: absolute;
  width: 70px;
  height: 1px;
  left: 6px;
  top: 25px;
  background-color: green;

  &.notActive {
    display: none;
  }
`

export const ApprovedBtn = styled.button`
  position: absolute;
  width: 110px;
  height: 17px;
  left: -120px;
  top: -150px;
  border: none;
  text-align: center;
  background-color: #ffffff;
  color: #333333;
  cursor: pointer;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 17px;

  &:hover {
    color: green;
  }
  &.active {
    color: green;
  }
`

export const DroppedBtn = styled.button`
  position: absolute;
  width: 80px;
  height: 17px;
  left: -0px;
  top: -150px;
  border: none;
  text-align: center;
  background-color: #ffffff;
  color: #333333;
  cursor: pointer;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 17px;

  &:hover {
    color: green;
  }
  &.active {
    color: green;
  }
`

export const SearchBox = styled.div`
  position: absolute;
  width: 2300px;
  height: 308px;
  left: 240px;
  top: 290px;
  border: 0.1px solid;

  background: #ffffff;
  border-radius: 10px;
`

export const SearchText = styled.span`
  position: absolute;
  width: 100px;
  height: 22px;
  left: 58px;
  top: 20px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;

  color: #333333;
`

export const SearchTable = styled.div``

export const ResultBox = styled.div`
  position: absolute;
  width: 2300px;
  height: 500px;
  left: 240px;
  top: 620px;
  border: 0.1px solid;

  background: #ffffff;
  border-radius: 10px;
`

export const ResultNumber = styled.span`
  position: absolute;
  width: 200px;
  height: 22px;
  left: 70px;
  top: 30px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  color: #333333;
`

export const ResultList = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 2100px;
  height: 250px;
  left: 150px;
  top: 100px;

  border: 1px solid #eff2f8;
`

export const ApprovedList = styled.div``

export const PostNumber = styled.span`
  color: ${(props) => {
    const number = parseInt(props.number)
    if (number >= 0) {
      return 'green'
    }
  }};
`
