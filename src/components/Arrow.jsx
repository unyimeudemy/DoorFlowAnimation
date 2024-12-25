import { useAnimationControls, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    height: 195px;
`;

const ArrowLine = styled.div`
  position: relative;
  width: 2px;
  height: 100px;
  background-color: #e6e6e6; /* Base color for unfilled area */
  overflow: hidden;
`;



const FillLine = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background-color: #67b2e4; /* Fill color */
  transform-origin: top; /* Ensures the fill grows from the top */
`;


const ArrowHead = styled(motion.div)`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 16px solid #e6e6e6; /* Base color for the arrowhead */
  margin-top: -1px;
`;


const Arrow = ({animateArrow}) => {

  const fillLineVariants = {
    initial: { scaleY: 0 }, 
    animate: {
      scaleY: 1,
      transition: { duration: 2, ease: "easeInOut" }, 
    },
  };

  const arrowHeadVariants = {
    initial: { borderTopColor: "#e6e6e6" },
    animate: {
      borderTopColor: "#67b2e4",
      transition: { delay: 2, duration: 0.7, ease: "easeInOut" },
    },
  };

  // const arrowStart = () => {
  //   animateArrow.start("animate")
  // }


  return (
    <ArrowContainer>
      <ArrowLine>
        <FillLine
          variants={fillLineVariants}
          initial="initial"
          animate={animateArrow}
        />
      </ArrowLine>
      <ArrowHead
        variants={arrowHeadVariants}
        initial="initial"
        animate={animateArrow}
      />
    </ArrowContainer>

  );
};

export default Arrow;


