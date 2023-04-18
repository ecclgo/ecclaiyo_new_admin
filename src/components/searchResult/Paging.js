import { useState } from "react";
import styled from "styled-components";

const PageUl = styled.ul`
  position: absolute;
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: black;
  padding: 1px;
  
  top: 400px;
  left: 1100px;
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  background-color: #FFFFFF;
  &:hover {
    cursor: pointer;
    background-color: green;
  }
  &:focus::after {
    color: green;
  }
`;

const PageSpan = styled.button`
  padding: 5px 5px;
  width: 25px;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${props => props.activeBtn ? 'green' : '#FFFFFF'};
  color: ${props => props.activeBtn ? '#FFFFFF' : '#333333'};
  border: none;
  &:hover {
    background-color: green;
  }
  &:focus::after {
    border-radius: 100%;
    color: black;
    background-color: green;
  }
`;

function Paging({ totalPosts, paginate }) {
  const [activeBtn, setActiveBtn] = useState(1);

  const handleClick = (number) => {
    setActiveBtn(number);
  }
  

  const pageNumbers = [];
  for(let i = 1; i <= Math.ceil(totalPosts / 5); i++) {
    pageNumbers.push(i);
  }

  return(
    <div>
      <nav>
        <PageUl className="pagination" > 
          {pageNumbers.map((number) => (
            <PageLi key={number} className="page-item" >
              <PageSpan activeBtn={activeBtn === number} onClick={() => {paginate(number); handleClick(number)}} className="page-link">
                {number}
              </PageSpan>
            </PageLi>
          ))}
        </PageUl>
      </nav>
    </div>
  )
}

export default Paging;