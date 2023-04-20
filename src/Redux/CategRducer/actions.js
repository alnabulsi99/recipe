import * as CATEG_CONSTANTS from './constans'

 export  function FETCHCATEG() {
  return async(dispatch)=>{
dispatch ({
  type: CATEG_CONSTANTS.LOADING
})
try {
  const res = await fetch("./Data/data.json")
  const Categ=await res.json()

  dispatch({
    type:CATEG_CONSTANTS.FETCHCATEG,
    payload:Categ.categories
  })

} catch (error) {
  dispatch({
    type:CATEG_CONSTANTS.ERROR,
    payload: error
  })
}
  } 
}


export  function fetchRecipe(recipe) {
  return async(dispatch)=>{
dispatch ({
  type: CATEG_CONSTANTS.LOADING
})
try {
  

  dispatch({
    type:CATEG_CONSTANTS.SINGLE_RECIPE,
    payload:recipe
  })

} catch (error) {
  dispatch({
    type:CATEG_CONSTANTS.ERROR,
    payload: error
  })
}
  } 
}

export function FetchSingleCategory(category) {
  return async (dispatch) => {
    dispatch({
      type: CATEG_CONSTANTS.LOADING,
    });

    try {
      dispatch({
        type: CATEG_CONSTANTS.SINGLE,
        payload: category,
      });
    } catch (error) {
      dispatch({
        type: CATEG_CONSTANTS.ERROR,
        payload: error,
      });
    }
  };
}



export function AddComment(comment) {
  return async (dispatch) => {
    dispatch({
      type:CATEG_CONSTANTS.LOADING,
    });
    const jsonData = JSON.stringify(comment);

    const res = await fetch("./Data/data.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    });

    try {
      dispatch({
        type:CATEG_CONSTANTS.ADD_COMMENT,
        payload: comment,
      });
    } catch (error) {
      dispatch({
        type: CATEG_CONSTANTS.ERROR,
        payload: error,
      });
    }
  };
}

