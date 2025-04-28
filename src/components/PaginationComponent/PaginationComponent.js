import React from 'react';
import './PaginationComponent.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PaginationComponent = ({ 
  current, 
  total, 
  pageSize = 14, 
  onChange 
}) => {
  if (total <= pageSize) return null;
  
  const totalPages = Math.ceil(total / pageSize);
  
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if there are few
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      // Calculate the range of pages to show around current
      let startPage = Math.max(2, current - 1);
      let endPage = Math.min(totalPages - 1, current + 1);
      
      // Adjust if we're near the beginning
      if (current <= 3) {
        endPage = 4;
      }
      
      // Adjust if we're near the end
      if (current >= totalPages - 2) {
        startPage = totalPages - 3;
      }
      
      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pages.push('...');
      }
      
      // Add the range of pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pages.push('...');
      }
      
      // Always show last page
      pages.push(totalPages);
    }
    
    return pages;
  };
  
  const pageNumbers = getPageNumbers();
  
  const handlePrev = () => {
    if (current > 1) {
      onChange(current - 1);
    }
  };
  
  const handleNext = () => {
    if (current < totalPages) {
      onChange(current + 1);
    }
  };
  
  return (
    <div className="pagination-container">
      <button 
        className="pagination-button" 
        onClick={handlePrev}
        disabled={current === 1}
      >
        <ChevronLeft size={18} />
        <span>Prev</span>
      </button>
      
      <div className="pagination-pages">
        {pageNumbers.map((page, index) => (
          page === '...' ? (
            <span key={`ellipsis-${index}`} className="pagination-ellipsis">...</span>
          ) : (
            <button
              key={`page-${page}`}
              className={`pagination-page ${current === page ? 'active' : ''}`}
              onClick={() => onChange(page)}
            >
              {page}
            </button>
          )
        ))}
      </div>
      
      <button 
        className="pagination-button" 
        onClick={handleNext}
        disabled={current === totalPages}
      >
        <span>Next</span>
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default PaginationComponent;