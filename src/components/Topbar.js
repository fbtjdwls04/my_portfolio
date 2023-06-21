import { useLocation, useNavigate } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";
import { useEffect, useState } from "react";
import classnames from "classnames";

let timer;

export default function Topbar({ outerDivRef }) {
  const page1 = "/1";
  const page2 = "/2";
  const page3 = "/3";
  const page4 = "/4";
  const [value, SetValue] = useState(1);
  const locate = useLocation();
  const nowPage = locate.pathname;
  const navigate = useNavigate();

  // 처음 home 화면 랜더시 탑바 움직임
  useEffect(() => {
    const topbar = document.getElementById("topbar");
    topbar.style.transition = "top 0.5s";
    topbar.style.top = "50px";
    setTimeout(() => {
      topbar.style.top = 0;
    }, 500);
  }, []);

  // 스크롤 이동 범위(한 화면씩)
  function scrollMove(pageHeight) {
    outerDivRef.current.scrollTo({
      top: pageHeight,
      behavior: "smooth",
    });
  }

  // 스크롤 조작 시 앞뒤로 주소 라우팅
  const pageHeight = window.innerHeight;
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      //   스크롤 쓰로틀링
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
        }, 500);
        if (deltaY > 0) {
          // 스크롤 내릴 때
          if (value < 4) {
            navigate("/" + (value + 1));
          }
        } else {
          // 스크롤 올릴 때
          if (value > 1) {
            navigate("/" + (value - 1));
          }
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);

    // 현재 주소를 기준으로 Tabs의 value값 변경 및 스크롤 이동
    if (nowPage === page1) {
      SetValue(1);
      scrollMove(0);
      console.log("안녕");
    } else if (nowPage === page2) {
      SetValue(2);
      scrollMove(pageHeight);
    } else if (nowPage === page3) {
      SetValue(3);
      scrollMove(pageHeight * 2);
    } else if (nowPage === page4) {
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
    <header
      id="topbar"
      className={classnames(
        "flex justify-end pt-5 pr-10 fixed w-full top-[-100px] z-10",
        { "text-purple-900": nowPage === page2 },
        { "text-white": nowPage !== page2 }
      )}
    >
      <button
        className="ml-10 mr-auto text-[25px]"
        onClick={() => navigate(page1)}
        style={{
          transition: "color 1s",
        }}
      >
        <i className="fa-solid fa-house self-start"></i>
      </button>
      <Tabs
        value={value}
        onChange={(e, value) => navigate("/" + value)}
        aria-label="secondary tabs example"
        textColor="inherit"
        indicatorColor={nowPage === page2 ? "primary" : "secondary"}
        style={{
          transition: "color 1s",
          opacity: 1,
        }}
      >
        <Tab value={1} label="HOME" disableRipple />
        <Tab value={2} label="ABOUT" disableRipple />
        <Tab value={3} label="STACK" disableRipple />
        <Tab value={4} label="WORKS" disableRipple />
      </Tabs>
    </header>
  );
}
