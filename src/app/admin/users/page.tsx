import { NextPage } from "next";
import { AdminTable } from "./components";

const Admin: NextPage = () => {
  return (
    <div>
      <h1>Admin</h1>
      <AdminTable />
    </div>
  );
};

export default Admin;
