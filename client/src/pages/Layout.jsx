import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
function Layout() {
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />

      <Toaster />
    </>
  );
}

export default Layout;
