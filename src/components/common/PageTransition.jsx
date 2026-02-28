import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function PageTransition({ children }) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("enter");

  useEffect(() => {
    // When location changes, trigger exit then enter
    setTransitionStage("exit");

    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setTransitionStage("enter");
    }, 150); // Short exit duration

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // On first render, just show enter
  useEffect(() => {
    setTransitionStage("enter");
  }, []);

  const styles = {
    enter: {
      animation: "fadeInUp 0.4s ease-out both",
    },
    exit: {
      animation: "fadeIn 0.15s ease-in both",
      opacity: 0.3,
    },
  };

  return <div style={styles[transitionStage]}>{displayChildren}</div>;
}

export default PageTransition;
