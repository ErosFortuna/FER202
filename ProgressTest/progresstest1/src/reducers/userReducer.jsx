export const initialUserState = {
    users: []
};

export const userReducer = (state, action) => {
    switch (action.type) {

        case "SET_LOADING":
            return { ...state, loading: action.payload };

        case "SET_ERROR":
            return { ...state, error: action.payload };

        case "SET_USERS":
            return {
                ...state,
                users: action.payload,
            };

        case "UPDATE_USER":
            return {
                ...state,
                users: state.users.map((u) =>
                    u.id === action.payload.id ? action.payload : u
                ),
            };

        case "LOCK_USER":
            return {
                ...state,
                users: state.users.map((user) =>
                    String(user.id) === String(action.payload)
                        ? { ...user, status: "locked" }
                        : user
                ),
            };

        case "UNLOCK_USER":
            return {
                ...state,
                users: state.users.map((user) =>
                    String(user.id) === String(action.payload)
                        ? { ...user, status: "active" }
                        : user
                ),
            };

        default:
            return state;
    }
};