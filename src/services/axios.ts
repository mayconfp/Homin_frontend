import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_ORIGIN,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para capturar erros e impedir loops de autenticação
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Se o backend retornar 401 (Não Autorizado), limpa o acesso para parar o loop
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
      localStorage.removeItem("user_last_fetch");
      
      // Evita redirecionar se já estivermos na página de login
      if (!window.location.pathname.includes("/login")) {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;
