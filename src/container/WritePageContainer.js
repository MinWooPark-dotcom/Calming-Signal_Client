import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WritePage from '../components/write/WirtePage';

const WritePageContainer = () => {
  const isLoggedIn = useSelector((state) => state.signIn.isLoggedIn);

  return <WritePage isLoggedIn={isLoggedIn} />;
};

export default React.memo(WritePageContainer);
