export default function IntroPage() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(https://picsum.photos/id/45/4592/2576)",
        }}
        className="h-[100vh] bg-no-repeat bg-cover"
      >
        <div className="h-[100vh] w-full flex justify-center items-center flex-col text-[120px] select-none">
          <p className="text-green-300 font-bold">
            FRONT-END
            <span className="text-white text-[50px] ml-7">DEV.</span>
          </p>
          <p className="text-blue-300 font-bold text-[30px]">PROTFOLIO</p>
        </div>
      </div>
    </>
  );
}
