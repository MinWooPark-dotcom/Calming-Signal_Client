import React, {useCallback} from 'react';
// import qs from 'qs'
import { useSelector, useDispatch } from 'react-redux';
import { getBoardData } from '../modules/boardPostedTemplate'
import FreeBulletinBoard from '../components/board/FreeBulletinBoard'

const FreeBulletinBoardContainer = ({match, location}) => {
    // console.log("🚀 ~ file: FreeBulletinBoardContainer.js ~ line 7 ~ FreeBulletinBoardContainer ~ match", match.params.category)
    console.log("🚀 ~ file: FreeBulletinBoardContainer.js ~ line 7 ~ FreeBulletinBoardContainer ~ location", location)
    // const query = qs.parse(location.serch, {
        // ignoreQueryPrefix: true
    // });
    const category = match.params.category
    let query;
    if(location.search.length > 0){
         query = location.search.split('?')[1].split('=')[1]
    }
    // console.log("🚀 ~ file: FreeBulletinBoardContainer.js ~ line 14 ~ FreeBulletinBoardContainer ~ query", Number(query))

    const boardData = useSelector(state => state.boardPostedTemplate.freeBulletinBoard)
    const dispatch = useDispatch()
    const getBoardPostedData = useCallback((data) => dispatch(getBoardData(data)), [dispatch])

    return (
        <FreeBulletinBoard  
            category={category}
            query={query}
            boardData={boardData}
            getBoardPostedData={getBoardPostedData}
        />
    );
};

export default FreeBulletinBoardContainer;