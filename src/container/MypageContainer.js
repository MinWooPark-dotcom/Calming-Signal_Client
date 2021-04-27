import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mypage from '../components/Mypage';
import {
  clickSignInBtn,
  setEmail,
  setUserName,
  setPassword,
  setEmailError,
  setPasswordError,
  setSignInError,
  eraseEmailError,
  erasePasswordError,
  eraseSignInError,
  changeLoggedInState,
  setPetName,
  setPetBreed,
  setLocation,
} from '../modules/signIn';

const MypageContainer = () => {
  const email = useSelector((state) => state.signIn.email);
  const password = useSelector((state) => state.signIn.password);
  const userName = useSelector((state) => state.signIn.userName);
  const isLoggedIn = useSelector((state) => state.signIn.isLoggedIn);
  const petName = useSelector((state) => state.signIn.petName);
  const petBreed = useSelector((state) => state.signIn.petBreed);
  const locationName = useSelector((state) => state.signIn.locationName);

  const dispatch = useDispatch();
  const handleLogIn = useCallback(() => dispatch(changeLoggedInState()), [
    dispatch,
  ]);
  const setEmailValue = useCallback((email) => dispatch(setEmail(email)), [
    dispatch,
  ]);
  const setPasswordValue = useCallback(
    (password) => dispatch(setPassword(password)),
    [dispatch]
  );
  const setUserNameValue = useCallback(
    (userName) => dispatch(setUserName(userName)),
    [dispatch]
  );
  const setPetNameValue = useCallback(
    (petName) => dispatch(setPetName(petName)),
    [dispatch]
  );
  const setPetBreedValue = useCallback(
    (petBreed) => dispatch(setPetBreed(petBreed)),
    [dispatch]
  );
  const setLocationValue = useCallback(
    (locationName) => dispatch(setLocation(locationName)),
    [dispatch]
  );

  return (
    <Mypage
      email={email}
      password={password}
      userName={userName}
      isLoggedIn={isLoggedIn}
      handleLogIn={handleLogIn}
      setEmailValue={setEmailValue}
      setPasswordValue={setPasswordValue}
      setUserNameValue={setUserNameValue}
      petName={petName}
      petBreed={petBreed}
      setPetNameValue={setPetNameValue}
      setPetBreedValue={setPetBreedValue}
      locationName={locationName}
      setLocationValue={setLocationValue}
    />
  );
};

export default MypageContainer;
