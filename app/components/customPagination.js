import React from "react";

const CustomPagination = ({
  totalTrips,
  tripPerPage,
  setCurrentPage,
  currentPage,
  changeCPage,
  nextPage,
  prePage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalTrips / tripPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex bg-white rounded-lg justify-center py-4 absolute bottom-0 left-[40%]">
      <nav
        aria-label="Page navigation example"
        className="flex justify-center "
      >
        <ul className="flex items-center -space-x-px h-8 text-sm">
          <li>
            <a
              href="#"
              onClick={prePage}
              className=" flex items-center  justify-center px-3 h-8 ms-0 leading-tight text-[#7FBAFF] bg-white rounded-s-lg  hover:text-gray-700  dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </a>
          </li>
          {pages.map((page, index) => {
            return (
              <>
                <li key={index}>
                  <a
                    href="#"
                    onClick={() => setCurrentPage(page)}
                    className={
                      "flex items-center justify-center mr-5 px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    }
                    style={{
                      background: page === currentPage ? "#2F8EFF" : "none",
                      color: page === currentPage ? "white" : "#7FBAFF",
                      borderRadius: page === currentPage ? "25px" : "none",
                    }}
                  >
                    {page}
                  </a>
                </li>
              </>
            );
          })}

          <li>
            <a
              href="#"
              onClick={nextPage}
              className=" flex items-center  justify-center px-3 h-8 ms-0 leading-tight text-[#7FBAFF] bg-white rounded-s-lg  hover:text-gray-700  dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CustomPagination;
