import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axiosMessage";

const initialState = {
    messages: [],
    isPurchasing: false,
    isLoading: false,
    error: null,
    author: "",
    message: ""
}

export const fetchMessages = createAsyncThunk(`messages/fetch`, async () => {
    const response = await axios.get("/messages");
    return response.data
})

export const sendMessage = createAsyncThunk(`message/send`, async (message) => {
    const response = await axios.post("/messages", message);
    return response.data;
})

const messageSlice = createSlice({
    name: "messages",
    initialState,

    reducers: {
        inputChangeHandler: (state, action) => {
            state[action.payload.name] = action.payload.value
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchMessages.pending, state => {
                state.isLoading = true;
            })

            .addCase(fetchMessages.rejected, (state, action) => {
                state.error = action.error.message;
            })

            .addCase(fetchMessages.fulfilled, (state, action) => {
                state.messages = action.payload;
                state.isLoading = false;
            })

            .addCase(sendMessage.pending, state => {
                state.isLoading = true;
            })

            .addCase(sendMessage.rejected, (state, action) => {
                state.error = action.error.message;
            })

            .addCase(sendMessage.fulfilled, (state, action) => {
                state.isLoading = false;
                state.author = "";
                state.message = "";
                state.error = "";
            })
    }

})
export const { inputChangeHandler } = messageSlice.actions;
export default messageSlice.reducer
