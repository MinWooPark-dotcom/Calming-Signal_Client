/* eslint react/prop-types: 0 */

import React from 'react';
import HamburgerContainer from '../../../container/HamburgerContainer';
import NavContainer from '../../../container/NavContainer';
import Sidebar from '../../Sidebar';
import './Settle.css'

const Settle = ({isToggled}) => {
    return (
        <div>
            {isToggled? (<HamburgerContainer />):(<div>
            <NavContainer/>
            <Sidebar/>
            <div className="comfortable_container">
                {/* <div className="comfortable_img_div">
                    <img className="comfortable_img" src={img} alt="comfortable dog"></img>
                </div>     */}
                <div className="comfortable_text">
                    <div className="comfortable_text_first">
                    반려견이 진정시키는 시그널을 알아보고 <br/> 차분한 마음을 갖도록 노력해 보세요.
                    </div>
                    <div className="comfortable_text_second">
                    보호자가 혼을 낼 때 하품을 하는 강아지들이 있어요.
                    </div>
                    <div className="comfortable_text_third">
                    이것은 보호자에게 진정하라는 의미에요.
                    </div>
                    <div className="comfortable_text_forth">
                    언성을 높이지 말고 차분한 마음을 가져보세요.
                    </div>
                    <div className="comfortable_text_fifth">
                    사람 또는 강아지 사이로 끼어드는 일도 있는데요,
                    </div>
                    <div className="comfortable_text_sixth">
                    이는 사람이 붙어 있으면 싸운다고 생각하여 중재하는 것이기도 합니다.
                    </div>
                </div>
            </div>   
            </div>)}
        </div>
    );
};

export default Settle;