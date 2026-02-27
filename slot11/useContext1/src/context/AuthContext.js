import React, { createContext, useReducer } from "react";
import { mockAccounts } from "../data/mockAccounts";

export const AuthContext = createContext();

const initialState = {
  user: null,
  error: null
};


function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        error: null
      };

    case "LOGIN_FAIL":
      return {
        user: null,
        error: action.payload
      };

    case "LOGOUT":
      return {
        user: null,
        error: null
      };

    default:
      return state;
  }
}


export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Hàm login
  const login = (email, password) => {

    // Validation rỗng
    if (!email || !password) {
      dispatch({
        type: "LOGIN_FAIL",
        payload: "Email và mật khẩu không được để trống"
      });
      return;
    }

    // Tìm account trong mock data
    const account = mockAccounts.find(
      acc => acc.email === email && acc.password === password
    );

    if (!account) {
      dispatch({
        type: "LOGIN_FAIL",
        payload: "Email hoặc mật khẩu không đúng"
      });
      return;
    }

    // Kiểm tra role admin
    if (account.role !== "admin") {
      dispatch({
        type: "LOGIN_FAIL",
        payload: "Chỉ tài khoản Admin mới được đăng nhập"
      });
      return;
    }

    // Kiểm tra trạng thái
    if (account.status !== "active") {
      dispatch({
        type: "LOGIN_FAIL",
        payload: "Tài khoản đã bị khóa"
      });
      return;
    }

    // Thành công
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: account
    });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        error: state.error,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
