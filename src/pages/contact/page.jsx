import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import { course_page } from '../../Redux/Actions/Course-action';
import { contacts_get } from '../../Redux/Actions/contact-us-action';

const PaginationComponent = () => {
  const dispatch = useDispatch();
  const totalPage = useSelector(state =>
    state.contact.total_pages
  ); 
 
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, page) => {
    dispatch(contacts_get(page));
    setCurrentPage(page);
  };

  return (
    <Pagination
      variant="outlined"
      count={totalPage}
      page={currentPage}
      onChange={handlePageChange}
      style={{ color: '#ffb923' }}
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
