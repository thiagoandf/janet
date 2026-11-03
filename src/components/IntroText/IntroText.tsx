import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { animate, motion, useAnimate, useMotionValue } from 'motion/react';
import type {
  TargetAndTransition,
  ValueAnimationTransition,
} from 'motion/react';
import {
  RAINBOW_GRADIENT,
  RAINBOW_LOOP_POSITIONS,
  DEFAULT_BACKGROUND_POSITION,
} from '@/lib/rainbow';
import classes from './IntroText.module.css';

const fadeVariant = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i, duration: 2 },
  }),
};

const circleLoopTransition: ValueAnimationTransition<string> = {
  duration: 2,
  ease: 'easeInOut',
  times: [0.3, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  repeat: Infinity,
  repeatDelay: 1,
};

const circleLoop: TargetAndTransition = {
  borderRadius: ['20%', '40%', '80%', '100%', '80%', '40%', '20%'],
  transition: circleLoopTransition,
};

// Empty target: freezes the loop styles where they are while we take over
// with the imperative fill animation below.
const frozen: TargetAndTransition = {};

function IntroText({ className }: { className?: string }) {
  const navigate = useNavigate();
  const [redirecting, setRedirecting] = useState(false);
  const loopRef = useRef<ReturnType<typeof animate> | null>(null);

  const [circleRef, animateCircle] = useAnimate<HTMLDivElement>();
  const backgroundPosition = useMotionValue(DEFAULT_BACKGROUND_POSITION);

  useEffect(() => {
    loopRef.current = animate(
      backgroundPosition,
      RAINBOW_LOOP_POSITIONS,
      circleLoopTransition,
    );
    return () => loopRef.current?.stop();
  }, [backgroundPosition]);

  const handleClick = async () => {
    if (redirecting || !circleRef.current) return;
    loopRef.current?.stop();
    setRedirecting(true);
    await animateCircle(circleRef.current, { scale: 90 }, { duration: 0.8 });
    await navigate('/profile', {
      state: { backgroundPosition: backgroundPosition.get() },
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      void handleClick();
    }
  };

  return (
    <motion.div
      className={`${classes.root} ${className}`}
      role="button"
      tabIndex={0}
      aria-label="Continue to profile"
      onTap={() => void handleClick()}
      onKeyDown={handleKeyDown}
    >
      <motion.div
        className={classes.introduction}
        variants={fadeVariant}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        Hello there! My name is
      </motion.div>
      <motion.div
        className={classes.nameContainer}
        variants={fadeVariant}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <div className={classes.name}>Thiago</div>
        <motion.div
          ref={circleRef}
          className={classes.circle}
          style={{
            backgroundImage: RAINBOW_GRADIENT,
            backgroundPosition,
          }}
          animate={redirecting ? frozen : circleLoop}
        />
      </motion.div>
      <motion.div
        className={classes.pressAnyButton}
        variants={fadeVariant}
        initial="hidden"
        animate="visible"
        custom={4}
      >
        {'<click anywhere to continue />'}
      </motion.div>
    </motion.div>
  );
}

export default IntroText;
