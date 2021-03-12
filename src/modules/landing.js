import { createAction, handleActions } from 'redux-actions'

// action
const CLICK_RIGHT = 'landing/CLICK_RIGHT'
const CLICK_LEFT = 'landing/CLICK_LEFT'
const CLICK_TOGGLE = 'landing/CLICK_TOGGLE'
const SET_FIRST = 'landing/SET_FIRST'
const SET_LAST = 'landing/SET_LAST'

// action creator
export const clickRight = createAction(CLICK_RIGHT)
export const clickLeft = createAction(CLICK_LEFT)
export const clickToggle = createAction(CLICK_TOGGLE)
export const setFirst = createAction(SET_FIRST)
export const setLast = createAction(SET_LAST)

const initialState = {
    number: 1,
    isToggled: false
}

// reducer
const landing = handleActions(
    {
        [CLICK_RIGHT]: (state, action) => ({ ...state, number: state.number + 1}),
        [CLICK_LEFT]: (state, action) => ({...state,  number: state.number - 1}),
        [CLICK_TOGGLE]: (state, action) => ({...state, isToggled: !state.isToggled}),
        [SET_FIRST]: (state, action) => ({...state, number: 1}),
        [SET_LAST]: (state, action) => ({...state, number: 4})
    },
    initialState
)

export default landing;