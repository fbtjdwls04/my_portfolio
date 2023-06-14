import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";
import AboutPage from "./pages/AboutPage";
import WorksPage from "./pages/WorksPage";
import HomePage from "./pages/HomePage";
import StackPage from "./pages/StackPage";
import { useEffect, useState, useRef } from "react";
export default function App() {
  const page1 = "/1";
  const page2 = "/2";
  const page3 = "/3";
  const page4 = "/4";
  const [value, SetValue] = useState(1);
  const locate = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const topbar = document.getElementById("topbar");
    topbar.style.transition = "top 0.5s";
    topbar.style.top = "50px";
    setTimeout(() => {
      topbar.style.top = 0;
    }, 500);
  }, []);

  function scrollMove(pageHeight) {
    outerDivRef.current.scrollTo({
      top: pageHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  // Tab이나 url로 라우팅시 Tab의 바텀바가 따라옴
  const pageChange = (value) => {
    SetValue(value);
    navigate("/" + value);
  };

  // 스크롤 조작 시 한 화면씩 움직이기
  const outerDivRef = useRef();
  const pageHeight = window.innerHeight;
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (value < 4) {
          navigate("/" + (value + 1));
        }
      } else {
        if (value > 1) {
          navigate("/" + (value - 1));
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    // 주소창에 직접 입력시 스크롤 이동
    if (locate.pathname == page1) {
      SetValue(1);
      scrollMove(0);
    } else if (locate.pathname == page2) {
      SetValue(2);
      scrollMove(pageHeight);
    } else if (locate.pathname == page3) {
      SetValue(3);
      scrollMove(pageHeight * 2);
    } else if (locate.pathname == page4) {
      SetValue(4);
      scrollMove(pageHeight * 3);
    } else {
      SetValue(1);
      scrollMove(0);
    }
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  });

  return (
    <div>
      <div
        id="topbar"
        className="flex justify-end text-white pt-5 pr-10 fixed w-full top-[-100px]"
      >
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
          <Tab value={1} label="HOME" disableRipple />
          <Tab value={2} label="INTRO" disableRipple />
          <Tab value={3} label="ABOUT" disableRipple />
          <Tab value={4} label="WORKS" disableRipple />
        </Tabs>
      </div>
      <div ref={outerDivRef} id="outer">
        <HomePage />
        <AboutPage />
        <StackPage />
        <WorksPage />
      </div>
    </div>
  );
}
