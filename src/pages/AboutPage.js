import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CircleDeco from "../components/CircleDeco";
export default function AboutPage() {
  const locate = useLocation();
  return (
    <>
      <section
        id="about"
        className="h-[100vh] flex relative overflow-hidden flex-col"
      >
        <div className="bg-white w-[900px] h-full m-auto flex flex-col items-center">
          <h1
            className="mt-[150px] p-2 text-[50px]"
            style={{
              transition: "opacity 0.5s 0.4s",
              opacity: locate.pathname == "/2" ? 1 : 0,
            }}
          >
            ABOUT ME
          </h1>
          <div className="h-1 w-[200px] bg-blue-500"></div>
          <p
            className="flex-col flex text-center mt-[60px] leading-7"
            style={{
              transition: "opacity 0.5s 0.5s",
              opacity: locate.pathname == "/2" ? 1 : 0,
            }}
          >
            <span>안녕하세요.</span>
            <span>개발자를 꿈꾸는 '류성진' 이라고 합니다.</span>
            <span>어릴적부터 막연하게 개발을 해보고 싶다 생각했지만</span>
            <span>돌고 돌아 이제서야 도전을 하게 되었습니다.</span>
            <span>제 목표는 조금씩이라도 끊임없이 성장하는것입니다.</span>
            <span>잘 부탁드립니다.</span>
          </p>
        </div>
        <CircleDeco />
      </section>
    </>
  );
}
