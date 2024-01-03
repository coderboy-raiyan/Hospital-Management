import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

function useAuthProvider() {
  const auth = useContext(AuthContext);
  return auth;
}

export default useAuthProvider;
