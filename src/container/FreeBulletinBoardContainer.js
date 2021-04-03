import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBoardData } from '../modules/boardPostedTemplate'
import FreeBulletinBoard from '../components/board/FreeBulletinBoard'

const FreeBulletinBoardContainer = () => {
    const boardData = useSelector(state => state.boardPostedTemplate.freeBulletinBoard)
    const dispatch = useDispatch()
    const getBoardPostedData = useCallback((data) => dispatch(getBoardData(data)), [dispatch])

    return (
        <FreeBulletinBoard  
            boardData={boardData}
            getBoardPostedData={getBoardPostedData}
        />
    );
};

export default FreeBulletinBoardContainer;