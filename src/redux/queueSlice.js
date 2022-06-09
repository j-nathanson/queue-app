import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const queueSlice = createSlice({
    name: 'queue',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment, } = queueSlice.actions

export default queueSlice.reducer