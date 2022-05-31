import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import { UserType } from "../utils/types";

interface AuthContextData {
  user: UserType | null;
  isUserLogger: boolean;
  signInGithubUrl: string;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    avatar_url: string;
  };
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserType | null>(null);
  const [isUserLogger, setIsUserLogger] = useState(false);
  const signInGithubUrl = `http://github.com/login/oauth/authorize?scope=user&client_id=${
    import.meta.env.VITE_GITHUB_API_CLIENT_ID
  }`;

  async function signInGithub(githubCode: string) {
    api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    const response = await api.post<AuthResponse>("authenticate", {
      code: githubCode,
    });

    const { token, user } = response.data;

    localStorage.setItem("@tagMemoryTest:token", token);
    setIsUserLogger(true);
    setUser(user);
  }

  function signOut() {
    setUser(null);
    setIsUserLogger(false);
    localStorage.removeItem("@tagMemoryTest:token");
  }

  useEffect(() => {
    const token = localStorage.getItem("@tagMemoryTest:token");

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      api.get<UserType>("profile").then((response) => {
        setUser(response.data);
        setIsUserLogger(true);
      });
    }
  }, []);

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes("?code=");

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split("?code=");

      window.history.pushState({}, "", urlWithoutCode);

      signInGithub(githubCode);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signOut, signInGithubUrl, user, isUserLogger }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
