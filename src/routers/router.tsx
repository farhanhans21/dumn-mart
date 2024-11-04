import React from "react";
import { useAppSelector } from "../store/store";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export default function ProtectedRoute({ role }: { role: any }) {
  const authToken = localStorage.getItem("token");
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.entities);
  if (!authToken) {
    navigate("/login");
  }
  if (role && user?.role) {
    return <Navigate to={user?.role === "ADMIN" ? "/admin" : "/"} />;
  }
  return <Outlet />;
}
