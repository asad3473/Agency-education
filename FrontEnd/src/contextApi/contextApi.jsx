import React, { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(null);
  const [verified, setVerified] = useState();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/v1/users/current-user",
          {
            withCredentials: true,
          }
        );
        setVerified(res.data.data.emailVerified)
        setEmail(res.data.data.email)
        setUser(res.data.data);
      } catch (err) {
        
        if (err.response?.status === 401) {
          console.log("this is error::", err.response.status)
        setUser(null);}
        else {
        console.error("Unexpected error:", err);
      }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

   return (
    <AuthContext.Provider value={{ user, loading, setUser, email, setVerified }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth =()=> useContext(AuthContext)
export { AuthProvider, useAuth };
