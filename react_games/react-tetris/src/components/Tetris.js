import React from "react";

// import { createStage } from "../gameHelpers";
// components

import Stage from './Stage';
import Display from './Display';
import StartButton from "./StartButton";

import { createStage } from "../gameHelpers";
import { StyledTetris, StyledTetrisWrapper } from "./styles/StyledTetris";

const Tetris = () => {


    return(
        <StyledTetrisWrapper>
        <StyledTetris>
            <Stage stage={createStage()} />
            <aside>
            <div>
                <Display text="Score" />
                <Display text="Rows" />
                <Display text="Level" />
            </div>
            <StartButton />
            </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
};

export default Tetris