export const getData = (state) => {
    console.log(state);
    return state.user.list || [] };
