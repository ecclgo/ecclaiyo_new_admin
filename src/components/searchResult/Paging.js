import styled from "styled-components";

const PageUl = styled.ul`
  position: absolute;
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: white;
  padding: 1px;
  background-color: gray;
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
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;

function Paging({ totalPosts, paginate }) {
  const pageNumbers = [];
  for(let i = 1; i <= Math.ceil(totalPosts / 5); i++) {
    pageNumbers.push(i);
  }

  return(
    <div>
      <nav>
        <PageUl className="pagination">
          {pageNumbers.map((number) => (
            <PageLi key={number} className="page-item">
              <PageSpan onClick={() => paginate(number)} className="page-link">
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