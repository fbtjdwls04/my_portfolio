import { useEffect, useState } from "react";

export default function HomePage() {
  const [bgOpacity, setBgOpacity] = useState(1);
  const [color, setColor] = useState(["#ffffff", "#ffffff"]);
  useEffect(() => {
    setTimeout(() => {
      setBgOpacity(0.7);
      setColor(["#6EE7B7", "yellow"]);
    }, 1000);
  });
  return (
    <>
      <section
        id="home"
        className="h-[100vh] bg-no-repeat bg-cover "
        style={{
          backgroundImage: "url(https://picsum.photos/id/63/5000/2813)",
        }}
      >
        <div
          className="h-[100vh] w-full flex justify-center items-center flex-col text-[120px] select-none"
          style={{
            backgroundColor: `rgba(0,0,0,${bgOpacity})`,
            transition: "background-color 5s",
          }}
        >
          <p
            className="font-bold"
            style={{
              color: color[0],
            }}
          >
            FRONT-END
            <span className="text-white text-[50px] ml-7">DEV.</span>
          </p>
          <p
            className="font-bold text-[30px]"
            style={{
              color: color[1],
            }}
          >
            PORT FOLIO
          </p>
        </div>
      </section>
    </>
  );
}
