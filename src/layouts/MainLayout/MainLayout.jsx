import { Outlet } from "react-router-dom";
import Nav from "../../Pages/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
const MainLayout = () => {
  return (
    <div>
      <div className="h-[80px]">
        <Nav />
      </div>
      <div className="min-h-[calc(100vh-132px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
