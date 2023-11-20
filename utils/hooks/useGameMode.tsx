import React, { useState } from "react";

enum GameMode {
  Single = 1,
  Multi = 2,
}

const useGameMode = () => {
  const [gameMode, setGameMode] = useState<GameMode>(GameMode.Single);

  const singleMode = () => {
    setGameMode(GameMode.Single);
  };

  const multiMode = () => {
    setGameMode(GameMode.Multi);
  };

  return {
    gameMode,
    setGameMode,
    singleMode,
    multiMode,
  };
};

export default useGameMode;
