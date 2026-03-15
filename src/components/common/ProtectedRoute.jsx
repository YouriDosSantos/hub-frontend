import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { getAccessToken } from "../../api/auth/AuthService";

export default function ProtectedRoute({ children }){
    const { user, loading } = useAuth();
    const token = getAccessToken();
    const location = useLocation();

   if(!token) {
    return <Navigate to="/login" replace />;
   }

   if(loading) {
    return <div>Loading...</div>
   }

   if(!user){
    return <div> Loading...</div>;
   }

   if (user.mustChangePassword && location.pathname !== "/auth/change-password") {
    return <Navigate to="/auth/change-password" replace />
   }

    return children;
}