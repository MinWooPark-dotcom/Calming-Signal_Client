import { createAction, handleActions } from 'redux-actions'

const GET_BOARD_DATA = 'boardPostedTemplate/GET_BOARD_DATA'

export const getBoardData = createAction(GET_BOARD_DATA)

const initialState = {
    freeBulletinBoard: null
}

const boardPostedTemplate = handleActions(
    {
        [GET_BOARD_DATA]: (state, { payload: freeBulletinBoard }) => ({...state, freeBulletinBoard})
    },
    initialState
)

export default boardPostedTemplate;