import { Navigate } from "react-router-dom";
import Spinner from "../Components/Spinner";
import useAuth from "../Hooks/useAuth";

function PrivetRoute({ children }) {
  const { loading, user } = useAuth();

  if (loading) {
    return <Spinner />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
}

export default PrivetRoute;
