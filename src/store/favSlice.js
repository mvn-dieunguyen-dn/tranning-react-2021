import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const favSlice = createSlice({
  name: 'favCounter',
  initialState,
  reducers: {
    toggle: (state, value) => {
      const idx = state.value.indexOf(value.payload)
      if (idx !== -1) {
        state.value.splice(idx, 1)
      } else {
        state.value.push(value.payload)
      }
      // console.log(idx);
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggle } = favSlice.actions

export default favSlice.reducer
