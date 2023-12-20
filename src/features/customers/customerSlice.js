import { combineReducers, createStore } from "redux";

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
  status: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}
export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toISOString(),
    },
  };
}

export function updateName(fullName) {
  return { type: "account/updateName", payload: fullName };
}

const store = createStore(customerReducer);

store.dispatch(createCustomer("Furkan Çiftci", 11111111111));

// export const sliceName = createSlice({
// name: 'nameofslice',
// initialStateCustomer,
// reducers: {,
// setValue: (state,action) => {,
// setValue: return {,
// ...state,,
// value: action.payload;,
// },
// },
// });

// export const {setValue} = sliceName.actions;
// export default sliceName.reducer;
