import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Nervous from '../components/calming-signal pages/nervous/Nervous'

const NervousContainer = () => {
    const isToggled = useSelector(state => state.landing.isToggled)
    return (
        <Nervous 
            isToggled={isToggled}
        />
    );
};

export default NervousContainer;