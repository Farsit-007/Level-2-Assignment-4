import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";
import {
  logout,
  TUser,
  useCurrentToken,
} from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../../utils/verifyToken";

type TProtectedRoute = {
  children: ReactNode;
  roles: string[];
};

const ProtectedRoute = ({ children, roles }: TProtectedRoute) => {
  const token = useAppSelector(useCurrentToken);

  let user;
  if (token) {
    user = verifyToken(token);
  }

  const dispatch = useAppDispatch();
  if (!roles.includes((user as TUser)?.role)) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
