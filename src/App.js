import { useRef } from "react";
import AboutPage from "./pages/AboutPage";
import WorksPage from "./pages/WorksPage";
import HomePage from "./pages/HomePage";
import StackPage from "./pages/StackPage";
import Topbar from "./components/Topbar";

export default function App() {
  const outerDivRef = useRef();
  return (
    <div>
      <Topbar outerDivRef={outerDivRef} />
      <section ref={outerDivRef} id="outer">
        <HomePage />
        <AboutPage />
        <StackPage />
        <WorksPage />
      </section>
    </div>
  );
}
