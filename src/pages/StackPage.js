export default function StackPage() {
  return (
    <>
      <section
        id="stack"
        className="h-[100vh] flex justify-center items-center flex-col select-none"
      >
        <h1 className="text-[gold] text-center mt-[120px] text-[40px] font-bold">
          MY SKILL
        </h1>
        <nav className="h-full w-[70%] flex flex-col p-10 mt-5 text-white gap-[35px] items-center">
          <p className="text-black">FRONT-END</p>
          <ul className="gap-5 flex">
            <li>
              <img
                src="https://images.velog.io/images/milkyway/post/4b6bec16-34ed-4d40-acb7-23d596bb497e/HTML%20logo.jpeg"
                alt="HTML5"
              />
            </li>
            <li>
              <img
                className="p-[7px]"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                alt="CSS3"
              />
            </li>
            <li>
              <img
                className="p-[7px]"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                alt="JS"
              />
            </li>
            <li>
              <img
                className="p-[7px]"
                src="https://cdn.iconscout.com/icon/free/png-256/free-jquery-3521520-2945023.png"
                alt="JQuery"
              />
            </li>
            <li>
              <img
                className="pt-1"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                alt="React"
              />
            </li>
          </ul>
          <p className="text-yellow-500">BACK-END</p>
          <ul className="gap-5 flex">
            <li>
              <img
                src="https://w7.pngwing.com/pngs/505/123/png-transparent-mysql-hd-logo.png"
                alt="MySQL"
              />
            </li>
            <li>
              <img
                className="pt-2"
                src="https://mariadb.com/wp-content/uploads/2019/11/mariadb-logo-vert_white-transparent.png"
                alt="MariaDB"
              />
            </li>
            <li>
              <img
                className="scale-[1.2]"
                src="https://cdn.icon-icons.com/icons2/2235/PNG/512/linux_os_logo_icon_134670.png"
                alt="Linux"
              />
            </li>
            <li className="relative">
              <img
                className="scale-[0.8] absolute top-[-5px]"
                src="https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png"
                alt="node.js"
              />
            </li>
          </ul>
          <p className="text-yellow-500">LANGUAGE</p>
          <ul className="gap-5 flex">
            <li className="relative">
              <img
                className="scale-[0.8] absolute top-[-5px]"
                src="https://i.namu.wiki/i/KcqDuQYTxNpUcLIMZTg28QXse0XiWx1G7K68kYYCo1GuhoHmhB_V8Qe9odGGt0BH9-0nQZTN53WXTNpDmwVfWQ.svg"
                alt="C"
              />
            </li>
            <li>
              <img
                src="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_logo_icon_146458.png"
                alt="JAVA"
              />
            </li>
            <li>
              <img
                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/python_logo_icon_168886.png"
                alt="PYTHON"
              />
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
