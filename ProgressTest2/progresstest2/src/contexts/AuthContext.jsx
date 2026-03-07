import { createContext, useContext, useState } from "react";
import api from "../api/userAPI";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const login = async (username, password) => {
        try {
            const res = await api.get("/users");

            const foundUser = res.data.find(
                (u) =>
                    u.username.trim() === username.trim() &&
                    u.password.trim() === password.trim()
            );

            if (foundUser) {
                setUser(foundUser);
                return foundUser;
            }

            return false;
        } catch (error) {
            console.error("Login error:", error);
            return false;
        }
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);