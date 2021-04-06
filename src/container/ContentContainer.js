import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Content from '../components/board/Content';
import { getTitle, getContent, getCategory, getNumOfViews, getCreatedAt, getUserName } from '../modules/content';

const ContentContainer = () => {
    const contentTitle = useSelector(state => state.content.contentTitle);
    const contentBody = useSelector(state => state.content.contentBody);
    const contentCategory = useSelector(state => state.content.contentCategory);
    const contentNumOfViews = useSelector(state => state.content.contentNumOfViews);
    const contentCreatedAt = useSelector(state => state.content.contentCreatedAt);
    const contentUserName = useSelector(state => state.content.contentUserName);
    const contentComment = useSelector(state => state.content.contentComment);
    
    return (
        <Content 
            contentTitle={contentTitle}
            contentBody={contentBody}
            contentCategory={contentCategory}
            contentNumOfViews={contentNumOfViews}
            contentCreatedAt={contentCreatedAt}
            contentUserName={contentUserName}
            contentComment={contentComment}
        />
    );
};

export default ContentContainer;