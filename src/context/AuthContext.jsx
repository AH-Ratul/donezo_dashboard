import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { loginUser as loginAPI } from "../services/api";
import { isTokenExpired, getTokenRemainingTime } from "../utils/jwt";

const AuthContext = createContext(null);

// Warning shown 2 minutes before token expiry
const EXPIRY_WARNING_MS = 2 * 60 * 1000;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sessionWarning, setSessionWarning] = useState(false);

  const logoutTimerRef = useRef(null);
  const warningTimerRef = useRef(null);

  const clearTimers = useCallback(() => {
    if (logoutTimerRef.current) {
      clearTimeout(logoutTimerRef.current);
      logoutTimerRef.current = null;
    }
    if (warningTimerRef.current) {
      clearTimeout(warningTimerRef.current);
      warningTimerRef.current = null;
    }
    setSessionWarning(false);
  }, []);

  // Setup auto-logout timer based on token expiry
  const setupExpiryTimers = useCallback(
    (jwt) => {
      clearTimers();

      const remaining = getTokenRemainingTime(jwt);
      if (remaining === null) {
        return;
      }

      if (remaining <= 0) {
        // Already expired
        logout();
        return;
      }

      // Set warning timer (show warning before expiry)
      if (remaining > EXPIRY_WARNING_MS) {
        warningTimerRef.current = setTimeout(() => {
          setSessionWarning(true);
        }, remaining - EXPIRY_WARNING_MS);
      } else {
        // Less than warning time remaining — show warning immediately
        setSessionWarning(true);
      }

      // Set auto-logout timer
      logoutTimerRef.current = setTimeout(() => {
        logout();
      }, remaining);
    },
    [clearTimers],
  );

  // Restore session from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      // Check if the stored token is expired
      if (isTokenExpired(storedToken)) {
        // Token expired — clean up
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      } else {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
        setupExpiryTimers(storedToken);
      }
    }

    setLoading(false);
  }, [setupExpiryTimers]);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => clearTimers();
  }, [clearTimers]);

  const login = async (email, password) => {
    const response = await loginAPI(email, password);
    const data = response.data;
    const userData = { id: data.id, email: data.email };

    setUser(userData);
    setToken(data.token);
    setSessionWarning(false);

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(userData));

    // Setup expiry timers for the new token
    setupExpiryTimers(data.token);

    return data;
  };

  const logout = useCallback(() => {
    clearTimers();
    setUser(null);
    setToken(null);
    setSessionWarning(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }, [clearTimers]);

  const dismissWarning = () => setSessionWarning(false);

  const isAuthenticated = !!token && !isTokenExpired(token);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated,
        sessionWarning,
        login,
        logout,
        dismissWarning,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export default AuthContext;
