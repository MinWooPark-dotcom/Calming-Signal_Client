import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBoardData, getBoardCategory } from '../modules/boardPostedTemplate'
import FreeBulletinBoard from '../components/board/FreeBulletinBoard'

const FreeBulletinBoardContainer = ({match, location}) => {
    const category = match.params.category
    let query;
    
    if(location.search.length > 0){
         query = location.search.split('?')[1].split('=')[1]
    }

    const boardData = useSelector(state => state.boardPostedTemplate.freeBulletinBoard)
    const dispatch = useDispatch()
    const getBoardPostedData = useCallback((data) => dispatch(getBoardData(data)), [dispatch])
    const nowCategory = useCallback((category) => dispatch(getBoardCategory(category), [dispatch]))

    return (
        <FreeBulletinBoard  
            category={category}
            query={query}
            boardData={boardData}
            getBoardPostedData={getBoardPostedData}
            nowCategory={nowCategory}
        />
    );
};

export default FreeBulletinBoardContainer;