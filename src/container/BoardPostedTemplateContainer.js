import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BoardPostedTemplate from '../components/board/BoardPostedTemplate';
import { getBoardData } from '../modules/boardPostedTemplate';

const BoardPostedTemplateContainer = () => {
  const boardData = useSelector(
    (state) => state.boardPostedTemplate.freeBulletinBoard
  );
  const dispatch = useDispatch();
  const getBoardPostedData = useCallback(
    (data) => dispatch(getBoardData(data)),
    [dispatch]
  );

  return (
    <BoardPostedTemplate
      boardData={boardData}
      getBoardPostedData={getBoardPostedData}
    />
  );
};

export default React.memo(BoardPostedTemplateContainer);
