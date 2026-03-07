import { createContext, useContext, useReducer } from "react";
import api from "../api/userAPI";
import { expenseReducer, initialState } from "../reducers/expenseReducer";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {

    const [state, dispatch] = useReducer(
        expenseReducer,
        initialState
    );

    const fetchExpenses = async () => {

        const res = await api.get("/expenses");

        dispatch({
            type: "SET_EXPENSES",
            payload: res.data
        });
    };

    const deleteExpense = async (id) => {

        await api.delete(`/expenses/${id}`);

        dispatch({
            type: "DELETE_EXPENSE",
            payload: id
        });
    };

    const setCategoryFilter = (category) => {

        dispatch({
            type: "SET_FILTER",
            payload: category
        });
    };

    const setEditingExpense = (expense) => {

        dispatch({
            type: "SET_EDITING",
            payload: expense
        });
    };

    return (
        <ExpenseContext.Provider
            value={{
                ...state,
                fetchExpenses,
                deleteExpense,
                setCategoryFilter,
                setEditingExpense
            }}
        >
            {children}
        </ExpenseContext.Provider>
    );
};

export const useExpense = () => useContext(ExpenseContext);