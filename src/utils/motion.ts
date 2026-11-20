export const PREMIUM_EASING = [0.22, 1, 0.36, 1] as const;
export const PREMIUM_EASING_CSS = 'cubic-bezier(0.22, 1, 0.36, 1)';

export const TIMINGS = {
  buttonHover: 0.18,
  productHover: 0.3,
  imageZoom: 0.4,
  dropdown: 0.22,
  sectionReveal: 0.6,
  heroAnimation: 0.9,
  cartDrawer: 0.35,
  pageTransition: 0.3,
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TIMINGS.sectionReveal,
      ease: PREMIUM_EASING,
    },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: TIMINGS.sectionReveal,
      ease: PREMIUM_EASING,
    },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: TIMINGS.sectionReveal,
      ease: PREMIUM_EASING,
    },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: PREMIUM_EASING,
    },
  },
};

export const dropdownVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: TIMINGS.dropdown,
      ease: PREMIUM_EASING,
    },
  },
  exit: {
    opacity: 0,
    y: 6,
    scale: 0.98,
    transition: {
      duration: 0.18,
      ease: PREMIUM_EASING,
    },
  },
};

export const drawerVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: {
      duration: TIMINGS.cartDrawer,
      ease: PREMIUM_EASING,
    },
  },
  exit: {
    x: '100%',
    transition: {
      duration: 0.28,
      ease: PREMIUM_EASING,
    },
  },
};
