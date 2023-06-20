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
        style={{
          backgroundColor: locate.pathname == "/2" ? "white" : "black",
          transition: "background-color 0.5s",
        }}
      >
        <div className="w-[900px] h-full ml-[300px] flex flex-col items-center">
          <h1
            className="mt-[150px] p-2 text-[50px]"
            style={{
              transition:
                locate.pathname == "/2" ? "opacity 0.5s 0.4s" : "opacity 0.3s",
              opacity: locate.pathname == "/2" ? 1 : 0,
            }}
          >
            ABOUT ME
          </h1>
          <div
            className="h-1 bg-blue-500"
            style={{
              transition:
                locate.pathname == "/2" ? "width 0.3s 1s linear" : "width 0.3s",
              width: locate.pathname == "/2" ? 150 : 0,
            }}
          ></div>
          <p
            className="flex-col flex text-center mt-[60px] leading-7"
            style={{
              transition:
                locate.pathname == "/2" ? "opacity 0.5s 0.5s" : "opacity 0.3s",
              opacity: locate.pathname == "/2" ? 1 : 0,
            }}
          >
            <span>안녕하세요.</span>
            <span>개발자를 꿈 꾸는 '류성진' 이라고 합니다.</span>
            <span>어릴적부터 막연하게 개발을 해보고 싶다 생각했지만</span>
            <span>돌고 돌아 이제서야 도전하게 되었습니다.</span>
            <span>아직 모르는 것 투성이지만</span>
            <span>그만큼 배울 것이 많다는 것에 설렘을 느낍니다.</span>
            <br />
            <span>프론트엔드 백엔드 구분없이 전부 알아가고 싶고</span>
            <span>마라톤을 하듯, 꾸준히 나아가는 것이 제 목표입니다.</span>
            <span>잘 부탁드립니다.</span>
          </p>
        </div>
        <div
          className="card w-80 bg-gray-100 shadow-xl absolute top-[130px]"
          style={{
            transition: locate.pathname == "/2" ? "all 0.5s 1s" : "all 0.3s",
            right: locate.pathname == "/2" ? 500 : 300,
            opacity: locate.pathname == "/2" ? 1 : 0,
          }}
        >
          <figure className="px-10 pt-10">
            <img
              src="https://images.chosun.com/resizer/u9nJRxs0BbtjygJ4HzKukecXnOk=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/UVBJZL3RXAB36BDSHVM3MW2WNY.jpg"
              alt=""
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">이름 : 류성진</h2>
            <p>생년월일 : 1993-07-02</p>
            <p>HP : 010-0000-0000</p>
            <p>학습처 : 코리아 IT 아카데미</p>
            <p>⁕ 풀스택 과정 수료중</p>
          </div>
        </div>
        <CircleDeco />
      </section>
    </>
  );
}
