// context/authContext.tsx
"use client";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useRef,
  useState,
} from "react";

interface AuthContextProps {
  fetchLoginStatus: () => void;
  LoginStatus: boolean;
  setLoginStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [LoginStatus, setLoginStatus] = useState(
    () =>
      typeof window !== "undefined" &&
      localStorage.getItem("isLoggedIn") == "true"
  );

  const fetchLoginStatus = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/status", {
        credentials: "include", // Include credentials to send the session cookie
      });
      if (response.status === 200) {
        localStorage.setItem("isLoggedIn", "true");
        setLoginStatus(true)
      } else if (response.status === 401) {
        setLoginStatus(false)
        localStorage.removeItem("isLoggedIn");
      }
    } catch (error) {
      console.error("Error checking login status:", error);
    }
  }, []);

  useEffect(() => {
    fetchLoginStatus();
  }, [fetchLoginStatus]);
  return (
    <AuthContext.Provider
      value={{ fetchLoginStatus, LoginStatus, setLoginStatus }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
