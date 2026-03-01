import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { getAccessToken } from "../../api/auth/AuthService";

export default function ProtectedRoute({ children }){
    const { user } = useAuth();
    const token = getAccessToken();

   if(!token) {
    return <Navigate to="/login" replace />;
   }

   if(!user){
    return <div> Loading...</div>;
   }
    return children;
}