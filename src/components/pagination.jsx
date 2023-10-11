import React, { useState } from 'react';
import "./pagination.css"

const Pagination = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = data.slice(startIndex, endIndex);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};


  const handlePageChange = (page) => {
    scrollToTop();
    setCurrentPage(page);
  };

  return (

    <React.Fragment>

    <div className='pagination-data'>
        {currentItems.map((item, index) => (
            <div key={index}>{item}</div>
        ))}
    </div>

    <div className="pagination-container">
      <div className="p-btn-container">
        {totalPages !== 1 && Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
    </React.Fragment>
  );
};

export default Pagination;
