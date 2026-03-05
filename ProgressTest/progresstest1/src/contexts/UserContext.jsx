//make user context to manage user state and actions related to user management (view details, lock/unlock account)

import { createContext, useContext, useReducer, useEffect, useCallback } from "react";
import api from "../api/userAPI";
import { userReducer, initialUserState } from "../reducers/userReducer";

const UserContext = createContext();

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};


export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialUserState);

    const getUsers = useCallback(async () => {
        dispatch({ type: "SET_LOADING", payload: true });

        try {
            const response = await api.get("/accounts");
            dispatch({ type: "SET_USERS", payload: response.data });
        } catch (error) {
            dispatch({ type: "SET_ERROR", payload: "Failed to fetch users" });
            console.error("Error fetching users:", error);
        } finally {
            dispatch({ type: "SET_LOADING", payload: false });
        }
    }, []);

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const lockUser = useCallback(async (userId) => {
        try {
            await api.patch(`/accounts/${userId}`, { status: "locked" });
            dispatch({ type: "LOCK_USER", payload: userId });
        } catch (error) {
            console.error("Error locking user:", error);
        }
    }, []);

    const unlockUser = useCallback(async (userId) => {
        try {
            await api.patch(`/accounts/${userId}`, { status: "active" });
            dispatch({ type: "UNLOCK_USER", payload: userId });
        } catch (error) {
            console.error("Error unlocking user:", error);
        }
    }, []);

    return (
        <UserContext.Provider value={{
            ...state,
            lockUser,
            unlockUser,
            getUsers
        }}>
            {children}
        </UserContext.Provider>
    );
};
