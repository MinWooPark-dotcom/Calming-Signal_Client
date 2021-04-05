import { createAction, handleActions } from 'redux-actions';

const GET_TITLE = 'content/GET_TITLE';
const GET_CONTENT = 'content/GET_CONTENT';
const GET_CATEGORY = 'content/GET_CATEGORY';
const GET_NUMOFVIEWS = 'content/GET_NUMOFVIEWS';
const GET_CREATEDAT = 'content/GET_CREATEDAT';
const GET_USERNAME = 'content/GET_USERNAME';

export const getTitle = createAction(GET_TITLE);
export const getContent = createAction(GET_CONTENT);
export const getCategory = createAction(GET_CATEGORY)
export const getNumOfViews = createAction(GET_NUMOFVIEWS);
export const getCreatedAt = createAction(GET_CREATEDAT);
export const getUserName = createAction(GET_USERNAME);

const initialState = {
    contentTitle: null,
    contentBody: null,
    contentCategory: null,
    contentNumOfViews: null,
    contentCreatedAt: null,
    contentUserName: null
}

const content = handleActions(
    {
        // [GET_BOARD_DATA]: (state, { payload: freeBulletinBoard }) => ({...state, freeBulletinBoard}),
        [GET_TITLE]: (state, {payload: contentTitle}) => ({ ...state, contentTitle}),
        [GET_CONTENT]: (state, {payload: contentBody }) => ({ ...state, contentBody}),
        [GET_CATEGORY]: (state, {payload: contentCategory}) => ({ ...state, contentCategory}),
        [GET_NUMOFVIEWS]: (state, {payload: contentNumOfViews}) => ({ ...state, contentNumOfViews}),
        [GET_CREATEDAT]: (state, {payload: contentCreatedAt}) => ({ ...state, contentCreatedAt}),        
        [GET_USERNAME]: (state, {payload: contentUserName}) => ({ ...state, contentUserName})
    },
    initialState
)

export default content;