import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    waitingLobby: [],
    currentMatch: [],
    winnersLounge: []
}

export const queueSlice = createSlice({
    name: 'queue',
    initialState,
    reducers: {
        enqueue: (state, action) => {
            const team = action.payload;
            const { currentMatch } = state;

            if (currentMatch.length <= 1) {
                currentMatch.push(team);
            } else {
                const { waitingLobby } = state;
                waitingLobby.push(team)
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { enqueue, } = queueSlice.actions

export default queueSlice.reducer