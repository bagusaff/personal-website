export const wrapper = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.7 } },
};
export const filter = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { staggerChildren: 0.2 } },
};
export const text = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

export const list = {
  show: { transition: { staggerChildren: 0.1 } },
};
