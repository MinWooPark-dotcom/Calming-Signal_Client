import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Happy from '../components/calming-signal pages/Happy'

const HappyContainer = () => {
    const isToggled = useSelector(state => state.landing.isToggled)
    return (
        <Happy 
            isToggled={isToggled}
        />
    );
};

export default HappyContainer;