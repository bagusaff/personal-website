export const fadeIn = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

export const wrapper = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export const text = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0 },
};
