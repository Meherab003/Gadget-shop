import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const PathName = useLocation().pathname;
  return (
    <div>
      {PathName !== "/sign-in" && PathName !== "/sign-up" ? <Navbar /> : null}
      <div className="min-h-outlet">
        <Outlet />
      </div>
      {PathName !== "/sign-in" && PathName !== "/sign-up" ? (
        <div>
          <Footer />
        </div>
      ) : null}
    </div>
  );
};

export default MainLayout;
