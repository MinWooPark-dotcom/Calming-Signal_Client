import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBoardData, getBoardCategory } from '../modules/boardPostedTemplate'
import FreeBulletinBoard from '../components/board/FreeBulletinBoard'
import { getTitle, getContent, getCategory, getNumOfViews, getCreatedAt, getUserName, getComment } from '../modules/content';

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

    const getContentTitle = useCallback((title) => dispatch(getTitle(title), [dispatch]));
    const getContentBody = useCallback((body) => dispatch(getContent(body), [dispatch]));
    const getContentCategory = useCallback((category) => dispatch(getCategory(category), [dispatch]));
    const getContentNumOfViews = useCallback((num) => dispatch(getNumOfViews(num), [dispatch]));
    const getContentCreatedAt = useCallback((date) => dispatch(getCreatedAt(date), [dispatch]));
    const getContentUserName = useCallback((name) => dispatch(getUserName(name), [dispatch]));
    const getContentComment = useCallback((comment) => dispatch(getComment(comment), [dispatch]));

    return (
        <FreeBulletinBoard  
            category={category}
            query={query}
            boardData={boardData}
            getBoardPostedData={getBoardPostedData}
            nowCategory={nowCategory}
            getContentTitle={getContentTitle}
            getContentBody={getContentBody}
            getContentCategory={getContentCategory}
            getContentNumOfViews={getContentNumOfViews}
            getContentCreatedAt={getContentCreatedAt}
            getContentUserName={getContentUserName}
            getContentComment={getContentComment}
        />
    );
};

export default FreeBulletinBoardContainer;