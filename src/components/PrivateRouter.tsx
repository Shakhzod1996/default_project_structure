import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRouter = () => {
     const status = true;
     return status ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
