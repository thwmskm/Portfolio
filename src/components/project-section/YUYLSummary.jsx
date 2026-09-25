import styles from "./YUYLSummary.module.css";
import { X } from "lucide-react";
import { useRef } from "react";

function FeatureVideo({ src, caption }) {
  const videoRef = useRef(null);

  const handleEnter = () => {
    videoRef.current?.play().catch(() => {});
  };

  const handleLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <section
      className={styles.gridChild}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className={styles.scBox}>
        <video
          ref={videoRef}
          className={`${styles.projSc} ${styles.ootdCrop}`}
          playsInline
          loop
          muted
          preload="metadata"
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
      {caption && <p className={styles.caption}>{caption}</p>}
    </section>
  );
}

function YUYLSummary({ onClose }) {
  const features = [
    { src: "/YUYL_ootdDemo.mp4", caption: "Uploading Outfit of the Day" },
    { src: "/YUYL_clothingDemo.mp4", caption: "Creating new clothing item" },
    { src: "/YUYL_outfitDemo.mp4", caption: "Creating new outfit combination" },
    { src: "/YUYL_profileDemo.mp4", caption: "Profile tab" },
  ];

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.closeComponent}
          data-cursor="link"
          onClick={onClose}
        >
          <X className={styles.closeBtn}></X>
          <div className={styles.close}>Close</div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.grid}>
            {features.map((f) => (
              <FeatureVideo key={f.src} {...f} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default YUYLSummary;
