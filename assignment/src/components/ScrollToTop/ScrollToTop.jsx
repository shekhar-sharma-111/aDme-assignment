import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`position-fixed bottom-0 end-0 p-5 ${
        isVisible ? "d-block" : "d-none"
      }`}
      style={{ zIndex: 1000 }}
    >
      <button
        onClick={scrollToTop}
        className="btn btn-primary rounded-circle"
        style={{ width: "50px", height: "50px", fontSize: "24px" }}
      >
        ↑
      </button>
    </div>
  );
};

export default ScrollToTop;
