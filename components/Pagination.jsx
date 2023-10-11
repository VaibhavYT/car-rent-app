"use client"
import React, { useState } from 'react';
import CarCard from "@/components/CarCard";
import carData from "../lib/model/car_details"; 

const ITEMS_PER_PAGE = 6;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(carData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentCards = carData.slice(startIndex, endIndex);

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div>
      <div className="flex h-fit  items-center  pl-52  pr-52 pt-16 pb-10">
     <div className="flex flex-wrap justify-center ">
     {currentCards.map((car, index) => (
          <CarCard key={index} carDetails={car} />
        ))}
     </div>
      </div>
      <div className=" flex justify-center items-center pb-10">
        <button
          onClick={handlePrevClick}
          disabled={currentPage === 1}
        >
          &lt; Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextClick}
          disabled={currentPage === totalPages}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
