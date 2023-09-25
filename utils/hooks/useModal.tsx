import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectCellID } from "../redux/reducers/gameReducers/gameBoard";
const useModal = () => {
    const dispatch = useDispatch();
    const [isShowing, setIsShowing] = useState(false);

    const openModal = (id:number) => {
        dispatch(selectCellID(id));
        setIsShowing(true);
    };

    const closeModal = () => {
        setIsShowing(false);
    };

    return {
        isShowing,
        openModal,
        closeModal,
    };
};

export default useModal;
