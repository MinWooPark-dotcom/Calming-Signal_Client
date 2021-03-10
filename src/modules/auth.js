import { createAction, handleActions } from 'redux-actions';
import produce from 'immer'

// action
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIIZE_FORM = 'auth/INITIALIZE_FORM'

// action creator
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register, login
    key, // username, password, passwordConfirm
    value, // 실제 바꾸려는 값
  })
  );

export const initializeForm = createAction(INITIALIIZE_FORM, form => form); // register / login

// initial state
const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: ''
  },
  login: {
    username: '',
    password: ''
  }
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => 
    produce(state, draft => {
      draft[form][key] = value; // 예: state.register.username을 바꾼다
    }),
    [INITIALIIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    })
  },
  initialState
);

export default auth;
