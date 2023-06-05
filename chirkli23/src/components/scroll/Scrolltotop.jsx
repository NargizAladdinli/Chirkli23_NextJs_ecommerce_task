import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Scrolltotop = () => {
  const [top, setTop] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setTop(true);
      } else {
        setTop(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div id="scroll">
      {top && (
        <button onClick={scrollUp} className="scroll-button">
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};
export default Scrolltotop;
