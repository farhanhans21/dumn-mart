import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import AuthReduscer from "../Redux/auth/slice"
import categoryReducer from "../Redux/category/slice"
import productReducer from "../Redux/product/slice"
import product2Reducer from "../Redux/product/sliceProduct"
import profileReducer from "../Redux/profile/slice"
export  const store = configureStore({
  reducer:{
    auth: AuthReduscer,
    category: categoryReducer,
    product: productReducer,
    product2: product2Reducer,
    profile: profileReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // execute action dari redux
export const useAppSelector = useSelector.withTypes<RootState>() // mengambil data redux
