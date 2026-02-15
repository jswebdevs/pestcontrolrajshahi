import { Outlet } from "react-router-dom";
import Header from "./Header"; // We'll create a dummy one if you don't have it
import Footer from "./Footer"; // We'll create a dummy one if you don't have it

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Navigation Bar */}
      <Header />

      {/* 2. Dynamic Page Content changes here */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
};

export default Root;
