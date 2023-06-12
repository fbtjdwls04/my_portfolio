import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";
import AboutPage from "./pages/AboutPage";
import WorksPage from "./pages/WorksPage";
import HomePage from "./pages/HomePage";
import IntroPage from "./pages/IntroPage";
import { useEffect, useState } from "react";
export default function App() {
  const page1 = "/home";
  const page2 = "/intro";
  const page3 = "/about";
  const page4 = "/works";
  const [value, SetValue] = useState();
  const locate = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (locate.pathname == page1) {
      SetValue(0);
    } else if (locate.pathname == page2) {
      SetValue(1);
    } else if (locate.pathname == page3) {
      SetValue(2);
    } else if (locate.pathname == page4) {
      SetValue(3);
    } else {
      SetValue(0);
    }
  });

  const pageChange = (value) => {
    SetValue(value);
    if (value == 0) {
      navigate(page1);
    } else if (value == 1) {
      navigate(page2);
    } else if (value == 2) {
      navigate(page3);
    } else if (value == 3) {
      navigate(page4);
    }
  };

  const observer = new IntersectionObserver((e) => {
    e.forEach((box) => {
      if (box.isIntersecting) {
      }
    });
  });

  const p = document.querySelectorAll("p");
  p.forEach((e) => {
    observer.observe(e);
  });

  function goToScroll(name) {
    var location = document.getElementsByName("." + name).offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
  }

  return (
    <div>
      <div className="flex justify-end text-white pt-5 pr-10 fixed w-full">
        <button
          className="ml-10 mr-auto text-[25px]"
          onClick={() => navigate(page1)}
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
          <Tab value={0} label="HOME" disableRipple />
          <Tab value={1} label="INTRO" disableRipple />
          <Tab value={2} label="ABOUT" disableRipple />
          <Tab value={3} label="WORKS" disableRipple />
        </Tabs>
      </div>

      <Routes>
        <Route path={page1}></Route>
        <Route path="*"></Route>
        <Route path={page2}></Route>
        <Route path={page3}></Route>
        <Route path={page4}></Route>
      </Routes>

      <HomePage />
      <IntroPage />
      <AboutPage />
      <WorksPage />
    </div>
  );
}
