 export const searchAction = (input) => {
    return (dispatch) => {
        dispatch({
            type: "search",
            payload: input
        })
    };
  }

  export const testAction = (input) => {
      return(dispatch) => {
          dispatch({
              type: "add",
              payload: input
          })
      };
  }