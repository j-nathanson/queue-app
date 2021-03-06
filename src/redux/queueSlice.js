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
            const node = {
                name: team,
                winStreak: 0
            }

            if (currentMatch.length <= 1) {
                currentMatch.push(node);
            } else {
                const { waitingLobby } = state;
                waitingLobby.push(node)
            }
        },
        dequeue: (state) => {
            const team = state.waitingLobby.shift();
            state.currentMatch.push(team);
        },
        editTeam: (state, action) => {
            const { team, index, name, lobby } = action.payload;
            state[lobby][index] = { ...team, name }
        },
        deleteTeam: (state, action) => {
            const { index, lobby } = action.payload;
            state[lobby].splice(index, 1);
        },
        winMatch: (state, action) => {
            const node = action.payload;
            let { name, winStreak } = node;
            winStreak++;
            const newNode = { name, winStreak }

            if (newNode.winStreak >= 2) {
                state.winnersLounge.push(newNode);
                state.currentMatch = [];
            } else {
                state.currentMatch = [newNode];
            }
        },
        returnToCurrentMatch: (state) => {
            const node = state.winnersLounge.pop();
            state.currentMatch.push(node);
        }


    },
})

// Action creators are generated for each case reducer function
export const { enqueue, dequeue, deleteTeam, editTeam, winMatch, returnToCurrentMatch } = queueSlice.actions

export default queueSlice.reducer