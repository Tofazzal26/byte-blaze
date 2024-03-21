import { Outlet } from "react-router-dom";
import Nav from "../../Pages/Nav/Nav";
const MainLayout = () => {
  return (
    <div>
      <div className="h-[80px]">
        <Nav />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
