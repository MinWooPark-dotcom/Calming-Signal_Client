import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Settle from '../components/calming-signal pages/settle/Settle'

const SettleContainer = () => {
    const isToggled = useSelector(state => state.landing.isToggled)
    return (
        <Settle 
            isToggled={isToggled}
        />
    );
};

export default SettleContainer;