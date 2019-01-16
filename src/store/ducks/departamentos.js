export const Types = {
  GET_REQUEST: 'departamentos/GET_REQUEST',
  GET_SUCCESS: 'departamentos/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [
    {
      id: 1,
      name: 'Desenvolvimento',
    },
    {
      id: 2,
      name: 'Comercial',
    },
    {
      id: 3,
      name: 'Suporte',
    },
  ],
  loading: true,
};

export default function departamentos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { data: state.data, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  getDepartamentosRequest: () => ({
    type: Types.GET_REQUEST,
  }),
  getDepartamentosSuccess: () => ({
    type: Types.GET_SUCCESS,
  }),
};
