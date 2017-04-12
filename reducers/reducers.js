function reducer(state, action){
 switch (action.type){
  case 'SET_LOADING':
    return {...state, loading: action.payload.loading};
   break;
  default: return state;
 }

}
export default reducer;