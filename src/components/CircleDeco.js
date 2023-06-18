import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Circle from "./Circle";

export default function CircleDeco() {
  const locate = useLocation();
  return (
    <>
      <div
        style={{
          position: "relative",
          transition: "all 1s",
          bottom: locate.pathname == "/2" ? 0 : -1000,
        }}
      >
        <Circle
          size={700}
          bottom={-450}
          left={350}
          backgroundColor={"rgb(180,230,180)"}
        />
      </div>
      <div
        id="leftCloud"
        style={{
          position: "relative",
          transition: "all 1s",
          left: locate.pathname == "/2" ? 0 : -1000,
        }}
      >
        <Circle
          size={600}
          left={1100}
          bottom={-250}
          backgroundColor={"#BFDBFE"}
        />
        <Circle
          size={900}
          left={900}
          bottom={-750}
          backgroundColor={"#ffebf7"}
        />
        <Circle
          size={800}
          left={1100}
          bottom={-550}
          backgroundColor={"#fcfacf"}
        />
        <Circle
          size={500}
          left={1100}
          bottom={-300}
          backgroundColor={"#d1fdff"}
        />
      </div>
      <div
        id="rightCloud"
        style={{
          position: "relative",
          transition: "all 1s",
          left: locate.pathname == "/2" ? 0 : 1000,
        }}
      >
        <Circle
          size={600}
          left={-450}
          bottom={-300}
          backgroundColor={"#BFDBFE"}
        />
        <Circle
          size={500}
          left={-200}
          bottom={-350}
          backgroundColor={"#d1fdff"}
        />
        <Circle
          size={800}
          left={-600}
          bottom={-550}
          backgroundColor={"#fcfacf"}
        />
        <Circle
          size={900}
          left={-300}
          bottom={-800}
          backgroundColor={"#ffebf7"}
        />
      </div>
    </>
  );
}
