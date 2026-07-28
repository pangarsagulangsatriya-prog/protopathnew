export const protoEase = [0.22, 1, 0.36, 1]; // standard architectural ease

export const duration = {
  instant: 0.12,
  fast: 0.16, // 160ms for hover interactions
  standard: 0.32, // 320ms for reveals and layouts
  slow: 0.7,
  sequence: 1.2
};

export const distance = {
  micro: 4,
  small: 8,
  medium: 16,
  long: 32
};

// Return reduced motion aware variants by accepting a boolean flag
export const getProtoVariants = (prefersReducedMotion: boolean) => {
  const safeDuration = prefersReducedMotion ? 0 : duration.standard;
  const safeFast = prefersReducedMotion ? 0 : duration.fast;
  
  return {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: safeDuration, ease: protoEase } },
      exit: { opacity: 0, transition: { duration: safeFast, ease: protoEase } }
    },
    lineDraw: {
      initial: { pathLength: 0, opacity: prefersReducedMotion ? 1 : 0 },
      animate: { 
        pathLength: 1, 
        opacity: 1, 
        transition: { duration: prefersReducedMotion ? 0 : duration.slow, ease: protoEase } 
      }
    },
    axisTravel: {
      initial: { x: prefersReducedMotion ? 0 : -distance.long, opacity: 0 },
      animate: { 
        x: 0, 
        opacity: 1, 
        transition: { duration: safeDuration, ease: protoEase } 
      }
    },
    panelReveal: {
      initial: { y: prefersReducedMotion ? 0 : distance.medium, opacity: 0 },
      animate: { 
        y: 0, 
        opacity: 1, 
        transition: { duration: safeDuration, ease: protoEase } 
      }
    },
    metadataReveal: {
      initial: { y: prefersReducedMotion ? 0 : -distance.small, opacity: 0 },
      animate: { 
        y: 0, 
        opacity: 1, 
        transition: { duration: safeFast, ease: protoEase } 
      },
      exit: {
        y: prefersReducedMotion ? 0 : -distance.small, 
        opacity: 0, 
        transition: { duration: safeFast, ease: protoEase } 
      }
    },
    freeze: {
      initial: { opacity: 0.5, scale: prefersReducedMotion ? 1 : 1.05 },
      animate: { 
        opacity: 1, 
        scale: 1, 
        transition: { duration: prefersReducedMotion ? 0 : duration.instant, ease: 'linear' } 
      }
    },
    glitch: {
      initial: { x: 0 },
      animate: { 
        x: prefersReducedMotion ? 0 : [-2, 2, -1, 1, 0],
        transition: { duration: prefersReducedMotion ? 0 : duration.fast, ease: 'linear' } 
      }
    },
    staggeredSequence: {
      initial: { opacity: 1 }, // Parent variant, children use 'fade' or 'panelReveal'
      animate: {
        opacity: 1,
        transition: {
          staggerChildren: prefersReducedMotion ? 0 : 0.1,
          delayChildren: prefersReducedMotion ? 0 : 0.1,
        }
      }
    },
    routeWipe: {
      initial: { opacity: 0, y: prefersReducedMotion ? 0 : distance.small },
      animate: { 
        opacity: 1, 
        y: 0,
        transition: { duration: safeDuration, ease: protoEase } 
      },
      exit: { 
        opacity: 0, 
        y: prefersReducedMotion ? 0 : -distance.small,
        transition: { duration: safeFast, ease: protoEase } 
      }
    },
    routeWipeLine: {
      initial: { scaleX: 0, transformOrigin: 'left' },
      animate: { 
        scaleX: 1, 
        transition: { duration: prefersReducedMotion ? 0 : 0.4, ease: protoEase } 
      },
      exit: {
        scaleX: 0,
        transformOrigin: 'right',
        transition: { duration: prefersReducedMotion ? 0 : 0.3, ease: protoEase } 
      }
    }
  };
};
