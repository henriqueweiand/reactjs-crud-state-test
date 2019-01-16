export const Types = {
  GET_REQUEST: 'documentos/GET_REQUEST',
  GET_SUCCESS: 'documentos/GET_SUCCESS',
  POST_REQUEST: 'documentos/POST_REQUEST',
  POST_SUCCESS: 'documentos/POST_SUCCESS',
  DELETE_REQUEST: 'documentos/DELETE_REQUEST',
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
      return { data: state.data, loading: false };
    case Types.POST_SUCCESS:
      return { data: [...state.data, action.payload.data], loading: false };
    default:
      return state;
  }
}

export const Creators = {
  getDocumentosRequest: () => ({
    type: Types.GET_REQUEST,
  }),
  getDocumentosSuccess: () => ({
    type: Types.GET_SUCCESS,
  }),
  postDocumentosRequest: data => ({
    type: Types.POST_REQUEST,
    payload: { data },
  }),
  postDocumentosSuccess: data => ({
    type: Types.POST_SUCCESS,
    payload: { data },
  }),
  putDocumentosRequest: data => ({
    type: Types.PUT_REQUEST,
    payload: { data },
  }),
  deleteDocumentosRequest: data => ({
    type: Types.DELETE_REQUEST,
    payload: data,
  }),
};
