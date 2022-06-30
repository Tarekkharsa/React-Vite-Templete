// material
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

//
import { varWrapEnter } from './variants';

// ----------------------------------------------------------------------

type MotionContainerProps = {
  open: boolean;
  children: React.ReactNode;
};
export default function MotionContainer({
  open,
  children,
  ...other
}: MotionContainerProps) {
  return (
    <Box
      component={motion.div}
      initial={false}
      animate={open ? 'animate' : 'exit'}
      variants={varWrapEnter}
      {...other}
    >
      {children}
    </Box>
  );
}
