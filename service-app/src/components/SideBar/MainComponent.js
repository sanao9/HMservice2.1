import React, { useContext } from "react";
import AdminSideBar from "./AdminSideBar";
import CustomerSideBar from "./CustomerSideBar";
import { AuthContext } from "../../context/AuthContext";

const MainComponent = () => {
  const { user } = useContext(AuthContext);

  return user.role === "admin" ? <AdminSideBar /> : <CustomerSideBar />;
};

export default MainComponent;
