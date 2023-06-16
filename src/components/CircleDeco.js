import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Circle({ size, left, bottom, bgColor }) {
  return (
    <div
      className="rounded-full absolute"
      style={{
        height: size,
        width: size,
        backgroundColor: `${bgColor}`,
        left: `calc(50% - ${left}px)`,
        bottom: bottom,
      }}
    ></div>
  );
}

export default function CircleDeco() {
  const locate = useLocation();
  return (
    <>
      <div
        id="leftCloud"
        style={{
          position: "relative",
          transition: "all 1s",
          left: locate.pathname == "/2" ? 0 : -1000,
        }}
      >
        <Circle size={600} left={1100} bottom={-250} bgColor={"#BFDBFE"} />
        <Circle size={900} left={900} bottom={-750} bgColor={"#ffebf7"} />
        <Circle size={800} left={1100} bottom={-550} bgColor={"#fcfacf"} />
        <Circle size={500} left={1100} bottom={-300} bgColor={"#d1fdff"} />
      </div>
      <div
        id="rightCloud"
        style={{
          position: "relative",
          transition: "all 1s",
          left: locate.pathname == "/2" ? 0 : 1000,
        }}
      >
        <Circle size={600} left={-450} bottom={-300} bgColor={"#BFDBFE"} />
        <Circle size={500} left={-200} bottom={-350} bgColor={"#d1fdff"} />
        <Circle size={800} left={-600} bottom={-550} bgColor={"#fcfacf"} />
        <Circle size={900} left={-300} bottom={-800} bgColor={"#ffebf7"} />
      </div>
    </>
  );
}
