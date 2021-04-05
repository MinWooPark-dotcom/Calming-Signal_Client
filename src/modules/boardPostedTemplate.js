import { createAction, handleActions } from 'redux-actions'

const GET_BOARD_DATA = 'boardPostedTemplate/GET_BOARD_DATA'
const GET_BOARD_CATEGORY ='boardPostedTemplate/GET_BOARD_CATEGORY'

export const getBoardData = createAction(GET_BOARD_DATA)
export const getBoardCategory = createAction(GET_BOARD_CATEGORY)

const initialState = {
    freeBulletinBoard: null,
    nowCategory: null
}

const boardPostedTemplate = handleActions(
    {
        [GET_BOARD_DATA]: (state, { payload: freeBulletinBoard }) => ({...state, freeBulletinBoard}),
        [GET_BOARD_CATEGORY]: (state, { payload: nowCategory }) => ({ ...state, nowCategory})
    },
    initialState
)

export default boardPostedTemplate;