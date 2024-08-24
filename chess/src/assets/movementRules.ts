import { movementRule } from "./returnValidMoves";

export const getRookMoves = () => {
  const up: movementRule = {
    xModifier: 0,
    yModifier: -1,
    repeating: true,
  };
  const down: movementRule = {
    xModifier: 0,
    yModifier: 1,
    repeating: true,
  };
  const left: movementRule = {
    xModifier: -1,
    yModifier: 0,
    repeating: true,
  };
  const right: movementRule = {
    xModifier: 1,
    yModifier: 0,
    repeating: true,
  };

  return [up, down, left, right];
};

export const getBishopMoves = () => {
  const upLeft: movementRule = {
    xModifier: -1,
    yModifier: -1,
    repeating: true,
  };
  const downLeft: movementRule = {
    xModifier: -1,
    yModifier: 1,
    repeating: true,
  };
  const upRight: movementRule = {
    xModifier: 1,
    yModifier: -1,
    repeating: true,
  };
  const downRight: movementRule = {
    xModifier: 1,
    yModifier: 1,
    repeating: true,
  };

  return [upLeft, upRight, downLeft, downRight];
};

export const getKingMoves = () => {
  const upLeft: movementRule = {
    xModifier: -1,
    yModifier: -1,
    repeating: false,
  };
  const downLeft: movementRule = {
    xModifier: -1,
    yModifier: 1,
    repeating: false,
  };
  const upRight: movementRule = {
    xModifier: 1,
    yModifier: -1,
    repeating: false,
  };
  const downRight: movementRule = {
    xModifier: 1,
    yModifier: 1,
    repeating: false,
  };
  const up: movementRule = {
    xModifier: 0,
    yModifier: -1,
    repeating: false,
  };
  const down: movementRule = {
    xModifier: 0,
    yModifier: 1,
    repeating: false,
  };
  const left: movementRule = {
    xModifier: -1,
    yModifier: 0,
    repeating: false,
  };
  const right: movementRule = {
    xModifier: 1,
    yModifier: 0,
    repeating: false,
  };

  return [upLeft, upRight, downLeft, downRight, up, down, left, right];
};

export const getQueenMoves = () => {
  const upLeft: movementRule = {
    xModifier: -1,
    yModifier: -1,
    repeating: true,
  };
  const downLeft: movementRule = {
    xModifier: -1,
    yModifier: 1,
    repeating: true,
  };
  const upRight: movementRule = {
    xModifier: 1,
    yModifier: -1,
    repeating: true,
  };
  const downRight: movementRule = {
    xModifier: 1,
    yModifier: 1,
    repeating: true,
  };
  const up: movementRule = {
    xModifier: 0,
    yModifier: -1,
    repeating: true,
  };
  const down: movementRule = {
    xModifier: 0,
    yModifier: 1,
    repeating: true,
  };
  const left: movementRule = {
    xModifier: -1,
    yModifier: 0,
    repeating: true,
  };
  const right: movementRule = {
    xModifier: 1,
    yModifier: 0,
    repeating: true,
  };

  return [upLeft, upRight, downLeft, downRight, up, down, left, right];
};
export const getKnightMoves = () => {
  const upLeft: movementRule = {
    xModifier: -1,
    yModifier: -2,
    repeating: false,
  };
  const upRight: movementRule = {
    xModifier: 1,
    yModifier: -2,
    repeating: false,
  };
  const downLeft: movementRule = {
    xModifier: -1,
    yModifier: 2,
    repeating: false,
  };
  const downRight: movementRule = {
    xModifier: 1,
    yModifier: 2,
    repeating: false,
  };
  const lowerLeft: movementRule = {
    xModifier: -2,
    yModifier: 1,
    repeating: false,
  };
  const upperLeft: movementRule = {
    xModifier: -2,
    yModifier: -1,
    repeating: false,
  };
  const lowerRight: movementRule = {
    xModifier: 2,
    yModifier: 1,
    repeating: false,
  };
  const upperRight: movementRule = {
    xModifier: 2,
    yModifier: -1,
    repeating: false,
  };

  return [
    upLeft,
    upRight,
    downLeft,
    downRight,
    lowerLeft,
    upperLeft,
    lowerRight,
    upperRight,
  ];
};

export const getPawnMoves = () => {
  // Fillermove for pawns
  const firstAttack: movementRule = {
    xModifier: 0,
    yModifier: 0,
    repeating: false,
  };

  return [firstAttack];
};
