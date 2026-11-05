import React, { createContext, useContext, useState } from "react";
import styles from "./Toast.module.css";

const ToastContext = createContext();

export function Toast({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "info", duration = 1500) => {
    const id = Date.now() + Math.random();

    setToasts((prev) => [...prev, { id, message, type, visible: true }]);

    setTimeout(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, visible: false } : t)),
      );

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 400);
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}

      <div className={styles.toastViewport} aria-live="polite">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`${styles.toast} ${
              toast.visible ? styles.toastVisible : styles.toastHidden
            }`}
            role="status"
          >
            <span className={styles.toastMessage}>{toast.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
