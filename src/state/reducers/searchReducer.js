const initialState = {
    arr:[]
}
console.log("Default: ",initialState)
const searchReducer = (state = initialState, action) => {
    switch(action.type){
        case "search":
            return {
                ...state,
                arr: state.arr.concat(action.payload)
            }
        default:
            return state;
    }
}

export default searchReducer;