import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Content from '../components/board/Content';
import { getPostId, getTitle, getContent, getCategory, getNumOfViews, getCreatedAt, getUserName, getComment } from '../modules/content';

const ContentContainer = () => {
    const postId = useSelector(state => state.content.postId)
    const contentTitle = useSelector(state => state.content.contentTitle);
    const contentBody = useSelector(state => state.content.contentBody);
    const contentCategory = useSelector(state => state.content.contentCategory);
    const contentNumOfViews = useSelector(state => state.content.contentNumOfViews);
    const contentCreatedAt = useSelector(state => state.content.contentCreatedAt);
    const contentUserName = useSelector(state => state.content.contentUserName);
    const contentComment = useSelector(state => state.content.contentComment);
    const dispatch = useDispatch()
    const getContentComment = useCallback((comment) => dispatch(getComment(comment), [dispatch]));
    const isLoggedIn = useSelector(state => state.signIn.isLoggedIn)
    // const email = useSelector(state => state.signIn.email);
    const userName = useSelector(state => state.signIn.userName);

    return (
        <Content 
            postId={postId}
            contentTitle={contentTitle}
            contentBody={contentBody}
            contentCategory={contentCategory}
            contentNumOfViews={contentNumOfViews}
            contentCreatedAt={contentCreatedAt}
            contentUserName={contentUserName}
            contentComment={contentComment}
            getContentComment={getContentComment}
            isLoggedIn={isLoggedIn}
            userName={userName}
        />
    );
};

export default ContentContainer;