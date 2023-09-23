import {createSlice} from '@reduxjs/toolkit';

interface ModalState {
  isVisible: boolean;
  type: string;
  coordinats: {
    x: number;
    y: number;
  };
}

const initialState: ModalState = {
  isVisible: false,
  type: '',
  coordinats: {
    x: 0,
    y: 0,
  },
};

export const modalStatus = createSlice({
  name: 'modalstatus',
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.isVisible = true;
      state.type = action.payload;
      state.coordinats = action.payload.coordinates;
    },
    hideModal: state => {
      state.isVisible = false;
      state.type = '';
    },
  },
});

export const {showModal, hideModal} = modalStatus.actions;
export default modalStatus.reducer;
