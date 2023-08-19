import ReactPaginate from 'react-paginate';
import { connect, useDispatch } from 'react-redux';
import { SET_ACTIVE_PAGE } from './MainListPage.actions';
import { useEffect } from 'react';

const Pagination = ({totalPages}:any) => {
    const dispatch = useDispatch();
    
    const handlePageClick = (e: any) => {
        console.log(e.selected+1)
        dispatch({type:SET_ACTIVE_PAGE,value:e.selected+1});
    }

    useEffect(()=>{

    },[totalPages])

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={totalPages}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
        />
    )
}

const mapStateToProps = (state: any) => ({
    totalPages:state.moviesListReducer.totalPages
  })

export default  connect(mapStateToProps)(Pagination);