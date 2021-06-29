export const wrapper = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.7 } },
};

export const item = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
};

export const text = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0 },
};

export const social = {
  show: { transition: { staggerChildren: 0.1 } },
};

export const icon = {
  hidden: {
    opacity: 0,
    scale: 3,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
};
