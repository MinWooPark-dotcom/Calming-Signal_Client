import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../components/Nav'
import {clickToggle} from '../modules/landing'

const NavContainer = () => {
    const isToggled = useSelector(state => state.landing.isToggled)
    const dispatch = useDispatch()
    const clickHamburger = useCallback(() => dispatch(clickToggle()), [dispatch])
    return (
        <Nav 
            isToggeld={isToggled}
            clickHamburger={clickHamburger}
        />
    );
};

export default React.memo(NavContainer);