import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  load: 0,
  loanPurpose: "",
};

export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

export function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
export function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}
export function payLoan() {
  return { type: "account/payLoan" };
}
const store = createStore(accountReducer);

store.dispatch(deposit(500));
store.dispatch(withdraw(300));
store.dispatch(requestLoan(1600, "buy a new car"));
store.dispatch(payLoan());
console.log(store.getState());
// export const sliceName = createSlice({
// name: 'nameofslice',
// initialStateAccount,
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
