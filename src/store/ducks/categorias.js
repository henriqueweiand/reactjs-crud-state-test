export const Types = {
  GET_REQUEST: 'categorias/GET_REQUEST',
  GET_SUCCESS: 'categorias/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [
    {
      id: 1,
      name: 'Procedimentos operacionais',
    },
    {
      id: 2,
      name: 'Formulários padrões',
    },
    {
      id: 3,
      name: 'Planejamento de processo',
    },
  ],
  loading: true,
};

export default function categorias(state = INITIAL_STATE, action) {
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
  getCategoriasRequest: () => ({
    type: Types.GET_REQUEST,
  }),
  getCategoriasSuccess: () => ({
    type: Types.GET_SUCCESS,
  }),
};
