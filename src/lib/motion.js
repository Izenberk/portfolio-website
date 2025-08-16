export const spring = { type: "spring", stiffness: 300, damping: 24 };
export const fade = (delay = 0) => ({
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { delay, duration: 0.4 } },
});
