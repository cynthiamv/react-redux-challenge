export const initState = {
  users: [{
    name: 'Cynthia Vico',
    country: 'Argentina',
    birthday: '1996-12-10',
    age: 24,
  }]
};

const formReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return{
        ...state, users:
        [...state.users, action.payload]
      }
    default:
      return state;    
  }
}

export default formReducer;