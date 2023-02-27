import { fetchUser } from "../utils/fetchLocalStorageData"

const userInfo = fetchUser()
// defining the initial global state.
export const initialState = {
  user: userInfo,
  foodItems: null,
  cartShow: false,
}
