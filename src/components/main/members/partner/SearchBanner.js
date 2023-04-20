import styled from "styled-components";
import { useState } from "react";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 2250px;
  margin-top: 80px;
`;

export const Th = styled.th`
  background-color: #F8F9FD;
  border: 1px solid #EFF2F8;
  padding: 10px;
  width: 200px;
  height: 30px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
`;

export const Td = styled.td`
  border: 1px solid #EFF2F8;
  padding: 10px;
  width: 2200px;
  background-color: #FFFFFF;
`;

export const Input = styled.input`
  width: 250px;
  height: 30px;
  margin-left: 15px;

  background-color: #FFFFFF;
  border: 1px solid #BBBBBB;
  border-radius: 3px;
`;

export const CheckboxContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  position: relative;

  label {
    margin-left: 0.5rem;
    font-size: 1rem;
  }
`;

export const Label = styled.label`
  margin-left: 1rem;
  font-size: 1rem;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  height: 1.5rem;
  width: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 1px;
  margin-left: 1.0rem;

  &:checked {
    &::before {
      content: "\\2713"; // 체크 표시를 그리는 가상 요소입니다.
      display: block;
      width: 1.5rem;
      height: 1.5rem;
      background-color: green;
      border-radius: 3px;
      text-align: center;
      line-height: 1.5rem;
      font-size: 2rem;
      color: white;
    }
  }
`;

export const DateConatiner = styled.div`
  width: 300px;
  height: 50px;
  margin-left: 10px;
`;

export const DateBox = styled.button`
  position: absolute;
  width: 60px;
  height: 30px;
  
  top: 220px;
  background-color: #FFFFFF;
  border: ${props => props.checked ? '2px solid #0E9F56' : '1px solid #BBBBBB'};
  color: ${props => props.checked ? '#0E9F56' : '#333333'};
  cursor: pointer;
`;

export const TodayBox = styled(DateBox)`
  left: 230px;
`;

export const MonthBox = styled(DateBox)`
  left: 300px;
`;

export const YearBox = styled(DateBox)`
  left: 370px;
`;

export const AllBox = styled(DateBox)`
  left: 440px;
`;

export function SearchBanner() {
  const [checked, setChecked] = useState([false, false, false, false]);
  const [btnChecked, setBtnChecked] = useState([false, false, false, false]);

  const handleChange = (e) => {
    const index = parseInt(e.target.id.split("-")[1]) - 1;
    const newChecked = checked.map((value, i) => i === index);
    setChecked(newChecked);
  }

  const handleBtnChange = (e) => {
    const index = parseInt(e.target.id.split("-")[1]) - 1;
    const newChecked = btnChecked.map((value, i) => i === index);
    setBtnChecked(newChecked);
  }

  return (
    <Table>
      <thead>
        <tr>
          <Th>검색어</Th>
          <Td>
            <Input placeholder="파트너Id / 파트너 이름 / 연락처" />
          </Td>
        </tr>
        <tr>
          <Th>진행상태</Th>
          <Td>
            <div>
              <CheckboxContainer>
                <Checkbox
                  id="checkbox-1"
                  checked={checked[0]}
                  onChange={handleChange}
                />
                <Label htmlFor="checkbox-1">전체</Label>
              </CheckboxContainer>
              <CheckboxContainer>
                <Checkbox
                  id="checkbox-2"
                  checked={checked[1]}
                  onChange={handleChange}
                />
                <Label htmlFor="checkbox-2">대기중</Label>
              </CheckboxContainer>
              <CheckboxContainer>
                <Checkbox
                  id="checkbox-3"
                  checked={checked[2]}
                  onChange={handleChange}
                />
                <Label htmlFor="checkbox-3">수정요청</Label>
              </CheckboxContainer>
              <CheckboxContainer>
                <Checkbox
                  id="checkbox-4"
                  checked={checked[3]}
                  onChange={handleChange}
                />
                <Label htmlFor="checkbox-4">계약대기</Label>
              </CheckboxContainer>
            </div>
          </Td>
        </tr>
        <tr>
          <Th>가입날짜</Th>
          <Td>
            <DateConatiner>
              <TodayBox id="checkbox-1" checked={btnChecked[0]} onClick={handleBtnChange} defaultChecked >
                오늘
              </TodayBox>
              <MonthBox id="checkbox-2" checked={btnChecked[1]} onClick={handleBtnChange}>
                이번달
              </MonthBox>
              <YearBox id="checkbox-3" checked={btnChecked[2]} onClick={handleBtnChange}>
                1년
              </YearBox>
              <AllBox id="checkbox-4" checked={btnChecked[3]} onClick={handleBtnChange}>
                전체
              </AllBox>
            </DateConatiner>
          </Td>
        </tr>
      </thead>
    </Table>
  )
};

