/* eslint react/prop-types: 0 */

import React from 'react';
import { Link, withRouter } from "react-router-dom";
import EditorContainer from '../../container/EditorContainer';
import NavContainer from '../../container/NavContainer';
import BoardSidebar from '../BoardSidebar';
import Editor from '../write/Editor';
import TagBox from '../write/TagBox';
import WriteActionButtons from '../write/WriteActionButtons';

const WirtePage = ({isLoggedIn, history}) => {

    return (
        <div>
            <NavContainer />
            {isLoggedIn?(
                <EditorContainer />
            ):(
              history.goBack()
            )}
        </div>
    );
};

export default withRouter(WirtePage);