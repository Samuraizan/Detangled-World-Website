import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Content from "./components/Home/Content";
import Roadmap from "./components/roadmap/Roadmap";
import Scrolling from "./components/roadmap/Scrolling";
import Utility from "./components/Utility/Utility";
import Team from "./components/Team/Team";
import Unlockyourvibe from "./components/abovefooter/Unlockyourvibe";
import Footer from "./components/Footer/Footer";
import { AccountProvider } from "./providers/AccountProvider";
import { ToastContainer } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <AccountProvider>
      <div>
        <Navbar />
        <Home />
        <Content />
        <Roadmap />
        <Scrolling />
        <Utility />
        <Team />
        <Unlockyourvibe />
        <Footer />
        <ToastContainer bodyStyle={{ lineHeight: 1.7 }} />
      </div>
    </AccountProvider>
  );
};

export default App;
