import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import {
  socialLoginBackend,
  fetchUserWithToken,
  loginAuth,
  registerAuth,
} from "../services/login";

export type User = {
  uid: string;
  username: string;
  email: string;
  role: "user" | "admin";
  displayName?: string;
  photoURL?: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, username: string) => Promise<boolean>;
  loginWithGoogle: () => Promise<void>;
  loginWithToken: (token: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [hasTriedRestore, setHasTriedRestore] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const login = async (email: string, password: string) => {
    try {
      const response = await loginAuth({ email, password });
      const token = response.access_token || response.token;
      if (!token) throw new Error("Token não retornado.");
      await loginWithToken(token);
      return true;
    } catch (error) {
      console.error("Erro no login:", error);
      return false;
    }
  };

  const register = async (email: string, password: string, username: string) => {
    try {
      const payload = { email, name: username, password };
      await registerAuth(payload);
      return true;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Erro ao registrar.");
    }
  };

  const loginWithGoogle = async () => {
    try {
      await socialLoginBackend();
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  const loginWithToken = async (token: string) => {
    if (isAuthenticating) return;
    setIsAuthenticating(true);
    try {
      localStorage.setItem("access_token", token);
      const data = await fetchUserWithToken(token);
      const payload = (data && (data.user ?? data)) as any;
      const userData: User = {
        uid: payload?.uid ?? payload?.id ?? payload?.sub ?? `user-${Date.now()}`,
        username: payload?.username ?? payload?.name ?? "Usuário",
        email: payload?.email ?? "",
        photoURL: payload?.photoURL ?? payload?.avatar,
        role: (payload?.role as "user" | "admin") ?? "user",
      };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("user_last_fetch", Date.now().toString());
    } catch (error) {
      logout();
      throw error;
    } finally {
      setIsAuthenticating(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_last_fetch");
    // Removido o reset do hasTriedRestore para evitar loops no useEffect
  };

  useEffect(() => {
    const restoreSession = async () => {
      if (hasTriedRestore || isAuthenticating) return;
      setHasTriedRestore(true);
      
      const token = localStorage.getItem("access_token");
      const storedUser = localStorage.getItem("user");
      
      if (token && storedUser && !user) {
        setUser(JSON.parse(storedUser));
        return;
      }
      
      if (token && !storedUser && !user) {
        try {
          await loginWithToken(token);
        } catch (err) {
          console.error("Restauração falhou:", err);
        }
      }
    };
    restoreSession();
  }, [hasTriedRestore, isAuthenticating, user]);

  return (
    <AuthContext.Provider value={{ user, login, register, loginWithGoogle, loginWithToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
