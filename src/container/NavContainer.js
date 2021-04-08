import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../components/Nav'
import {goHome, clickToggle, setFirst} from '../modules/landing'
import { setEmail, setUserName, changeLoggedInState } from '../modules/signIn'

const NavContainer = () => {
    const isLoggedIn = useSelector(state => state.signIn.isLoggedIn)
    const dispatch = useDispatch()
    const clickGoHome = useCallback(() => dispatch(goHome()), [dispatch])
    const clickHamburger = useCallback(() => dispatch(clickToggle()), [dispatch])
    const setFirstNum = useCallback(() => dispatch(setFirst()), [dispatch])
    const handleLogIn = useCallback(() => dispatch(changeLoggedInState()), [dispatch])
    const setEmailValue = useCallback((email) => dispatch(setEmail(email)), [dispatch]);
    const setUserNameValue = useCallback((userName) => dispatch(setUserName(userName)), [dispatch]);
    
    return (
        <Nav 
            isLoggedIn={isLoggedIn}
            clickGoHome={clickGoHome}
            clickHamburger={clickHamburger}
            setFirstNum={setFirstNum}
            handleLogIn={handleLogIn}
            setEmailValue={setEmailValue}
            setUserNameValue={setUserNameValue}
        />
    );
};

export default React.memo(NavContainer);