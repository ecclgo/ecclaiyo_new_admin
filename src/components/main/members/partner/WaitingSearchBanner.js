import { useState } from "react";
import { AllBox, Checkbox, CheckboxContainer, Input, Label, MonthBox, ResetBtn, SearchBtn, Table, Td, Th, TodayBox, YearBox } from "./SearchBannerStyle";

export function SearchBanner({ data, setData, handleSearch }) {
  const [checked, setChecked] = useState([true, false, false, false]);
  const [btnChecked, setBtnChecked] = useState([false, false, false, true]);
  const [searchId, setSearchId] = useState('');

  const handleSearchTxt = (e) => {
    setSearchId(e.target.value);
  };

  const handleChange = (e) => {
    const index = parseInt(e.target.id.split("-")[1]) - 1;
    const newChecked = checked.map((value, i) => i === index);
    setChecked(newChecked);
    setData((prevState) => {
      return {
        ...prevState,
        profileStatus: e.target.value,
        page: 10,
        size: 5
      }
    })
  }

  const handleBtnChange = (e) => {
    const index = parseInt(e.target.id.split("-")[1]) - 1;
    const newChecked = btnChecked.map((value, i) => i === index);
    setBtnChecked(newChecked);
    setData((prevState) => {
      return {
        ...prevState,
        dateOfAccessionType: e.target.value,
        page: 10,
        size: 5
      }
    })
  }
  
  let url;
  url = `profileStatus=`+ data.profileStatus + `&dateOfAccessionType=` + data.dateOfAccessionType + `&page=1&size=50`;
  
  const Submit = async(data) => {
    await handleSearch(data);
  };
  

  return (
    <Table>
      <thead>
        <tr>
          <Th>검색어</Th>
          <Td>
            <Input type="text" placeholder="파트너Id / 파트너 이름 / 연락처" onChange={handleSearchTxt} />
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
                  value="ALL"
                />
                <Label htmlFor="checkbox-1">전체</Label>
              </CheckboxContainer>
              <CheckboxContainer>
                <Checkbox
                  id="checkbox-2"
                  checked={checked[1]}
                  onChange={handleChange}
                  value="IN_REVIEW"
                />
                <Label htmlFor="checkbox-2">대기중</Label>
              </CheckboxContainer>
              <CheckboxContainer>
                <Checkbox
                  id="checkbox-3"
                  checked={checked[2]}
                  onChange={handleChange}
                  value="IN_MODIFICATION"
                />
                <Label htmlFor="checkbox-3">수정요청</Label>
              </CheckboxContainer>
              <CheckboxContainer>
                <Checkbox
                  id="checkbox-4"
                  checked={checked[3]}
                  onChange={handleChange}
                  value="READY_FOR_CONTRACT"
                />
                <Label htmlFor="checkbox-4">계약대기</Label>
              </CheckboxContainer>
            </div>
          </Td>
        </tr>
        <tr>
          <Th>가입날짜</Th>
          <Td>
            <TodayBox id="checkbox-1" value="TODAY" checked={btnChecked[0]} onClick={handleBtnChange}>
              오늘
            </TodayBox>
            <MonthBox id="checkbox-2" value="MONTH" checked={btnChecked[1]} onClick={handleBtnChange}>
              이번달
            </MonthBox>
            <YearBox id="checkbox-3" value="YEAR" checked={btnChecked[2]} onClick={handleBtnChange}>
              1년
            </YearBox>
            <AllBox id="checkbox-4" value="ALL" checked={btnChecked[3]} onClick={handleBtnChange}>
              전체
            </AllBox>
          </Td>
          <SearchBtn onClick={() => {Submit(url);}}>
            검색
          </SearchBtn>
          <ResetBtn>
            초기화
          </ResetBtn>
        </tr>
      </thead>
    </Table>
  )
};

