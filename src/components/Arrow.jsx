import { animate, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

// Styled component for the arrow container
const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    height: 195px;
`;

// Styled component for the arrow line
const ArrowLine = styled.div`
  position: relative;
  width: 2px;
  height: 100px;
  background-color: #e6e6e6; /* Base color for unfilled area */
  overflow: hidden;
`;

// #e6e6e6
// background-color: #67b2e4; 


const FillLine = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background-color: #67b2e4; /* Fill color */
  transform-origin: top; /* Ensures the fill grows from the top */
`;


// Styled component for the arrowhead
const ArrowHead = styled(motion.div)`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 16px solid #e6e6e6; /* Base color for the arrowhead */
  margin-top: -1px;
`;

// border-top: 16px solid #67b2e4; 


const Arrow = () => {
  const fillLineVariants = {
    initial: { scaleY: 0 }, // Start with no fill
    animate: {
      scaleY: 1, // Fill to the full height
      transition: { duration: 3, ease: "easeInOut" }, // Animation duration and easing
    },
  };

  const arrowHeadVariants = {
    initial: { borderTopColor: "#e6e6e6" },
    animate: {
      borderTopColor: "#67b2e4",
      transition: { delay: 3, duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <ArrowContainer>
      <ArrowLine>
        {/* Animated fill line */}
        <FillLine
          variants={fillLineVariants}
          initial="initial"
          animate="animate"
        />
      </ArrowLine>
      <ArrowHead
        variants={arrowHeadVariants}
        initial="initial"
        animate="animate"
      />
    </ArrowContainer>

  );
};

export default Arrow;


