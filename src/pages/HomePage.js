import { useEffect, useState } from "react";
import Circle from "../components/Circle";

export default function HomePage() {
  const [bgOpacity, setBgOpacity] = useState(1);
  const [color, setColor] = useState(["#ffffff", "#ffffff"]);
  useEffect(() => {
    setTimeout(() => {
      setBgOpacity(0.8);
      setColor(["#6EE7B7", "yellow"]);
    }, 1000);
  });
  return (
    <>
      <section
        id="home"
        className="h-[100vh] bg-no-repeat bg-cover relative overflow-hidden"
        style={{
          backgroundImage: "url(https://picsum.photos/id/63/5000/2813)",
        }}
      >
        <div
          className="h-[100vh] w-full flex justify-center items-center flex-col select-none"
          style={{
            backgroundColor: `rgba(0,0,0,${bgOpacity})`,
            transition: "background-color 5s",
          }}
        >
          <div className="lg:scale-100 md:scale-50 whitespace-nowrap">
            <p
              className="font-bold text-[120px]"
              style={{
                color: color[0],
              }}
            >
              FRONT-END
              <span className="text-white text-[50px] ml-7">DEV.</span>
            </p>
            <p
              className="font-bold text-[30px] text-center"
              style={{
                color: color[1],
              }}
            >
              PORT FOLIO
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
