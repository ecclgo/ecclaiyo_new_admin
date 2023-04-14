import { useState } from "react";

function Paging(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [data, setData] = useState(props.jsonList);
  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for(let i = 1; i <= totalPages; i++) {
      pageNumbers?.push(
        <li key={i} onClick={() => {handleClick(i)}}>
          {i}
        </li>
      );
    };
    return pageNumbers;
  };

  const renderData = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = data?.slice(indexOfFirstItem, indexOfLastItem);

    return currentData?.map((item) => <div key={item.id}>{item.name}</div>);
  };

  return (
    <div>
      {renderData()}
      <ul id="page-numbers">{renderPageNumbers()}</ul>
    </div>
  );
};

export default Paging;