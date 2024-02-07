const initialState = {
  transactions: [],
  filters: {
    category: '',
    sort: ''
  }
};

export default function transactionsReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return { ...state, transactions: [...state.transactions, action.payload] };
    case 'SET_FILTER':
      return { ...state, filters: action.payload };
    default:
      return state;
  }
}