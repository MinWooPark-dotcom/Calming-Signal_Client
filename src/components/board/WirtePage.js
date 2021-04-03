import React from 'react';
import { Link, withRouter } from "react-router-dom";
import BoardSidebar from '../BoardSidebar';
import Editor from '../write/Editor';
import TagBox from '../write/TagBox';
import WriteActionButtons from '../write/WriteActionButtons';

const WirtePage = ({history}) => {

    return (
        <div>
            {/* <div>dd</div> */}
            <Editor />
            {/* <TagBox /> */}
            <WriteActionButtons />
        </div>
    );
};

export default WirtePage;