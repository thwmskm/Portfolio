import { useState, useEffect } from "react";
import styles from "./Cursor.module.css";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

const CURSOR_SIZES = {
  enter: 48,
  play: 48,
  link: 12,
  default: 9,
};

function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState("default");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("[data-cursor]");
      setCursorType(target ? target.dataset.cursor : "default");
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (isMobile) return null;

  const cursorChanger = () => {
    switch (cursorType) {
      case "link":
        return `${styles.cursor} ${styles.linkType}`;
      case "enter":
        return `${styles.cursor} ${styles.enterType}`;
      case "play":
        return `${styles.cursor} ${styles.playType}`;
      default:
        return `${styles.cursor} ${styles.defaultType}`;
    }
  };

  const size = CURSOR_SIZES[cursorType] ?? CURSOR_SIZES.default;

  return (
    <motion.div
      className={cursorChanger()}
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
      }}
      animate={{
        width: size,
        height: size,
        transition: { type: "spring", stiffness: 150, damping: 25 },
      }}
    >
      {cursorType === "enter" && <ArrowUpRight className={styles.enterArrow} />}
      {cursorType === "play" && <Play className={styles.playIcon} />}
    </motion.div>
  );
}

export default Cursor;
