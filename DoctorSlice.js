import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "doctor",
    initialState: {
        value: {
            name: undefined, msg: undefined, isLogin: false, type: undefined
        }
    },
    reducers: {
        doctorReducer: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { doctorReducer } = slice.actions
export default slice.reducer