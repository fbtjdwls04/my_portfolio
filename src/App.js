import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";
import AboutPage from "./pages/AboutPage";
import WorksPage from "./pages/WorksPage";
import HomePage from "./pages/HomePage";
import IntroPage from "./pages/IntroPage";
import { useEffect, useState } from "react";
export default function App() {
  const [value, SetValue] = useState();
  const locate = useLocation();
  useEffect(() => {
    if (locate.pathname == "/home") {
      SetValue(0);
    } else if (locate.pathname == "/intro") {
      SetValue(1);
    } else if (locate.pathname == "/about") {
      SetValue(2);
    } else if (locate.pathname == "/works") {
      SetValue(3);
    }
  });
  const navigate = useNavigate();
  const pageChange = (value) => {
    SetValue(value);
    if (value == 0) {
      navigate("/home");
    } else if (value == 1) {
      navigate("/intro");
    } else if (value == 2) {
      navigate("/about");
    } else if (value == 3) {
      navigate("/works");
    }
  };
  return (
    <div
      style={{
        backgroundImage:
          'url("https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/479/755d945efb0e915a8fb8049a26421ebe_res.jpeg")',
      }}
      className="h-[100vh] bg-no-repeat bg-cover"
    >
      <div className="flex justify-end text-white pt-5 pr-10 fixed w-full">
        <button
          className="ml-10 mr-auto text-[25px]"
          onClick={() => navigate("/home")}
        >
          <i className="fa-solid fa-house self-start"></i>
        </button>
        <Tabs
          value={value}
          onChange={(e, value) => pageChange(value)}
          aria-label="secondary tabs example"
          textColor="inherit"
          indicatorColor="secondary"
        >
          <Tab value={0} label="HOME" />
          <Tab value={1} label="INTRO" />
          <Tab value={2} label="ABOUT" />
          <Tab value={3} label="WORKS" />
        </Tabs>
      </div>

      <div className="flex justify-center items-center text-white text-[50px] h-[800px]">
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="*" element={<HomePage />}></Route>
          <Route path="intro" element={<IntroPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/works" element={<WorksPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}
