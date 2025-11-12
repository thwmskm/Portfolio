import { useState, useEffect } from "react";
import styles from "./Cursor.module.css";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState("default");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile viewport
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Track mouse position
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    // Detect hover targets
    const handleMouseOver = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setCursorType(target.dataset.cursor);
      } else {
        setCursorType("default");
      }
    };

    // Add listeners
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (isMobile) return null; // Do not render custom cursor on mobile

  const cursorChanger = () => {
    switch (cursorType) {
      case "link":
        return `${styles.cursor} ${styles.linkType}`;
      case "enter":
        return `${styles.cursor} ${styles.enterType}`;
      default:
        return `${styles.cursor} ${styles.defaultType}`;
    }
  };

  return (
    <motion.div
      className={cursorChanger()}
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
      }}
      animate={{
        width: cursorType === "enter" ? 48 : cursorType === "link" ? 12 : 9,
        height: cursorType === "enter" ? 48 : cursorType === "link" ? 12 : 9,
        transition: { type: "spring", stiffness: 150, damping: 25 },
      }}
    >
      {cursorType === "enter" && (
        <ArrowUpRight className={styles.enterArrow}></ArrowUpRight>
      )}
    </motion.div>
  );
}

export default Cursor;
