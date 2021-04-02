import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Comfortable from '../components/calming-signal pages/comfortable/Comfortable'

const HappyContainer = () => {
    const isToggled = useSelector(state => state.landing.isToggled)
    return (
        <Comfortable 
            isToggled={isToggled}
        />
    );
};

export default HappyContainer;