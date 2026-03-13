// AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import * as userRepo from "../repositories/UserRepository";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] =useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = userRepo.get();
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  // Whenever user changes, persist it
  useEffect(() => {
    if (user) {
      userRepo.save(user);
    } else {
      userRepo.remove();
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);