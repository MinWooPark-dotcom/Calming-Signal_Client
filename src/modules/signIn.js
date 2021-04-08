import { createAction, handleActions } from 'redux-actions';

const CLICK_SIGN_IN_BTN = 'signIn/CLICK_SIGN_IN_BTN';
const SET_EMAIL = 'signIn/SET_EMAIL';
const SET_USER_NAME = 'signIn/SET_USER_NAME';
const SET_PASSWORD = 'signIn/SET_PASSWORD';
const SET_EMAIL_ERROR = 'signIn/SET_EMAIL_ERROR';
const SET__PASSWORD_ERROR = 'signIn/SET_PASSWORD_ERROR';
const SET_SIGN_IN_ERROR = 'signIN/SET_SIGN_IN_ERROR'
const ERASE_EMAIL_ERROR = 'signIn/ERASE_EMAIL_ERROR';
const ERASE_PASSWORD_ERROR = 'signIn/ERASEPASSWORD_ERROR';
const ERASE_SIGN_IN_ERROR = 'signIN/ERASE_SIGN_IN_ERROR';
const CHANGE_LOGGED_IN_STATE = 'signIn/CHANGE_LOGGED_IN_STATE';
const SET_PET_NAME = 'signIn/SET_PET_NAME';
const SET_PET_BREED= 'signIn/SET_PET_BREED';

export const clickSignInBtn = createAction(CLICK_SIGN_IN_BTN);

export const setEmail = createAction(SET_EMAIL, email => email);
export const setUserName = createAction(SET_USER_NAME, userName => userName);
export const setPassword = createAction(SET_PASSWORD, password => password);

export const setEmailError = createAction(SET_EMAIL_ERROR, emailErrorMsg => emailErrorMsg);
export const setPasswordError = createAction(SET__PASSWORD_ERROR, passwordErrorMsg => passwordErrorMsg);
export const setSignInError = createAction(SET_SIGN_IN_ERROR, signInErrorMsg => signInErrorMsg)

export const eraseEmailError = createAction(ERASE_EMAIL_ERROR);
export const erasePasswordError = createAction(ERASE_PASSWORD_ERROR);
export const eraseSignInError = createAction(ERASE_SIGN_IN_ERROR)

export const changeLoggedInState = createAction(CHANGE_LOGGED_IN_STATE)

export const setPetName = createAction(SET_PET_NAME);
export const setPetBreed = createAction(SET_PET_BREED);

const initialState = {
    isClickedSignInBtn: false,
    email: null,
    userName: null,
    password: null,
    emailErrorMsg: '올바른 이메일 형식이 아닙니다',
    passwordErrorMsg: '8~15자리 사이로 입력해야 합니다',
    signInErrorMsg: '아이디 또는 비밀번호를 확인해 주세요',
    isLoggedIn: false,
    petName: null,
    petBreed: null
}

const signIn = handleActions(
    {
        [CLICK_SIGN_IN_BTN]: (state, action) => ({...state, isClickedSignInBtn: true}),
        [SET_EMAIL]: (state, { payload: email}) => ({...state, email}),
        [SET_USER_NAME]: (state, {payload: userName}) => ({...state, userName}),
        [SET_PASSWORD]: (state, {payload: password}) => ({...state, password}),
        [SET_EMAIL_ERROR]: (state, {payload: emailErrorMsg}) => ({...state, emailErrorMsg }),
        [SET__PASSWORD_ERROR]: (state, {payload: passwordErrorMsg}) => ({...state, passwordErrorMsg }),
        [SET_SIGN_IN_ERROR]: (state, {payload: signInErrorMsg}) => ({...state, signInErrorMsg }),
        [ERASE_EMAIL_ERROR]: (state, action) => ({...state, emailErrorMsg: null }),
        [ERASE_PASSWORD_ERROR]: (state, action) => ({...state, passwordErrorMsg: null }),
        [ERASE_SIGN_IN_ERROR]: (state, action) => ({...state, signInErrorMsg: null }),
        [CHANGE_LOGGED_IN_STATE]: (state, action) => ({ ...state, isLoggedIn: !state.isLoggedIn}),
        [SET_PET_NAME]: (state,{ payload: petName}) => ({...state, petName}),
        [SET_PET_BREED]: (state, { payload: petBreed}) => ({ ...state, petBreed})
    },
    initialState
)

export default signIn;