import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Wag from '../components/calming-signal pages/happy/Wag'

const WagContainer = () => {
    const isToggled = useSelector(state => state.landing.isToggled)
    return (
       <Wag 
        isToggled={isToggled}
       />
    );
};

export default WagContainer;