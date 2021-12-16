import { useNavigate } from "react-router";
import { useEffect } from "react";
import { goToLogin } from "../routes/coordinator";

const useProtectedPage = () => {
  const history = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      goToLogin(history);
    }
  }, [history]);
};

export default useProtectedPage;