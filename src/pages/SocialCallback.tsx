import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { Loader2, AlertCircle } from "lucide-react";

export default function SocialCallback() {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginWithToken } = useAuth();
  const [status, setStatus] = useState<"loading" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState("");
  const processedRef = useRef(false); // Impede processamento duplicado

  useEffect(() => {
    if (processedRef.current) return;

    const processLogin = async () => {
      const params = new URLSearchParams(location.search);
      const token = params.get("access_token") || params.get("token");

      if (!token) {
        setStatus("error");
        setErrorMessage("Token de autenticação não encontrado.");
        return;
      }

      processedRef.current = true; // Marca como processado
      try {
        await loginWithToken(token);
        navigate("/", { replace: true });
      } catch (err: any) {
        setStatus("error");
        setErrorMessage("Falha ao validar credenciais.");
      }
    };

    processLogin();
  }, [location, loginWithToken, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        {status === "loading" ? (
          <div className="flex flex-col items-center">
            <Loader2 className="h-10 w-10 text-blue-600 animate-spin mb-4" />
            <h2 className="text-xl font-bold">Autenticando...</h2>
          </div>
        ) : (
          <div className="flex flex-col items-center text-red-600">
            <AlertCircle className="h-10 w-10 mb-4" />
            <h2 className="text-xl font-bold">Erro na Autenticação</h2>
            <p className="text-slate-500 mb-6">{errorMessage}</p>
            <button onClick={() => navigate("/login")} className="bg-blue-600 text-white px-6 py-2 rounded-xl">Voltar</button>
          </div>
        )}
      </div>
    </div>
  );
}
