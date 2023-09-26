import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "updatepatient",
    initialState: {
        value: undefined
    },
    reducers: {
        updatep : (state, action) => {
            state.value = action.payload
        }
       
    }
})

export const { updatep  } = slice.actions
export default slice.reducer