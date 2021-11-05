import React from "react";
import { StyledCell } from "./styles/StyleCell";
import { TETROMINOS } from "../tetraminos";

const Cell = ({ type }) => (
    <StyledCell type={'L'} color={TETROMINOS['L'].color}>Cell</StyledCell>
);

export default Cell;