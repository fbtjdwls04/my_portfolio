import { useEffect, useState } from "react";
import Circle from "../components/Circle";

export default function HomePage() {
  const [bar, setBar] = useState(0);
  const [trans, setTrans] = useState(-100);
  const [opacity, setOpacity] = useState(0);
  const [color, setColor] = useState("white");
  useEffect(() => {
    setBar(30);
    setTrans(0);
    setOpacity(1);
    setColor("yellow");
  }, []);
  return (
    <>
      <section
        id="home"
        className="h-[100vh] bg-no-repeat bg-cover relative overflow-hidden"
      >
        <div className="h-[100vh] w-full flex justify-center items-center flex-col select-none">
          <div className="lg:scale-100 md:scale-50 whitespace-nowrap">
            <p
              className="font-bold text-[30px]"
              style={{
                transition: "all 0.5s",
                position: "relative",
                top: trans,
                opacity,
              }}
            >
              <span className="text-[yellow]">RYU</span> SEONG JIN
            </p>
            <p className="flex font-bold text-[120px] items-end">
              <span
                style={{
                  transition: "all 0.5s 0.5s",
                  position: "relative",
                  left: trans,
                  opacity,
                }}
              >
                FRONT
              </span>
              <div
                className="my-auto h-[10px] bg-white mx-2"
                style={{
                  width: bar,
                  transition: "width 0.5s 2s",
                }}
              ></div>
              <span
                style={{
                  transition: "all 0.5s 1s",
                  position: "relative",
                  top: trans,
                  opacity,
                }}
              >
                END
              </span>
              <span
                className="text-white text-[50px] ml-7 mb-6"
                style={{
                  transition: "all 0.5s 1s",
                  position: "relative",
                  right: trans,
                  opacity,
                }}
              >
                DEV.
              </span>
            </p>
            <p
              className="font-bold text-[30px] text-center tracking-[10px]"
              style={{
                transition: "all 0.5s 1.5s, color 0.5s 2s",
                position: "relative",
                bottom: trans,
                opacity,
                color,
              }}
            >
              PORTFOLIO
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
