import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Landing from '../components/Landing'
import {goHome, clickRight, clickLeft, clickToggle, setFirst, setLast} from '../modules/landing'

const LandingContainer = () => {
    const number = useSelector(state => state.landing.number);
    const isToggled = useSelector(state => state.landing.isToggled)
    const dispatch = useDispatch()
    const clickGoHome = useCallback(() => dispatch(goHome()), [dispatch])
    const clickHamburger = useCallback(() => dispatch(clickToggle()), [dispatch])
    const clickRightBtn = useCallback(() => dispatch(clickRight()), [dispatch])
    const clickLeftBtn = useCallback(() => dispatch(clickLeft()), [dispatch])
    const setFirstNum = useCallback(() => dispatch(setFirst()), [dispatch])
    const setLastNum = useCallback(() => dispatch(setLast()), [dispatch])
    
    return (
        <Landing 
            number={number} 
            isToggled={isToggled} 
            clickGoHome={clickGoHome}
            clickHamburger={clickHamburger}
            clickRightBtn={clickRightBtn}
            clickLeftBtn={clickLeftBtn}
            setFirstNum={setFirstNum}
            setLastNum={setLastNum}
        />
    );
};

export default React.memo(LandingContainer);