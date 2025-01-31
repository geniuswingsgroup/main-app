import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import { course_page } from "../../Redux/Actions/Course-action";

const PaginationComponent = () => {
  const dispatch = useDispatch();
  const totalPage = useSelector((state) =>
    state.course.searchPerformed
      ? state.course.total_pages_search
      : state.course.total_pages
  );

  const keyWord_search_value = useSelector(
    (state) => state.course.keyWord_search_value
  );
  const gte_filter_value = useSelector(
    (state) => state.course.gte_filter_value
  );
  const lte_filter_value = useSelector(
    (state) => state.course.lte_filter_value
  );

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, page) => {
    dispatch(
      course_page(
        page,
        keyWord_search_value,
        gte_filter_value,
        lte_filter_value
      )
    );
    setCurrentPage(page);
  };

  return (
    <Pagination
      variant="outlined"
      count={totalPage}
      page={currentPage}
      onChange={handlePageChange}
      style={{ color: "#ffb923" }}
        sx={{
    '& .MuiPaginationItem-root': {
      color: 'white',  // Set text color to white
    },
    '& .MuiPaginationItem-ellipsis': {
      color: 'white',  // Set color of ellipsis to white (if present)
    },
  }}
    />
  );
};

export default PaginationComponent;
