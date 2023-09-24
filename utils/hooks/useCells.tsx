import React, { useState } from "react";

const useModal = () => {
    const [selectedSoccerCell,setSelectedSoccerCell]=useState<Number>();

    return {
       selectedSoccerCell,
       setSelectedSoccerCell
    };
};

export default useModal;
