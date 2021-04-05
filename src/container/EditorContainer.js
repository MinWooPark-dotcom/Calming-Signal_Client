import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBoardCategory } from '../modules/boardPostedTemplate'
import Editor from '../components/write/Editor';

const EditorContainer = () => {
    const nowCategory = useSelector(state => state.boardPostedTemplate.nowCategory)
    const dispatch = useDispatch()
    const getNowCategory = useCallback((category) => dispatch(getBoardCategory(category), [dispatch]))


    return (
        <Editor 
            nowCategory={nowCategory}
            getNowCategory={getNowCategory}
        />
    );
};

export default EditorContainer;