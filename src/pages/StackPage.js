export default function StackPage() {
  return (
    <>
      <section
        id="stack"
        className="h-[100vh] flex justify-center items-center flex-col"
      >
        <h1 className="text-[white] text-center pt-[150px] text-[40px]">
          <span className="border p-2 pt-3 rounded-[30px]">MY SKILL</span>
        </h1>
        <nav className="h-full w-[70%] flex flex-col select-none border p-10 mt-5 justify-around text-white gap">
          <p className="text-yellow-500 font-bold text-[25px]">FRONT-END</p>
          <ul className="border gap-5 flex">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>REACT</li>
          </ul>
          <p className="text-yellow-500 font-bold text-[25px]">BACK-END</p>
          <ul className="border gap-5 flex">
            <li>MYSQL</li>
            <li>MariaDB</li>
            <li>Linux</li>
            <li>node.js</li>
          </ul>
          <p className="text-yellow-500 font-bold text-[25px]">LANGUAGE</p>
          <ul className="border gap-5 flex">
            <li>C</li>
            <li>JAVA</li>
            <li>PYTHON</li>
          </ul>
        </nav>
      </section>
    </>
  );
}
