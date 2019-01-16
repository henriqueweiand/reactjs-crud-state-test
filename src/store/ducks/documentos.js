export const Types = {
  GET_REQUEST: 'documentos/GET_REQUEST',
  GET_SUCCESS: 'documentos/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function documentos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { data: [...state.data, action.payload.data], loading: false };
    default:
      return state;
  }
}

export const Creators = {
  getDocumentosRequest: () => ({
    type: Types.GET_REQUEST,
  }),
  getDocumentosSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
