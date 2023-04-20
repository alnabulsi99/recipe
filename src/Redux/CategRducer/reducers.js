import * as CATEG_CONSTANTS from './constans';

const initState = {
  loading: false,
  error: null,
  categories: [],
  category:{},
  recipe:[],
  comments:[],
};

export default function CategReducer(state = initState, action) {
  switch (action.type) {
    case CATEG_CONSTANTS.FETCHCATEG:
      return {
        ...state,
        categories: action.payload,
      };
    case CATEG_CONSTANTS.LOADING:
      return {
        ...state,
        loading: true,
      };
    case CATEG_CONSTANTS.ERROR:
      return {
        ...state,
        error: action.payload,
      };
      case CATEG_CONSTANTS.SINGLE:
      return {
        ...state,
        loading:false,
        category:action.payload
      };
      case CATEG_CONSTANTS.SINGLE_RECIPE:
      return {
        ...state,
        loading:false,
        recipe:action.payload
      };
      
      case CATEG_CONSTANTS.ADD_COMMENT:
        return {
          ...state, 
          comments: [...state.comments, action.payload] ,
          loading:false,
        };
    default:
      return state;
  }
}
