import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";
import AboutPage from "./pages/AboutPage";
import WorksPage from "./pages/WorksPage";
import HomePage from "./pages/HomePage";
import IntroPage from "./pages/IntroPage";
import { useEffect, useState, useRef } from "react";
export default function App() {
  const page1 = "/home";
  const page2 = "/intro";
  const page3 = "/about";
  const page4 = "/works";
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
  // Tab이나 url로 라우팅시 Tab의 바텀바가 따라옴
  const pageChange = (value) => {
    SetValue(value);
    if (value == 1) {
      navigate(page1);
      outerDivRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else if (value == 2) {
      navigate(page2);
      outerDivRef.current.scrollTo({
        top: pageHeight,
        left: 0,
        behavior: "smooth",
      });
    } else if (value == 3) {
      navigate(page3);
      outerDivRef.current.scrollTo({
        top: pageHeight * 2,
        left: 0,
        behavior: "smooth",
      });
    } else if (value == 4) {
      navigate(page4);
      outerDivRef.current.scrollTo({
        top: pageHeight * 3,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  // 스크롤 조작 시 한 화면씩 움직이기
  const outerDivRef = useRef();
  const pageHeight = window.innerHeight;
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          SetValue(2);
          navigate(page2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          SetValue(3);
          navigate(page3);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          //현재 3페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: "smooth",
          });
          SetValue(4);
          navigate(page4);
        } else {
          // 현재 4페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          SetValue(1);
          navigate(page1);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          //현재 3페이지
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          SetValue(2);
          navigate(page2);
        } else {
          // 현재 4페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          SetValue(3);
          navigate(page3);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    if (locate.pathname == page1) {
      SetValue(1);
      outerDivRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else if (locate.pathname == page2) {
      SetValue(2);
      outerDivRef.current.scrollTo({
        top: pageHeight,
        left: 0,
        behavior: "smooth",
      });
    } else if (locate.pathname == page3) {
      SetValue(3);
      outerDivRef.current.scrollTo({
        top: pageHeight * 2,
        left: 0,
        behavior: "smooth",
      });
    } else if (locate.pathname == page4) {
      SetValue(4);
      outerDivRef.current.scrollTo({
        top: pageHeight * 3,
        left: 0,
        behavior: "smooth",
      });
    } else {
      SetValue(1);
      outerDivRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
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

      <Routes>
        <Route path={page1}></Route>
        <Route path="*"></Route>
        <Route path={page2}></Route>
        <Route path={page3}></Route>
        <Route path={page4}></Route>
      </Routes>
      <div ref={outerDivRef} id="outer">
        <HomePage />
        <IntroPage />
        <AboutPage />
        <WorksPage />
      </div>
    </div>
  );
}
