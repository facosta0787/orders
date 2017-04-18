function reducer(state, action){
 switch (action.type){
  case 'SET_LOADING':
    return {...state, loading: action.payload.loading};
   break;
  case 'SET_VISIBLE_SPINNER':
   return{...state, visible:action.payload.visible};
   break;
  default: return state;
 }

}
export default reducer;