import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { getAccessToken } from "../services/AuthService";

export default function ProtectedRoute({ children }){
    const { user } = useAuth();
    const token = getAccessToken();

    if(!user || !token) {
        return <Navigate to="/login" replace />;
    }

    return children;
}