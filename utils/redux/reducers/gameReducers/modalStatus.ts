import {createSlice} from '@reduxjs/toolkit';

interface ModalState {
  isVisible: boolean;
  type: string;
}

const initialState: ModalState = {
  isVisible: false,
  type: '',
};

export const modalStatus = createSlice({
  name: 'modalstatus',
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.isVisible = true;
      state.type = action.payload;
    },
    hideModal: state => {
      state.isVisible = false;
      state.type = '';
    },
  },
});

export const {showModal, hideModal} = modalStatus.actions;
export default modalStatus.reducer;
