import React, {useCallback}  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CalmingSignal from '../components/calming-signal pages/CalmingSignal'

const CalmingSignalContainer = () => {
    const isToggled = useSelector(state => state.landing.isToggled)
    return (
        <CalmingSignal 
            isToggled={isToggled}
        />
    );
};

export default CalmingSignalContainer;