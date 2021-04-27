import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBoardData, getBoardCategory } from '../modules/boardPostedTemplate';
import Board from '../components/board/Board';
import {
  getPostId,
  getTitle,
  getContent,
  getCategory,
  getNumOfViews,
  getCreatedAt,
  getUserName,
  getComment,
} from '../modules/content';

const BoardContainer = ({ match, location }) => {
  const category = match.params.category;
  let query;

  if (location.search.length > 0) {
    query = location.search.split('?')[1].split('=')[1];
  }

  const isLoggedIn = useSelector((state) => state.signIn.isLoggedIn);
  // const boardData = useSelector(
  //   (state) => state.boardPostedTemplate.freeBulletinBoard
  // );
  const postId = useSelector((state) => state.content.postId);
  const dispatch = useDispatch();
  const getBoardPostedData = useCallback(
    (data) => dispatch(getBoardData(data)),
    [dispatch]
  );
  const nowCategory = useCallback((category) =>
    dispatch(getBoardCategory(category), [dispatch])
  );

  const getContentPostId = useCallback((postId) =>
    dispatch(getPostId(postId), [dispatch])
  );
  const getContentTitle = useCallback((title) =>
    dispatch(getTitle(title), [dispatch])
  );
  const getContentBody = useCallback((body) =>
    dispatch(getContent(body), [dispatch])
  );
  const getContentCategory = useCallback((category) =>
    dispatch(getCategory(category), [dispatch])
  );
  const getContentNumOfViews = useCallback((num) =>
    dispatch(getNumOfViews(num), [dispatch])
  );
  const getContentCreatedAt = useCallback((date) =>
    dispatch(getCreatedAt(date), [dispatch])
  );
  const getContentUserName = useCallback((name) =>
    dispatch(getUserName(name), [dispatch])
  );
  const getContentComment = useCallback((comment) =>
    dispatch(getComment(comment), [dispatch])
  );

  return (
    <Board
      isLoggedIn={isLoggedIn}
      postId={postId}
      category={category}
      query={query}
      // boardData={boardData}
      getContentPostId={getContentPostId}
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

export default BoardContainer;
