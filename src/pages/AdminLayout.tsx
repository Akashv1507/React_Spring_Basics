import AdminNavigation from "../components/Layout/AdminNavigation";
import { Outlet } from "react-router-dom";

const AdminLayout: React.FC = () => {
  return (
    <>
      <AdminNavigation />
      <Outlet />
    </>
  );
};

export default AdminLayout;
