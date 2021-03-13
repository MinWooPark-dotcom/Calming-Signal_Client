import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Hamburger from '../components/Hamburger'
import {goHome, clickToggle,} from '../modules/landing'

const HamburgerContainer = () => {
    const isToggled = useSelector(state => state.landing.isToggled)
    const dispatch = useDispatch()
    const clickGoHome = useCallback(() => dispatch(goHome()), [dispatch])
    const clickHamburger = useCallback(() => dispatch(clickToggle()), [dispatch])
    return (
        <Hamburger 
            isToggled={isToggled}
            clickGoHome={clickGoHome}
            clickHamburger={clickHamburger}
        />
    );
};

export default HamburgerContainer;