import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 2250px;
  margin-top: 55px;
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
  margin-top: 5px;

  &:checked {
    &::before {
      content: "\\2713"; 
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
  position: absolute;
  width: 200px;
  height: 50px;
  bottom: 50px;
`;

export const DateBox = styled.button`
  position: absolute;
  width: 60px;
  height: 30px;
  bottom: 90px;
  left: -100px;

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

export const SearchBtn = styled.button`
  position: absolute;
  width: 120px;
  height: 40px;
  left: 227px;
  top: 250px;
  background-color: #0E9F56ee;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 17px;
  font-style: normal;
  font-family: "Inter";
`;

export const ResetBtn = styled.button`
  position: absolute;
  width: 120px;
  height: 40px;
  left: 360px;
  top: 250px;
  background-color: #FFFFFF;
  border-radius: 3px;
  cursor: pointer;
  color: #333333;
  font-weight: 600;
  font-size: 17px;
  font-style: normal;
  font-family: "Inter";
  border: 1px solid lightgray;
`;