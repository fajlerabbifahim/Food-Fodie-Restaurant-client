import Navbar from "../../Components/Navbar";

import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer";

function HomeLayout() {
  return (
    <div>
      <header className="w-11/12 mx-auto">
        {/* Navbar section  */}
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default HomeLayout;
