import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../components/Nav';
import { setEmail, setUserName, changeLoggedInState } from '../modules/signIn';

const NavContainer = () => {
  const isLoggedIn = useSelector((state) => state.signIn.isLoggedIn);
  const dispatch = useDispatch();
  const setEmailValue = useCallback((email) => dispatch(setEmail(email)), [
    dispatch,
  ]);
  const setUserNameValue = useCallback(
    (userName) => dispatch(setUserName(userName)),
    [dispatch]
  );
  const changeLoggedInStateAction = useCallback(
    () => dispatch(changeLoggedInState()),
    [dispatch]
  );

  return (
    <Nav
      isLoggedIn={isLoggedIn}
      setEmailValue={setEmailValue}
      setUserNameValue={setUserNameValue}
      changeLoggedInStateAction={changeLoggedInStateAction}
    />
  );
};

export default React.memo(NavContainer);
