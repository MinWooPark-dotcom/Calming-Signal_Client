/* eslint react/prop-types: 0 */

import React from 'react';
import { Link, withRouter } from "react-router-dom";
import EditorContainer from '../../container/EditorContainer';
import BoardSidebar from '../BoardSidebar';
import Editor from '../write/Editor';
import TagBox from '../write/TagBox';
import WriteActionButtons from '../write/WriteActionButtons';

const WirtePage = ({history}) => {

    return (
        <div>
            {/* <div>dd</div> */}
            <EditorContainer />
            {/* <TagBox /> */}
            {/* <WriteActionButtons /> */}
        </div>
    );
};

export default WirtePage;