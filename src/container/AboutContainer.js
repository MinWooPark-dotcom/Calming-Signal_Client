import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import About from '../components/About'

const AboutContainer = () => {
    const isToggled = useSelector(state => state.landing.isToggled)
    return (
       <About 
        isToggled={isToggled}
       />
    );
};

export default AboutContainer;