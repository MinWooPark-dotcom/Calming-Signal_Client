import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Hamburger from '../components/Hamburger'
import {goHome, clickToggle,} from '../modules/landing'
import {changeLoggedInState} from '../modules/signIn'

const HamburgerContainer = () => {
    const isToggled = useSelector(state => state.landing.isToggled)
    const isLoggedIn = useSelector(state => state.signIn.isLoggedIn)

    const dispatch = useDispatch()
    const clickGoHome = useCallback(() => dispatch(goHome()), [dispatch])
    const clickHamburger = useCallback(() => dispatch(clickToggle()), [dispatch])
    const changeLoggedIn = useCallback(() => dispatch(changeLoggedInState()), [dispatch])

    return (
        <Hamburger 
            isToggled={isToggled}
            isLoggedIn={isLoggedIn}
            clickGoHome={clickGoHome}
            clickHamburger={clickHamburger}
            changeLoggedIn={changeLoggedIn}
        />
    );
};

export default HamburgerContainer;