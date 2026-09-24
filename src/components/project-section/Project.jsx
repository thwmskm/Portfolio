import styles from "./Project.module.css";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

import PreviewCard from "./PreviewCard.jsx";
import { projects } from "./projectMetaData.js";

function Project({ handleProjectSwap }) {
  const [hoverId, setHoverId] = useState(null);
  const [fade, setFade] = useState(false);
  const [previewY, setPreviewY] = useState(0);

  //For switching project detail views
  // const [activeProject, setActiveProject] = useState(null);
  // const [projFade, setProjFade] = useState(false);
  //conatins the name of the project that it is a summary for in the parameter
  // const [summary, setSummary] = useState(null);

  // //fade animation for project page swaps
  // const handleProjectSwap = (newProject) => {
  //   if (newProject === activeProject) {
  //     return;
  //   }
  //   setProjFade(true);
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  //   setTimeout(() => {
  //     setActiveProject(newProject);
  //     setProjFade(false);
  //   }, 400);
  // };

  //To call project summary component
  // const handleSummary = (projSummary) => {
  //   setProjFade(true);
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  //   setTimeout(() => {
  //     setActiveProject(null);
  //     setSummary(projSummary);

  //     setProjFade(false);
  //   }, 400);
  // };

  //fade animation for going back to projects
  // const handleBack = () => {
  //   setProjFade(true);
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  //   setTimeout(() => {
  //     setActiveProject(null);
  //     setProjFade(false);
  //   }, 400);
  // };

  // const handleClose = () => {
  // setProjFade(true);
  // window.scrollTo({ top: 0, behavior: "smooth" });
  // setTimeout(() => {
  //   setActiveProject(summary);
  //   setSummary(false);
  //   setProjFade(false);
  // }, 400);
  // };

  //determine which project to show
  // function determineProject() {
  //   switch (activeProject) {
  //     case 1:
  //       return (
  //         <EvStore
  //           project={projects.find((p) => p.id === activeProject)}
  //           onBack={handleBack}
  //           onNext={handleNext}
  //           onPrev={handlePrev}
  //           onSummary={handleSummary}
  //         ></EvStore>
  //       );
  //     case 2:
  //       return (
  //         <GroceryApp
  //           project={projects.find((p) => p.id === activeProject)}
  //           onBack={handleBack}
  //           onNext={handleNext}
  //           onPrev={handlePrev}
  //           onSummary={handleSummary}
  //         ></GroceryApp>
  //       );
  //     default:
  //       return null;
  //   }
  // }

  //display selected project
  // if (activeProject) {
  //   return (
  //     <div className={`${styles.container} ${projFade ? styles.projFade : ""}`}>
  //       {determineProject()}
  //     </div>
  //   );
  // }

  //determine which project summary to display
  // function determineSummary() {
  //   switch (summary) {
  //     case 2:
  //       return <GroceryAppSummary onClose={handleClose}></GroceryAppSummary>;
  //     default:
  //       return null;
  //   }
  // }

  //display project summary
  // if (summary) {
  //   return (
  //     <div className={`${styles.container} ${projFade ? styles.projFade : ""}`}>
  //       {determineSummary()}
  //     </div>
  //   );
  // }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.name}>
          <h1 className={styles.nameBold}>Hwan Kim</h1>
          <p>Software Developer</p>
          <p>Toronto</p>
        </div>
        <div className={styles.listContainer}>
          <div
            className={`${styles.preview} ${fade ? styles.show : ""}`}
            style={{ top: previewY }}
          >
            {hoverId && (
              <PreviewCard
                project={projects.find((p) => p.id === hoverId)}
              ></PreviewCard>
            )}
          </div>
          <div className={styles.list}>
            <p style={{ fontWeight: 700, marginTop: 0 }}>Selected Projects</p>
            <div className={styles.line}></div>
            {projects.map((project) => (
              <article
                key={project.id}
                onMouseEnter={(e) => {
                  setHoverId(project.id);
                  setFade(true);
                  const rect = e.currentTarget.getBoundingClientRect();
                  //Must elevate it by x amount to align with list item
                  setPreviewY(rect.top - 100);
                }}
                onMouseLeave={() => {
                  //Don't set to null in order for preview card to fade out
                  //setHoverId(null);
                  setFade(false);
                }}
                onClick={() => handleProjectSwap(project.id)}
                data-cursor="link"
              >
                <div className={styles.wrapper}>
                  <ArrowRight className={styles.arrow}></ArrowRight>
                  <div className={styles.title}>
                    0{project.id}. &nbsp; &nbsp; {project.title}
                  </div>
                </div>
                <div className={styles.date}>{project.date}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
