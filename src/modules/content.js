import { createAction, handleActions } from 'redux-actions';

const GET_POST_ID = 'content/GET_POST_ID'
const GET_TITLE = 'content/GET_TITLE';
const GET_CONTENT = 'content/GET_CONTENT';
const GET_CATEGORY = 'content/GET_CATEGORY';
const GET_NUMOFVIEWS = 'content/GET_NUMOFVIEWS';
const GET_CREATEDAT = 'content/GET_CREATEDAT';
const GET_USERNAME = 'content/GET_USERNAME';
const GET_COMMENT = 'content/GET_COMMENT';

export const getPostId = createAction(GET_POST_ID)
export const getTitle = createAction(GET_TITLE);
export const getContent = createAction(GET_CONTENT);
export const getCategory = createAction(GET_CATEGORY)
export const getNumOfViews = createAction(GET_NUMOFVIEWS);
export const getCreatedAt = createAction(GET_CREATEDAT);
export const getUserName = createAction(GET_USERNAME);
export const getComment = createAction(GET_COMMENT);

const initialState = {
    postId: null,
    contentTitle: null,
    contentBody: null,
    contentCategory: null,
    contentNumOfViews: null,
    contentCreatedAt: null,
    contentUserName: null,
    contentComment: null,
}

const content = handleActions(
    {
        // [GET_BOARD_DATA]: (state, { payload: freeBulletinBoard }) => ({...state, freeBulletinBoard}),
        [GET_POST_ID]: (state, {payload: postId}) => ({ ... state, postId}),
        [GET_TITLE]: (state, {payload: contentTitle}) => ({ ...state, contentTitle}),
        [GET_CONTENT]: (state, {payload: contentBody }) => ({ ...state, contentBody}),
        [GET_CATEGORY]: (state, {payload: contentCategory}) => ({ ...state, contentCategory}),
        [GET_NUMOFVIEWS]: (state, {payload: contentNumOfViews}) => ({ ...state, contentNumOfViews}),
        [GET_CREATEDAT]: (state, {payload: contentCreatedAt}) => ({ ...state, contentCreatedAt}),        
        [GET_USERNAME]: (state, {payload: contentUserName}) => ({ ...state, contentUserName}),
        [GET_COMMENT]: (state, {payload: contentComment}) => ({ ...state, contentComment })
    },
    initialState
)

export default content;