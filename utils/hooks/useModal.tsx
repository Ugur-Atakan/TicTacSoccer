import React, { useState } from "react";

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);
    const [id,setId]=useState<number>(0);

    const openModal = (id:number) => {
        setId(id);
        setIsShowing(true);
    };

    const closeModal = () => {
        setIsShowing(false);
    };

    return {
        id,
        isShowing,
        openModal,
        closeModal,
    };
};

export default useModal;
