export const initialState = {
    expenses: [],
    filteredExpenses: [],
    categoryFilter: "",
    editingExpense: null
};

export function expenseReducer(state, action) {

    switch (action.type) {

        case "SET_EXPENSES":
            return {
                ...state,
                expenses: action.payload,
                filteredExpenses: action.payload
            };

        case "DELETE_EXPENSE":

            const newList = state.expenses.filter(
                e => e.id !== action.payload
            );

            return {
                ...state,
                expenses: newList,
                filteredExpenses: newList
            };

        case "SET_FILTER":

            const filtered = state.expenses.filter(e =>
                !action.payload || e.category === action.payload
            );

            return {
                ...state,
                categoryFilter: action.payload,
                filteredExpenses: filtered
            };

        case "SET_EDITING":

            return {
                ...state,
                editingExpense: action.payload
            };

        default:
            return state;
    }
}