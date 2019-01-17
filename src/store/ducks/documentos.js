export const Types = {
  GET_REQUEST: 'documentos/GET_REQUEST',
  GET_SUCCESS: 'documentos/GET_SUCCESS',
  POST_REQUEST: 'documentos/POST_REQUEST',
  POST_SUCCESS: 'documentos/POST_SUCCESS',
  DELETE_REQUEST: 'documentos/DELETE_REQUEST',
  DELETE_SUCCESS: 'documentos/DELETE_SUCCESS',
  PUT_REQUEST: 'documentos/PUT_REQUEST',
  PUT_SUCCESS: 'documentos/PUT_SUCCESS',
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
      return { data: action.payload.data || [], loading: false };
    case Types.POST_SUCCESS:
      return { data: action.payload.data, loading: false };
    case Types.DELETE_REQUEST:
      return { ...state, loading: true };
    case Types.DELETE_SUCCESS:
      return { data: action.payload.data || [], loading: false };
    case Types.PUT_REQUEST:
      return { ...state, loading: true };
    case Types.PUT_SUCCESS:
      return { data: action.payload.data, loading: false };
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
  postDocumentosRequest: data => ({
    type: Types.POST_REQUEST,
    payload: { data },
  }),
  postDocumentosSuccess: data => ({
    type: Types.POST_SUCCESS,
    payload: { data },
  }),
  putDocumentosRequest: (data, codigo) => ({
    type: Types.PUT_REQUEST,
    payload: { data, codigo },
  }),
  putDocumentosSuccess: data => ({
    type: Types.PUT_SUCCESS,
    payload: { data },
  }),
  deleteDocumentosRequest: data => ({
    type: Types.DELETE_REQUEST,
    payload: { data },
  }),
  deleteDocumentosSuccess: data => ({
    type: Types.DELETE_SUCCESS,
    payload: { data },
  }),
};
