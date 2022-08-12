import { UserType } from "../constants";

const initialState = {
    list: [] 
}

const user = (state = initialState,action) => {
    switch (action.type){
        case UserType.ADD:
            return{
                ...state,
                list: [...state.list, action.list],
            };

        case UserType.GET:
            return {
                ...state,
                list: action.payload,
            };

        default:
            return state;
    }
};

export default user;




